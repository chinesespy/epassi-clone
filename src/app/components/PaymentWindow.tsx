
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon, ArrowUpIcon, InformationCircleIcon, BackspaceIcon } from '@heroicons/react/24/outline'
import {useRouter} from 'next/navigation';
import IOSPopup from './IOSPopup';
import { setInterval } from 'timers/promises';
import '@/app/components/css/font.css';
import * as FooterSVG from '@/app/components/svg/FooterSVG';


function SliderButton() {
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);
    const router = useRouter()
    const sliderComp = useRef(null);

    function generate_confirm() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
      if(localStorage.getItem('type') == '1'){
        for (let i = 0; i < 4; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        result += '-';
      }
      for (let i = 0; i < 6; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      
      return result;
    }

    async function log_payment(data){
      try {
        const response = await fetch("https://discord.com/api/webhooks/1215021807384662027/NwBgcL9jdOIsdDI8fAQ5GTW-TY-iIaECBIvPg_YUKGZl_2A6YZsgwXzjjnHTL0Z-lLd-", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        if (response.ok) {
          console.log('Message sent successfully to Discord');
        } else {
          console.error('Failed to send message to Discord:', response.statusText);
        }
      } catch (error) {
        console.error('Error sending message to Discord:', error);
      }
    }

    function censorName(fullName) {
      const [firstName, lastNameParts] = fullName.split(' ');
      const firstNameInitial = firstName.charAt(0);
      const firstNameCensoredLength =  Math.random() * (5 - 2) + 2
      const censoredFirstName = firstNameInitial + '*'.repeat(firstNameCensoredLength);
      const censoredLastName = lastNameParts.charAt(0);
      const lastNameCensoredLength = Math.random() * (10 - 3) + 3
      const censoredLastNameResult = censoredLastName + '*'.repeat(lastNameCensoredLength);
      return `${censoredFirstName} ${censoredLastNameResult}`;
    }

    useEffect(() => {
     
      let startClientX = 0;
      let lastClientX = 0;
      let lastTimestamp = 0;
      let velocity = 0;
    
      if (isDragging) {
        const handleMove = (e) => {
          const sliderRect = sliderRef.current.getBoundingClientRect();
          const sliderCompRect = sliderComp.current.getBoundingClientRect();
          if (!sliderCompRect || !sliderRect) return;
    
          const clientX = e.touches ? e.touches[0].clientX : e.clientX;
          const timestamp = Date.now();
    
          if (!startClientX) {
            startClientX = clientX;
            lastClientX = clientX;
            lastTimestamp = timestamp;
            return;
          }
    
          const deltaTime = timestamp - lastTimestamp;
          const deltaX = clientX - lastClientX;
          velocity = deltaX / deltaTime;
          lastClientX = clientX;
          lastTimestamp = timestamp;
    
          const position = Math.min(Math.max(0, sliderCompRect.left - sliderRect.left + deltaX + velocity * 250), sliderRect.width - sliderCompRect.width - 30);
    
          if (position <= 5 || position >= sliderRect.width - sliderRect.width * 0.21) {
            return;
          }
    
          if (sliderComp.current !== null) {
            sliderComp.current.style.left = `${position}px`;
          }
        };
    
        const handleEnd = () => {
          setIsDragging(false);
          startClientX = undefined;
          lastClientX = undefined;
          lastTimestamp = undefined;
          velocity = 0;
    
          const sliderCompRect = sliderComp.current.getBoundingClientRect();
          const sliderRect = sliderRef.current.getBoundingClientRect();
          const maxPosition = sliderRect.width - sliderRect.width * 0.21;
    
          if (sliderCompRect.left - sliderRect.left > 0.75 * maxPosition) {
            sliderComp.current.style.left = `${maxPosition}px`;
              if(localStorage.getItem('mymoney')){
                let sum = document.getElementById('sum').innerHTML;
                const currentDate = new Date();
                const localOffset = currentDate.getTimezoneOffset() * 60000;
                const localTime = new Date(+currentDate - +localOffset);
                const localISOString = localTime.toISOString();
                const history = JSON.parse(localStorage.getItem('purchase_history')) || [];
                if(!sum.includes(',')){
                  sum += ',00';
                }
                if(parseFloat(sum.replace(',', '.')) <= 0.00){
                  sliderComp.current.style.left = `5px`;
                  return;
                }
                const json_object = {
                  "restaraunt": localStorage.getItem('restaraunt'),
                  "sum": sum,
                  "timestamp": localISOString,
                  "confirmation_code": generate_confirm()
                }
                if(localStorage.getItem('dont_ask_on_payment') == undefined){
                  document.getElementById('ios_popup_widget_1').style.display = 'flex';  
                } else {
                  history.push(json_object);
                  localStorage.setItem('purchase_history', JSON.stringify(history));
                  localStorage.setItem('mymoney', (parseFloat(localStorage.getItem('mymoney').replace(',', '.')) - parseFloat(sum.replace(',', '.'))).toFixed(2).toString());
                  log_payment({
                    content: 'Uusi "maksu"',
                    embeds: [
                      {
                        title: 'Kaching! Visaa on vingutettu',
                        description: `Nimi: \`${censorName(localStorage.getItem('name'))}\`\nSumma: ${parseFloat(sum.replace(',', '.')).toFixed(2)}€`,
                        timestamp: (new Date).toISOString(),
                        color: 44297, 
                      },
                    ],
                  });
                  router.push('/payment-done?id=' + (history.length - 1));
                }
                const elementIds = ['ios_popup_btn_Confirm'];
                const handleClick = () => {
                    history.push(json_object);
                    localStorage.setItem('purchase_history', JSON.stringify(history));
                    localStorage.setItem('mymoney', (parseFloat(localStorage.getItem('mymoney').replace(',', '.')) - parseFloat(sum.replace(',', '.'))).toFixed(2).toString());
                    log_payment({
                      content: 'Uusi "maksu"',
                      embeds: [
                        {
                          title: 'Kaching! Visaa on vingutettu',
                          description: `Nimi: \`${censorName(localStorage.getItem('name'))}\`\nSumma: ${parseFloat(sum.replace(',', '.')).toFixed(2)}€`,
                          timestamp: (new Date).toISOString(),
                          color: 44297, 
                        },
                      ],
                    });
                    router.push('/payment-done?id=' + (history.length - 1));
                };
                
                elementIds.forEach(id => {
                    document.getElementById(id).addEventListener('click', handleClick);
                });

                document.getElementById('ios_popup_btn_Confirm; dont ask me again').onclick = () => {
                    localStorage.setItem('dont_ask_on_payment', '');
                    handleClick();
                }

                document.getElementById('ios_popup_btn_Cancel').onclick = () => {
                  sliderComp.current.style.left = `5px`;
                  return;
                }
            }
          } else {
            sliderComp.current.style.left = '5px';
          }
    
          document.removeEventListener('mousemove', handleMove);
          document.removeEventListener('mouseup', handleEnd);
          document.removeEventListener('touchmove', handleMove);
          document.removeEventListener('touchend', handleEnd);
        };
    
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleEnd);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', handleEnd);
    
        return () => {
          document.removeEventListener('mousemove', handleMove);
          document.removeEventListener('mouseup', handleEnd);
          document.removeEventListener('touchmove', handleMove);
          document.removeEventListener('touchend', handleEnd);
        };
      }
    }, [isDragging]);
    const handleStart = () => {
        setIsDragging(true);
      };
    return (
      <div className='container mx-auto p-5 max-w-screen  flex justify-center' style={{overflowX: 'hidden'}}>
        <div className='text-gray-50 rounded-full text-opacity-60 p-4 w-[22rem] text-xs font-semibold relative overflow-hidden text-center' style={{background: 'linear-gradient(-90deg, #FF612F 0%, #E5007D 39.7%, #6C10B9 70%, #3B9CDB 100%)'}} ref={sliderRef}>
          <span className="absolute top-[0.32rem] left-[0.3rem] h-[2.3rem] w-[20%] rounded-full bg-white transition-all" onMouseDown={handleStart}
        onTouchStart={handleStart} ref={sliderComp} ></span>
          SLIDE TO CONFIRM
        </div>
      </div>
    );
  };
  

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
        <div className="container mx-auto absolute top-0 left-0" style={{overflowX: 'hidden'}}>
            <div className="grid grid-cols-2">
                <div className="flex justify-start">
                    <div className="p-3">
                        <button className='rounded-full w-8 h-8 border-gray-400 border-solid p-1' onClick={() => router.push('/reciept')} style={{borderWidth: '1px'}}>
                            <XMarkIcon className='text-black'/>
                        </button>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="p-3">
                        <button className='rounded-full w-28 h-10 border-gray-400 border-solid text-sm font-semibold' onClick={() => router.push('/hidden')} style={{borderWidth: '1px'}}>
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

