'use client';

import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon, CheckCircleIcon, ChevronRightIcon, XCircleIcon } from '@heroicons/react/24/outline'
import '@/app/components/animation.css';
import '@/app/components/css/font.css';
import EPassiLogo from './svg/EPassiLogo';
import { useRouter } from 'next/navigation';

import * as FooterSVG from '@/app/components/svg/FooterSVG';
import dayjs from 'dayjs';
const Header = () => {
    const [myMoney, setMyMoney] = useState('');
    const [type, setType] = useState('');
    const router = useRouter();
    useEffect(() => {
        const mymoney_ = localStorage.getItem('mymoney') || undefined;
        setMyMoney(mymoney_== undefined ? '0,00' : mymoney_);
        const type_ = localStorage.getItem('type') || undefined;
        setType(type_== undefined ? '1' : type_);
        return;
    }, []);


    return (
        <div className="container mx-auto absolute top-0 left-0" style={{ overflowX: 'hidden' }}>
            <div className="grid grid-cols-2">
                <div className="flex justify-start">
                    <div className="p-4">
                        <button className='rounded-full size-10 border-gray-300 border-solid p-1' onClick={() => router.replace('/')} style={{ borderWidth: '1px' }}>
                            <XMarkIcon className='text-black' />
                        </button>
                    </div>
                </div>
                <div className=" justify-end hidden">
                    <div className="p-3">
                        <button className='rounded-full w-28 h-10 border-gray-300 border-solid text-sm font-semibold' onClick={() => router.replace('/hidden')} style={{ borderWidth: '1px' }}>
                            <div className='flex justify-center items-center'>
                                <span className='p-2 flex justify-start'>
                                {(() => {
                                 switch (type) {
                                    case '1':
                                      return <FooterSVG.KnifeAndForkIcon className='w-5 h-5' />;
                                    case '2':
                                      return <FooterSVG.SneakerIcon className='w-5 h-5' />;
                                    case '3':
                                        return <FooterSVG.WellnessIcon className='w-5 h-5' />;
                                    case '4':
                                        return <FooterSVG.CultureIcon className='size-[1.45rem]' />;
                                    default:
                                      return <FooterSVG.KnifeAndForkIcon className='w-5 h-5' />;
                                  }
                                })()}
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

        const url = document.URL.split('?');
        if(url[1] !== undefined){
            const index = url[1].split('=');
            const purchase_history = localStorage.getItem('purchase_history') || '[]';
            if(purchase_history != '[]'){
                setPaidAmount(JSON.parse(purchase_history).at(index[1]).sum);
                setRestaraunt(JSON.parse(purchase_history).at(index[1]).restaraunt);
            }
                
        }
        return;
    }, []);


    let click_amount = 0;
    function handleClick(){
        click_amount++;
        if(click_amount == 2){

            // document.getElementById('ios_popup_widget_2').style.display = 'flex';
            alert("The payment was declined! Contact support at info@epassi.fi")
            document.getElementById('payment_status').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="w-5 h-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg> PAYMENT DECLINED'
            document.getElementById('valid_time').innerHTML = '<div className="font-size[0.9rem]">Valid for</div><div class="text-red-500">Expired</div>'
            click_amount = 0;
        }
    }

    return (
        <>
            <div className="container text-center relative h-[140vmin] top-14 justify-center items-center flex w-screen" style={{ overflowX: 'hidden' }}>
                <div className='w-screen'>
                    <div className='absolute inset-x-0 top-10'>
                        <div className='flex justify-center'>
                            <img src='./epassi-logo-v2.svg' onClick={handleClick} className='w-[7rem] pb-1'></img>
                        </div>
                        <span className='font-semibold flex text-sm justify-center pb-12' id='payment_status'><CheckCircleIcon className='w-5 h-5 mr-3' /> PAYMENT APPROVED</span>
                    </div>
                    <div className='mt-[16vmin] w-full flex justify-center items-center flex-col'>
                        <h1 className='font-extrabold w-2/3 whitespace-normal break-all' style={{fontFamily: "Poppins", fontSize: "2rem"}}>{restaraunt}</h1>
                        <h1 className='font-bold' style={{fontSize: "3.5rem", fontFamily: 'Poppins', color: '#2f2f2f'}}>{paidAmount.replace('.', ',')} €</h1>
                        <a onClick={() => router.replace('/reciept')} className='flex flex-nowrap justify-center content-center items-center underline'>Show Receipt<ChevronRightIcon className='w-3 h-3 text-black' /></a>
                    </div>
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
        setName(name_ === undefined ? 'Vaihda nimi asetuksista' : name_);
    
        const url = document.URL.split('?');
        if (url[1] !== undefined) {
            const index = url[1].split('=');
            const purchase_history = localStorage.getItem('purchase_history') || '[]';
            if (purchase_history !== '[]') {
                setConfirmationCode(JSON.parse(purchase_history).at(index[1]).confirmation_code);
            }
        }
    
        const getCurrentTime = () => {
            let now = dayjs();
            if (localStorage.getItem('purchase_history')) {
                const url = document.URL.split('?');
                if (url[1] !== undefined) {
                    const index = url[1].split('=');
                    const purchase_history = localStorage.getItem('purchase_history') || '[]';
    
                    if (purchase_history !== '[]') {
                        now = dayjs.unix(JSON.parse(purchase_history).at(index[1]).timestamp);
                    }
                }
            }
    
            const formattedTime = `${String(now.get('date'))}.${String(now.get('month') + 1)}.${now.get('year')} klo ${String(now.get('hours')).padStart(2, '0')}.${String(now.get('minute')).padStart(2, '0')}.${String(now.get('second')).padStart(2, '0')}`;
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
    
    let timestamp = dayjs();
    if (localStorage.getItem('purchase_history')) {
        const url = document.URL.split('?');
        if (url[1] !== undefined) {
            const index = url[1].split('=');
            const purchase_history = localStorage.getItem('purchase_history') || '[]';
            if (purchase_history !== '[]') {
                timestamp = dayjs.unix(JSON.parse(purchase_history).at(index[1]).timestamp);
            }
        }
    }
    
    const twentyMinutesLater = timestamp.add(16, 'minute');

    const now = dayjs();

    const remainingMinutes = twentyMinutesLater.diff(now, 'minute');
    const remainingSeconds = twentyMinutesLater.diff(now, 'second') % 60;
    
    let passed = false;
    if (remainingMinutes <= 0 && remainingSeconds <= 0) {
        passed = true;
    }

    return (
        <>
            <div className="w-[95vw] border-b border-neutral-300 left-[2.5vw] absolute"></div>
            <div className="container pb-[0.75rem] relative shadow-lg pt-4" style={{ overflowX: 'hidden' }}>
                <div className='w-screen' style={{color: '#4d5d70'}}>
                    <div className='flex flex-row px-8 justify-between pb-[0.5rem]' id='conf_code'>
                        <div className=' font-size[0.9rem] font-semibold text-nowrap text-black'>Verification code</div>
                        <div className='font-size[0.9rem] font-semibold text-black'>{confirmationCode}</div>
                    </div>
                    <div className='flex flex-row px-8 justify-between pb-[0.5rem]'>
                        <div className='font-size[0.9rem]'>Person</div>
                        <div className='font-size[0.9rem]'>{name}</div>
                    </div>
                    <div className='flex flex-row px-8 justify-between pb-[0.5rem]'>
                        <div className='font-size[0.9rem]'>Time</div>
                        <div className='font-size[0.9rem]'>{currentTime}</div>
                    </div>
                    <div className='flex flex-row px-8 justify-between pb-[0.5rem]' id='valid_time'>
                        <div className='font-size[0.9rem]'>Valid for</div>
                        <div className={`font-size[0.9rem] ${passed == true ? 'text-red-500' : 'text-green-500'}`}>{passed == true ? 'Expired' : `${remainingMinutes.toString().padStart(2, '0')}m ${remainingSeconds.toString().padStart(2, '0')}s`}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

const RollingSVG = () => {
    return (
        <div className='relative flex w-[120vmin] left-[-4rem] h-[7.5rem]'>
            <div className="slider-container h-full">
                <div className="image-container flex flex-nowrap">
                    <div className='flex flex-wrap relative -right-10 top-[-25rem]' id='img_container'>
                        {[...Array(34)].map((_, index) => (   
                            <EPassiLogo key={index} className={`${index % 2 === 1 ? 'top-10' : ''} size-[7.5rem] m-1 p-1 relative`}/>        
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
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <div className='h-screen w-screen overflow-x-hidden bg-white relative rounded-t-xl'>
                {!contentLoaded && (
                <div className='h-screen w-screen flex items-center justify-center'>
                        <div className="flex loader"></div>
                    </div>
                )}

                {contentLoaded && (
                    <>
                        <Header />
                        <MainInfo />
                        <div className='absolute inset-x-0 bottom-0 overflow-x-hidden'>
                            <PaymentInformation />
                            <RollingSVG />
                        </div>
                    </>
                )}
                
            </div>
            {/* <IOSPopup title="Error" description="The payment was declined! Contact support at info@epassi.fi" type={3} id={2} show_on_load={0}/> */}
        </div>
     
    )
}