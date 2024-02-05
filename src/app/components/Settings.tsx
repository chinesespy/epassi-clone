'use client';

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { CogIcon, UserCircleIcon, LockClosedIcon, EnvelopeIcon, CheckCircleIcon, BuildingStorefrontIcon, CurrencyEuroIcon, ArrowLeftIcon  } from '@heroicons/react/24/outline';
import '@/app/components/animation.css';
import { useRouter } from 'next/navigation';
import Notiflix from 'notiflix';

const SettingsPage = () => {
    const router = useRouter();
    const [contentLoaded, setContentLoaded] = useState(false);
    const [myMoney, setMyMoney] = useState('');
    const [name, setName] = useState('');
    const [restaraunt, setRestaraunt] = useState('');

    useEffect(() => {
        if(localStorage.getItem('mymoney') == null){
            localStorage.setItem('mymoney', '')
        }
        if(localStorage.getItem('name') == null){
            localStorage.setItem('name', '')
        }
        if(localStorage.getItem('restaraunt') == null){
            localStorage.setItem('restaraunt', '')
        }
        setMyMoney(localStorage.getItem('mymoney') == '' ? '0,00' : localStorage.getItem('mymoney'));
        setName(localStorage.getItem('name') == '' ? 'Syötä nimi' : localStorage.getItem('name'));
        setRestaraunt(localStorage.getItem('restaraunt') == '' ? 'Syötä ravintola' : localStorage.getItem('restaraunt'));
        const timeout = setTimeout(() => {
            setContentLoaded(true);
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);

    const HandleMoneySave = () => {
        if(document.getElementById('amount')){
            const amount = document.getElementById('amount').value;
            if(isNaN(amount) || amount == null || amount == '' || amount == undefined){
                Notiflix.Notify.failure('Syötetty määrä ei ole numero');
                return;
            }
            console.log(amount)
            localStorage.setItem('mymoney', amount + ",00");
            Notiflix.Notify.success('Tallenettu!');
        }
    }
    const HandleNameSave = () => {
        if(document.getElementById('name')){
            const name = document.getElementById('name').value;
            if(name == null || name == '' || name == undefined){
                Notiflix.Notify.failure('Syötetty nimi on tyhjä');
                return;
            }
            localStorage.setItem('name', name);
            Notiflix.Notify.success('Tallenettu!');
            
        }
    }
    const HandleRestarauntSave = () => {
        if(document.getElementById('restaraunt')){
            const restaraunt = document.getElementById('restaraunt').value;
            if(restaraunt == null || restaraunt == '' || restaraunt == undefined){
                Notiflix.Notify.failure('Syötetty ravintola on tyhjä');
                return;
            }
            localStorage.setItem('restaraunt', restaraunt);
            Notiflix.Notify.success('Tallenettu!');
             
        }
    }

    return (
        <div className='h-screen'>
            {!contentLoaded && (
               <div className='h-screen w-12 flex items-center justify-center'>
                    <div className="flex loader"></div>
                </div>
            )}

            {contentLoaded && (
                <>
                    <div className='bg-white'>
                        <button className='rounded flex flex-nowrap items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 to-orange-500 p-3 text-white font-semibold w-full mb-3' onClick={() => router.replace('/')}><ArrowLeftIcon className='w-5 h-5 mr-2'/> Takaisin</button>
                        <div className='bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 to-orange-500 rounded justify-evenly flex shadow-lg flex-wrap items-center justify-center'>
                            <div className="max-w-sm rounded overflow-hidden flex flex-wrap items-center">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 text-white flex flex-nowrap items-center">MyMoney <CurrencyEuroIcon className='ml-1 w-5 h-5'/></div>
                                    <p className="text-gray-200 text-base">
                                        Syötä paljonko haluat että sinun tililläsi on rahaa.
                                    </p>
                                </div>
                                <div className="px-6 pb-4">
                                    <div>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <span className="text-gray-500 sm:text-sm">€</span>
                                            </div>
                                            <input inputMode="numeric" id="amount" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={myMoney}/>
                                            <div className="absolute inset-y-0 right-0 flex items-center">
                                                <label htmlFor="currency" className="sr-only">Valuutta</label>
                                                <h1 id="currency" className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm items-center flex">
                                                    EUR
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <button id='money_btn' className="rounded-full font-semibold justify-center text-gray-100 p-1 mt-3 border-2 border-gray-200 w-1/2 flex flex-nowrap items-center" style={{transition: 'all 3s ease-in-out'}} onClick={HandleMoneySave}>
                                        Tallenna
                                    </button>
                                </div>
                                
                            </div>
                            <div className="flex items-center justify-center pt-10 pb-2">
                                <div className="w-[20rem] border-b border-neutral-300"></div>
                            </div>
                            <div className="max-w-sm rounded overflow-hidden pb-3 ">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 text-white flex flex-nowrap items-center">Nimi <UserCircleIcon className='ml-1 w-5 h-5'/></div>
                                    <p className="text-gray-200 text-base text-sm">
                                        Syötä nimen jonka haluat ostoksissa näkyvän
                                    </p>
                                </div>
                                <div className="px-6 pb-4">
                                    <div>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input inputMode="text" id='name' className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={name}/>
                                        </div>
                                    </div> 
                                    <button onClick={HandleNameSave} id='name_btn' className="rounded-full font-semibold justify-center text-gray-100 p-1 mt-3 border-2 border-gray-200 w-1/2 flex flex-nowrap items-center">
                                        Tallenna
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center pt-10 pb-2">
                                <div className="w-[20rem] border-b border-neutral-300"></div>
                            </div>
                            <div className="max-w-sm rounded overflow-hidden justify-center items-center pb-3">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 text-white flex flex-nowrap items-center">Ravintolan nimi <BuildingStorefrontIcon className='ml-1 w-5 h-5'/></div>
                                    <p className="text-gray-200 text-base text-sm">
                                        Syötä ravintolan nimi josta haluat emuloida ostoksen
                                    </p>
                                </div>
                                <div className="px-6 pb-4">
                                    <div>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input inputMode="text" id='restaraunt' className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={restaraunt}/>
                                        </div>
                                    </div> 
                                    <button onClick={HandleRestarauntSave} id='restaraunt_btn' className="rounded-full font-semibold justify-center text-gray-100 p-1 mt-3 border-2 border-gray-200 w-1/2 flex flex-nowrap items-center" style={{transition: 'all ease-in-out'}}>
                                        Tallenna
                                    </button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </>
            )}
            
        </div>
    )
};

export default SettingsPage;