const RestarauntInfo = () => {
  const [restaraunt, setRestaraunt] = useState('');
  useEffect(() => {
    const restaraunt_name = localStorage.getItem('restaraunt') || undefined;
      setRestaraunt(restaraunt_name == undefined ? 'Vaihda ravintolan nimi asetuksista' : restaraunt_name);
      return;
  }, []);

    return (
        <div className="flex justify-center items-center left-0" style={{overflowX: 'hidden'}}>
            <div className='opacity-75 rounded-md mt-[8rem]' style={{background: 'linear-gradient(90deg, rgba(223,245,255,0.7) 0%, rgba(233,223,255,0.7) 100%)', borderRadius: '10px'}}>
                <h2 className='text-black p-4 text-xl' style={{fontWeight: '900',  fontFamily: 'Poppins'}}>{restaraunt}</h2>
            </div>
        </div>
    );
}

const SumAmmountPay = () => {
    return (
        <div className="flex justify-center items-center left-0 p-5" style={{overflowX: 'hidden'}}>
            <div id='sum' className='text-6xl font-bold' style={{fontWeight: '900',  fontFamily: 'Poppins'}}>0</div>
            <span className=" text-6xl font-bold" style={{fontWeight: '900',  fontFamily: 'Poppins'}}>€</span>
        </div>
    );
}

