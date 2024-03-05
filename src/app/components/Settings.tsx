'use client';

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { CogIcon, UserCircleIcon, LockClosedIcon, EnvelopeIcon, CheckCircleIcon, BuildingStorefrontIcon, CurrencyEuroIcon, ArrowLeftIcon, WrenchIcon  } from '@heroicons/react/24/outline';
import '@/app/components/animation.css';
import { useRouter } from 'next/navigation';
import Notiflix from 'notiflix';

const SettingsPage = () => {
    const router = useRouter();
    const [contentLoaded, setContentLoaded] = useState(false);
    const [myMoney, setMyMoney] = useState('');
    const [name, setName] = useState('');
    const [restaraunt, setRestaraunt] = useState('');
    const [type, setType] = useState('');

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
        if(localStorage.getItem('type') == null){
            localStorage.setItem('type', '')
        }
        setMyMoney(localStorage.getItem('mymoney') == '' ? '0,00' : localStorage.getItem('mymoney').replace('.', ','));
        setName(localStorage.getItem('name') == '' ? 'Syötä nimi' : localStorage.getItem('name'));
        setRestaraunt(localStorage.getItem('restaraunt') == '' ? 'Syötä ravintola' : localStorage.getItem('restaraunt'));
        setType(localStorage.getItem('type') == '' ? '1' : localStorage.getItem('type'));
        const timeout = setTimeout(() => {
            setContentLoaded(true);
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);

    const HandleMoneySave = () => {
        if(document.getElementById('amount')){
            const amount = document.getElementById('amount') as HTMLInputElement | null;
            if(isNaN(parseInt(amount.value)) || amount.value == null || amount.value == '' || amount.value == undefined){
                Notiflix.Notify.failure('Syötetty määrä ei ole numero');
                return;
            }
            console.log(amount)
            localStorage.setItem('mymoney', amount.value + ",00");
            Notiflix.Notify.success('Tallenettu!');
        }
    }
    const HandleNameSave = () => {
        if(document.getElementById('name')){
            const name = document.getElementById('name') as HTMLInputElement | null;
            if(name == null || name.value == '' || name.value == undefined){
                Notiflix.Notify.failure('Syötetty nimi on tyhjä');
                return;
            }
            localStorage.setItem('name', name.value);
            Notiflix.Notify.success('Tallenettu!');
            
        }
    }
    const HandleRestarauntSave = () => {
        if(document.getElementById('restaraunt')){
            const restaraunt = document.getElementById('restaraunt') as HTMLInputElement | null;
            if(restaraunt == null || restaraunt.value == '' || restaraunt.value == undefined){
                Notiflix.Notify.failure('Syötetty ravintola on tyhjä');
                return;
            }
            localStorage.setItem('restaraunt', restaraunt.value);
            Notiflix.Notify.success('Tallenettu!');
             
        }
    }

    const HandleTypeSave = () => {
        if(document.getElementById('type')){
            const type = document.getElementById('type') as HTMLInputElement | null;
            if(type == null || type.value == '' || type.value == undefined){
                Notiflix.Notify.failure('Syötetty tyyppi on tyhjä');
                return;
            }
            localStorage.setItem('type', type.value);
            Notiflix.Notify.success('Tallenettu!');
             
        }
    }

    const HandleReset = () => {
        
        Notiflix.Notify.info('Resetoitut!');
        localStorage.clear();
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
                    <div className='bg-slate-800 pb-10'>
                        <button className='rounded flex flex-nowrap items-center bg-black p-3 text-white font-semibold w-full mb-3' onClick={() => router.replace('/')}><ArrowLeftIcon className='w-5 h-5 mr-2'/> Takaisin</button>
                        <div className=' rounded p-3 flex shadow-lg flex-wrap items-center' style={{background: '-moz-linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(42,46,46,1) 50%, rgba(0,0,0,1) 100%)',
background: '-webkit-linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(42,46,46,1) 50%, rgba(0,0,0,1) 100%)',
background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(42,46,46,1) 50%, rgba(0,0,0,1) 100%)'}}>
                            <div className="max-w-sm rounded overflow-hidden justify-center items-center pb-3">
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
                            <div className="flex items-center justify-center pt-10 pb-2 p-6">
                                <div className="w-[20rem] border-b border-neutral-300"></div>
                            </div>
                            <div className="max-w-sm rounded overflow-hidden justify-center items-center pb-3">
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
                            <div className="flex items-center justify-center pt-10 pb-2 p-6">
                                <div className="w-[20rem] border-b border-neutral-300"></div>
                            </div>
                            <div className="max-w-sm rounded overflow-hidden pb-3">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 text-white flex flex-nowrap items-center">Tyyppi <WrenchIcon className='ml-1 w-5 h-5'/></div>
                                    <p className="text-gray-200 text-base text-sm ">
                                        Syötä ostoksen tyyppi jonka haluat näkyvän              
                                    </p>
                                </div>
                                <div className="px-6 pb-4">
                                    <div>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <select id='type' className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6">
                                                <option value="1" selected={type === '1'}>Ravintola</option>
                                                <option value="2" selected={type === '2'}>Liikunta</option>
                                                <option value="3" selected={type === '3'}>Hyvinvointi</option>
                                            </select>
                                        </div>
                                    </div> 
                                    <button onClick={HandleTypeSave} id='type_btn' className="rounded-full font-semibold justify-center text-gray-100 p-1 mt-3 border-2 border-gray-200 w-1/2 flex flex-nowrap items-center" style={{transition: 'all ease-in-out'}}>
                                        Tallenna
                                    </button>
                                </div>
                               
                            </div>
                            <div className="flex items-center justify-center pt-4 pb-2 p-6">
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
                            <div className="flex items-center justify-center pt-4 pb-1 p-6">
                                <div className="w-[20rem] border-b border-neutral-300"></div>
                            </div>
                             <button onClick={HandleReset} id='restaraunt_btn' className="rounded-full font-semibold justify-center text-gray-100 p-1 m-5 border-2 border-gray-200 w-full flex flex-nowrap items-center" style={{transition: 'all ease-in-out'}}>
                                Resetoi
                            </button>
                        </div>
                       
                    </div>
                </>
            )}
            
        </div>
    )
};

export default SettingsPage;