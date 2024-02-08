'use client';

import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon, CheckCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import '@/app/components/animation.css';
import EPassiLogo from './svg/EPassiLogo';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();
    const [myMoney, setMyMoney] = useState('');
    useEffect(() => {
        const mymoney_ = localStorage.getItem('mymoney') || undefined;
        setMyMoney( mymoney_ == undefined ? '0,00' : mymoney_);
        return;
    }, []);

    return (
        <div className="container mx-auto absolute top-0 left-0" style={{ overflowX: 'hidden' }}>
            <div className="grid grid-cols-2">
                <div className="flex justify-start">
                    <div className="p-3">
                        <button className='rounded-full w-8 h-8 border-gray-400 border-solid p-1' onClick={() => router.replace('/')} style={{ borderWidth: '1px' }}>
                            <XMarkIcon className='text-black' />
                        </button>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="p-3">
                        <button className='rounded-full w-28 h-10 border-gray-400 border-solid text-sm font-semibold' onClick={() => router.replace('/hidden')} style={{ borderWidth: '1px' }}>
                            <div className='flex justify-center items-center'>
                                <span className='p-2 flex justify-start'>
                                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="m18.637 2.152.463.772c-.463-.772-.464-.771-.464-.771h-.002l-.002.002-.008.004-.02.013-.06.039a4.734 4.734 0 0 0-.195.139c-.163.12-.384.298-.644.54-.521.487-1.198 1.234-1.868 2.307-1.345 2.151-2.637 5.568-2.637 10.727a.9.9 0 0 0 .9.9h4.1v4.1a.9.9 0 1 0 1.8 0v-18a.9.9 0 0 0-1.363-.772ZM18.2 15.024h-3.186c.139-4.328 1.267-7.142 2.35-8.873.286-.459.57-.844.836-1.163v10.036ZM3.9 2a.9.9 0 0 1 .9.9v4A2.1 2.1 0 0 0 6 8.798V2.9a.9.9 0 1 1 1.8 0v5.898A2.1 2.1 0 0 0 9 6.9v-4a.9.9 0 1 1 1.8 0v4c0 1.844-1.28 3.39-3 3.796V20.9a.9.9 0 1 1-1.8 0V10.696A3.902 3.902 0 0 1 3 6.9v-4a.9.9 0 0 1 .9-.9Z" fill="rgb(10,10,10)"></path></svg>
                                </span>
                                {myMoney.replace('.', ',')} €
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const MainInfo = () => {
    const [paidAmount, setPaidAmount] = useState('');
    const [restaraunt, setRestaraunt] = useState('');
    const router = useRouter();
    useEffect(() => {
        const restaraunt_ = localStorage.getItem('restaraunt') || undefined;
        setRestaraunt(restaraunt_ == undefined ? 'Vaihda ravintola asetuksista' : restaraunt_);
        const url = document.URL.split('?');
        if(url[1] !== undefined){
            const index = url[1].split('=');
            const purchase_history = localStorage.getItem('purchase_history') || '[]';
            if(purchase_history != '[]')
                setPaidAmount(JSON.parse(purchase_history).at(index[1]).sum);
        }
        return;
    }, []);

    return (
        <>
            <div className="container text-center relative h-[190vmin] justify-center items-center flex w-screen" style={{ overflowX: 'hidden' }}>
                <div className='w-screen'>
                    <div className='absolute inset-x-0 top-[8rem]'>
                        <div className='flex justify-center'>
                            <img src='./epassi-logo-v2.svg' className='w-[7rem] pb-1'></img>
                        </div>
                        <span className='font-semibold flex text-sm justify-center pb-12'><CheckCircleIcon className='w-5 h-5 mr-3' /> PAYMENT APPROVED</span>
                    </div>
                <h1 className='font-extrabold text-2xl'>{restaraunt}</h1>
                <h1 className='text-6xl font-semibold'>{paidAmount.replace('.', ',')}€</h1>
                <a onClick={() => router.replace('/reciept')} className='flex flex-nowrap justify-center content-center items-center pt-6 underline'>Receipt<ChevronRightIcon className='w-3 h-3 text-black' /></a>
                </div>
            </div>
        </>
    )
}

const PaymentInformation = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(16 * 60);
    const [confirmationCode, setConfirmationCode] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const name_ = localStorage.getItem('name') || undefined;
        setName(name_ == undefined ? 'Vaihda nimi asetuksista' : name_);

        const url = document.URL.split('?');
        if(url[1] !== undefined){
            const index = url[1].split('=');
            const purchase_history = localStorage.getItem('purchase_history') || '[]';
            if(purchase_history !== '[]')
                setConfirmationCode(JSON.parse(purchase_history).at(index[1]).confirmation_code);
        }
        const getCurrentTime = () => {
            let now = new Date();
            if(localStorage.getItem('purchase_history')){
                const url = document.URL.split('?');
                if(url[1] !== undefined){
                    const index = url[1].split('=');
                    const purchase_history = localStorage.getItem('purchase_history') || '[]';
                    
                    if(purchase_history !== '[]'){
                        now = new Date(JSON.parse(purchase_history).at(index[1]).timestamp);
                        now = new Date(now.getTime() - 60*60*2000)
                    }
                }
            }
            const formattedTime = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
            setCurrentTime(formattedTime);
        };
        const intervalId = setInterval(() => {
            setTimeRemaining(prevTime => { 
                if (prevTime <= 0) {
                    clearInterval(intervalId);
                    return 0;
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);

        getCurrentTime();
        return () => clearInterval(intervalId);
    }, []);
    let timestamp = new Date();
    if (localStorage.getItem('purchase_history')) {
        const url = document.URL.split('?');
        if(url[1] !== undefined){
            const index = url[1].split('=');
            const purchase_history = localStorage.getItem('purchase_history') || '[]';
            if(purchase_history !== '[]') {
                timestamp = new Date(JSON.parse(purchase_history).at(index[1]).timestamp);
            }
        }
    }

    const twentyMinutesLater = new Date((timestamp.getTime() - 60 * 60 * 2000) + 16 * 60 * 1000); 
    const now = new Date();
    const remainingTime = +twentyMinutesLater - +now;
    
    let passed = false;
    if (remainingTime <= 0) {
        passed = true;
    } 
    const minutes = Math.floor(remainingTime / (1000 * 60));
    const seconds = Math.floor((remainingTime / 1000) % 60);
    return (
        <>
            <div className="w-[80vw] border-b border-neutral-300 left-10 absolute bottom-[21rem]"></div>
            <div className="container pb-[2rem] relative shadow-lg " style={{ overflowX: 'hidden' }}>
                <div className='w-screen'>
                    <div className='grid grid-cols-2 p-1'>
                        <div className='flex justify-start font-bold ml-[3rem] text-nowrap'>Confirmation code</div>
                        <div className='flex justify-end font-bold mr-[3rem]'>{confirmationCode}</div>
                    </div>
                    <div className='grid grid-cols-2 p-1'>
                        <div className='flex justify-start ml-5 ml-[3rem]'>Person</div>
                        <div className='flex justify-end mr-[3rem]'>{name}</div>
                    </div>
                    <div className='grid grid-cols-2 p-1'>
                        <div className='flex justify-start ml-5 ml-[3rem]'>Time</div>
                        <div className='flex justify-end mr-[3rem]'>{currentTime}</div>
                    </div>
                    <div className='grid grid-cols-2 p-1'>
                        <div className='flex justify-start ml-5 ml-[3rem]'>Valid for</div>
                        <div className={`flex justify-end mr-[3rem] ${passed == true ? 'text-red-500' : 'text-green-500'}`}>{passed == true ? 'Expired' : `${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

const RollingSVG = () => {
    return (
        <div className='relative flex w-[120vmin] left-[-4rem] h-[10rem]'>
            <div className="slider-container h-full">
                <div className="image-container flex flex-nowrap">
                    <div className='flex flex-wrap relative -right-10 top-[-25rem]' id='img_container'>
                        {[...Array(34)].map((_, index) => (   
                            <EPassiLogo key={index} className={`${index % 2 === 1 ? 'top-10' : ''} m-1 p-1 relative`}/>        
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function PaymentDone() {
    const [contentLoaded, setContentLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setContentLoaded(true);
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className='h-screen max-w-full overflow-x-hidden'>

            {!contentLoaded && (
              <div className='h-screen w-12 flex items-center justify-center'>
                    <div className="flex loader"></div>
                </div>
            )}

            {contentLoaded && (
                <>
                    <Header />
                    <MainInfo />
                    <div className='absolute inset-x-0 bottom-5'>
                        <PaymentInformation />
                        <RollingSVG />
                    </div>
                </>
            )}
            
        </div>
     
    )
}