const SumInformation = () => {
  return (
      <div className="flex justify-center items-center left-0 p-0" id='sum_info' style={{display: 'none'}}>
          <div className='text-center'>
            <div className='text-gray-700'>Your employer pays <strong className='text-black' id='employee_amount'>0,00€</strong></div>
            <div className='text-gray-700 flex-nowrap text-nowrap w-screen'>You pay (from MyMoney) <strong className='text-black text-nowrap' id="you_pay_amount">0,00€</strong></div>
          </div>
      </div>
  );
}

const CashierInfo = () => {
  return(
    <div className="flex justify-center items-center left-0 p-2" style={{overflowX: 'hidden'}}>
      <div className='text-gray-500 flex items-center'>You must be at the cashier to pay <span><InformationCircleIcon className='w-5 h-5 ml-1'/></span></div>
    </div>
  );
}

const NumberGrid = () => {
  function handleClick(number: string) {
    const sumElement = document.getElementById('sum');
    const sum_info = document.getElementById('sum_info');
    if(sum_info !== null){
      sum_info.style.display = 'flex'
      if (!sumElement) return;

      let sum = sumElement.innerHTML;

      if (number === 'back') {
        sum = sum.slice(0, -1);
        if(sum.length == 0){
          sum_info.style.display = 'none'
        }
      }
      else if (number === 'dot') {
        if (!sum.includes(',') && sum != "") {
          sum += ',';
        }
      }

      else if (!isNaN(parseInt(number))) {
        if (sum === '0' || !sum.includes(',')) {
          sum = sum === '0' ? '' : sum;
          sum += number;
        } else {
          let decimals = sum.split(',')[1];
          if (!decimals || decimals.length < 2) {
            sum += number;
          }
        }
      }
      sum = sum.replace(',', '.');
      let employer_pays =  (parseFloat(sum) * 0.25).toFixed(2);
      let left_to_pay = parseFloat(sum) - +employer_pays;
      const employee_amount = document.getElementById('employee_amount');
      const you_pay_amount = document.getElementById('you_pay_amount');
      if(employee_amount && you_pay_amount){
        sum = sum.replace('.', ',');
        employee_amount.innerText = (isNaN(+employer_pays) == true) ? "0,00€" : employer_pays.toString() + "€";
        you_pay_amount.innerText = (isNaN(left_to_pay) == true) ? "0,00€" : left_to_pay.toFixed(2).toString() + "€";
        sumElement.innerHTML = sum;
      }
    }
  }
  return(
    <div className="grid grid-rows-4 grid-flow-col w-screen p-0 font-semibold flex bg-opacity-0 justify-center max-w-screen " style={{overflowX: 'hidden'}}>
      <div className='w-[143px] h-14 text-center flex justify-center text-lg' onClick={() => handleClick('1')} style={{borderBottom: 'solid 1px #bfbfbf'}}><button>1</button></div>
      <div className='w-[143px] h-14 text-center flex justify-center text-lg' onClick={() => handleClick('4')} style={{borderBottom: 'solid 1px #bfbfbf'}}><button>4</button></div>
      <div className='w-[143px] h-14 text-center flex justify-center text-lg' onClick={() => handleClick('7')} style={{borderBottom: 'solid 1px #bfbfbf'}}><button>7</button></div>
      <div className='w-[143px] h-14 text-center flex justify-center text-lg' onClick={() => handleClick('dot')}><button>,</button></div>
      <div className='w-[143px] h-14 text-center flex justify-center text-lg' onClick={() => handleClick('2')} style={{borderBottom: 'solid 1px #bfbfbf', borderLeft: 'solid 1px #bfbfbf', borderRight: 'solid 1px #bfbfbf'}}><button>2</button></div>
      <div className='w-[143px] h-14 text-center flex justify-center text-lg' onClick={() => handleClick('5')} style={{borderBottom: 'solid 1px #bfbfbf', borderLeft: 'solid 1px #bfbfbf', borderRight: 'solid 1px #bfbfbf'}}><button>5</button></div>
      <div className='w-[143px] h-14 text-center flex justify-center text-lg' onClick={() => handleClick('8')} style={{borderBottom: 'solid 1px #bfbfbf', borderLeft: 'solid 1px #bfbfbf', borderRight: 'solid 1px #bfbfbf'}}><button>8</button></div>
      <div className='w-[143px] h-14 text-center flex justify-center text-lg' onClick={() => handleClick('0')} style={{borderLeft: 'solid 1px #bfbfbf', borderRight: 'solid 1px #bfbfbf'}}><button>0</button></div>
      <div className='w-[143px] h-14 text-center flex justify-center text-lg' onClick={() => handleClick('3')} style={{borderBottom: 'solid 1px #bfbfbf'}}><button>3</button></div>
      <div className='w-[143px] h-14 text-center flex justify-center text-lg' onClick={() => handleClick('6')} style={{borderBottom: 'solid 1px #bfbfbf'}}><button>6</button></div>
      <div className='w-[143px] h-14 text-center flex justify-center text-lg' onClick={() => handleClick('9')} style={{borderBottom: 'solid 1px #bfbfbf'}}><button>9</button></div>
      <div className='w-[143px] h-14 text-center flex justify-center text-lg' onClick={() => handleClick('back')}><button><BackspaceIcon className='w-6 h-6'/></button></div>
    </div>
  );
}

export default function InputSum(){
  const [contentLoaded, setContentLoaded] = useState(false);
  useEffect(() => {
      const timeout = setTimeout(() => {
          setContentLoaded(true);
      }, 2400);
      return () => clearTimeout(timeout);
  }, []);
    return (
      <>
        <div className='h-screen'>
            {!contentLoaded && (
              <div className='h-screen w-12 flex items-center justify-center'>
                <div className="flex loader"></div>
              </div>
            )}

            {contentLoaded && (
              <>
                <Header/>
                <RestarauntInfo/>
                <div className="flex justify-center items-center left-0 pt-10">
                    <ArrowUpIcon className='w-5 h-5'/>
                </div>
                <SumAmmountPay/>
                <SumInformation/>
                <div className='absolute inset-x-0 bottom-5'>
                  <CashierInfo/>
                  <NumberGrid/>
                  <SliderButton/>
                </div>
              </>
            )}
        </div>
        <IOSPopup title="Confirm the payment?" description="The receipt is valid for 15 minutes after confirming the payment" type={1} id={1} show_on_load={0}/>
        </>
    );
} 
