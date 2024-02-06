'use client';

import { useEffect, useState } from "react";
import Footer from '@/app/components/Footer'
import {KnifeAndForkIcon, SneakerIcon, WellnessIcon, CultureIcon} from '@/app/components/svg/FooterSVG';
import { ChevronUpIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from "next/navigation";
import { json } from "stream/consumers";
import exp from "constants";
import { time } from "console";
const Header = () => {
    return (
        <div className="top-5 flex w-screen">
            <div className="justify-start p-3 pt-8">
                <h1 className="font-extrabold text-2xl ">Purchases</h1>

                <div className="grid grid-cols-4 flex justify-evenly text-normal font-semibold w-screen flex-nowrap items-center overflow-x-scroll w-screen">
                    <div className="flex flex-nowrap items-center text-nowrap"><KnifeAndForkIcon className="w-5 h-5 mr-1"/>Lunch</div>
                    <div className="flex flex-nowrap items-center text-nowrap"><SneakerIcon className="w-5 h-5 mr-1"/>Sport</div>
                    <div className="flex flex-nowrap items-center text-nowrap"><CultureIcon className="w-5 h-5 mr-1"/>Culture</div>
                    <div className="flex flex-nowrap items-center text-nowrap"><WellnessIcon className="w-5 h-5 p-[.1rem] mr-1"/>Wellbeing</div>
                </div>
            </div>
        </div>
    )
}

const PurchaseInfos = () => {
    const [year, setYear] = useState('');
    const [month, setmonth] = useState('');
 
    const router = useRouter();
    useEffect(() => {
       setYear((new Date).getFullYear().toString());
       setmonth((new Date).toLocaleString('en-US', { month: 'long' }).toString());
       return;
    }, []);

    let info = [];
    const purchase_history = localStorage.getItem('purchase_history') || '[]';
    let restaraunt = '', sum = '', timestamp = '', employer_amount = 0, employer_amount_text = '', expired = false, date = '';
    
    if(localStorage.getItem('purchase_history')){
        const purchase_history_parsed = JSON.parse(purchase_history);

        purchase_history_parsed.forEach(history_entry => {
            restaraunt = history_entry.restaraunt;
            sum = history_entry.sum;  
            if (!sum.includes(',')) {
                sum += ',00';
            }
          
            employer_amount += (parseFloat(history_entry.sum.replace(',', '.')) * 0.25)
            let timestamp_;
            if (localStorage.getItem('purchase_history')) {
                timestamp_ = new Date(history_entry.timestamp);
            } else {
                timestamp_ = new Date();
            }
        
            const twentyMinutesLater = new Date((timestamp_.getTime() - 60 * 60 * 2000) + 16 * 60 * 1000); 
            const now = new Date();
            const remainingTime = +twentyMinutesLater - +now;
            let hours = twentyMinutesLater.getHours().toString();
            let minutes = twentyMinutesLater.getMinutes().toString();
            if (parseInt(hours) < 10) {
                hours = '0' + hours;
            }
            if (parseInt(minutes) < 10) {
                minutes = '0' + minutes;
            }
            
            timestamp = hours + ":" + minutes;
            timestamp = timestamp.replace(' ', '')
            expired = false;
            if (remainingTime <= 0) {
                expired = true;
            } 
    
            const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            date = shortDays[timestamp_.getDay()] + " " + timestamp_.getDate() + "." + parseInt(timestamp_.getMonth() + 1).toString() + ".";
    
            info.push({restaraunt, sum, timestamp, expired, date});
        })

        employer_amount_text = employer_amount.toFixed(2).toString().replace('.', ',').toString();
    }

    return (
        <div className="top-5 flex w-full h-[40rem] overflow-y-scroll" style={{fontFamily: 'Inter,sans-serif'}}>
            <div className="justify-start p-3 pt-8">
                <h1 className="font-bold text-2xl pb-2 flex items-center flex-nowrap "><ChevronUpIcon className="w-6 h-6 mr-1" strokeWidth="2.5px"/> {year}</h1>

                <div className="w-[95vw] rounded-lg bg-white">
                    <div className="grid grid-cols-2">
                        <h1 className="font-bold text-2xl flex items-center justify-start flex-nowrap text-sm p-3"><ChevronUpIcon className="w-5 h-5 mr-2" strokeWidth="2.5px"/> {month}</h1>
                        <h1 className="font-semibold text-2xl flex items-center justify-end flex-nowrap text-sm p-3 text-gray-500">{info.length} Payment{info.length >= 2 ? 's' : null}</h1>
                    </div>
                    <div className="flex pl-5 pb-5 pt-2 flex-wrap">
                        <h1 className="text-xs text-neutral-500 w-full">Employer</h1>
                        <h1 className="text-black font-bold text-lg pt-2">{employer_amount_text} €</h1>
                    </div>
                    <div className="w-full border-b border-neutral-300"></div>
                    <h1 className="text-sm font-bold text-black pl-3 pt-3 leading-10" style={{fontFamily: 'Inter,sans-serif'}}>{date}</h1>
                            
                    {JSON.parse(purchase_history).map((entry, index) => (
                        <>
                            <div key={index} className={`grid ${info.at(index).expired == true ? 'grid-cols-11' : 'grid-cols-12'} w-full p-3 gap-1 items-center text-nowrap max-h-[10rem]`}>
                                { info.at(index).expired == true ? null : <div className="ml-[-1.2rem] h-[1.1rem] w-[1.1rem] bg-green-500 border-4 border-neutral-100 rounded-full"></div>}
                                <div className="w-6 col-span-1"><KnifeAndForkIcon className={`ml-[-${info.at(index).expired == true ? '1' : '1.5'}rem] w-6 h-6 text-black`}/></div>
                                <div className={`ml-[${info.at(index).expired == true ? '-1' : '-1.5'}rem] ${ info.at(index).expired == true ? 'text-black': 'text-green-500'} flex flex-wrap justify-start font-semibold col-span-1 whitespace-nowrap text-nowrap`}> {info.at(index).restaraunt} <div className="text-nowrap text-sm text-gray-600 flex flex-nowrap whitespace-nowrap font-normal">{info.at(index).sum} €{info.at(index).expired == true ? null : `, Valid until ${info.at(index).timestamp}`}</div></div>
                                <div className="flex justify-end w-[68vw]" onClick={() => router.replace(`/payment-done?id=${index}`) }><ChevronRightIcon className="w-5 h-5 mr-2"/></div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Reciept = () => {
    const [contentLoaded, setContentLoaded] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setContentLoaded(true);
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className='h-screen'>
            {!contentLoaded && (
            <div className='h-screen w-12 flex items-center justify-center'>
                    <div className="flex loader"></div>
                </div>
            )}

            {contentLoaded && (
                <>
                    <Header/>
                    <PurchaseInfos/>
                    <Footer/>
                </>  
            )}
          
        </div>
    );
}

export default Reciept;