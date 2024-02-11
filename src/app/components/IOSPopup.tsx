import React, {useEffect, useRef, useState} from 'react';


interface IOSProps {
    title: string,
    description: string,
    type: number,
    id: number,
    show_on_load: number
}

interface IOSButtonProps {
    title: string,
    bold: number,
    optional_class: string,
    index: number
}

const IOSPopupButton: React.FC<IOSButtonProps> = ({title, bold, optional_class, index}) => {
    const handleClick = () => {
        document.getElementById(`ios_popup_widget_${index}`).style.display = 'none';
    };

    return (
        <div className={`w-full text-blue-500 text-md font-normal text-center ios-widget-desc pt-2 ${bold == 1 ? 'font-black' : null } ${optional_class}`} onClick={handleClick} id={`ios_popup_btn_${title}`}>{title}</div>
    );
}

const IOSPopup: React.FC<IOSProps> = ({title, description, type, id, show_on_load}) => {
    return (
        <>
            <div className={`h-screen flex items-center justify-center bg-black bg-opacity-25 w-screen fixed top-0 ios-widget`} style={{display: `${show_on_load == 0 ? 'none' : 'flex'}`, zIndex: '9999'}} id={`ios_popup_widget_${id}`}>
                <div className='flex flex-wrap rounded-lg bg-white w-[70vw]'>
                    <div className='w-full items-center flex justify-center text-center pt-4 pb-1'>
                        <div className='text-md text-black font-black'>{title}</div>
                    </div>
                    <div className='flex w-full text-center justify-center pb-2'>
                        <div className='text-sm ios-widget-desc'>{description}</div>
                    </div> 
                    <div className="w-[100%] border-b border-neutral-100 p-1"></div>
                    {type == 1 ? 
                    <>
                        <IOSPopupButton title='Confirm; dont ask me again' optional_class='' bold={0} index={id}/>
                        <div className="w-[100%] border-b border-neutral-100 p-1"></div>
                        <IOSPopupButton title='Confirm' optional_class='' bold={1} index={id}/>
                        <div className="w-[100%] border-b border-neutral-100 p-1"></div>
                        <IOSPopupButton title='Cancel' bold={0} optional_class='pb-3' index={id}/>
                    </>
                    :
                    null
                    }
                    {type == 2 ? 
                    <>
                        <IOSPopupButton title='OK' optional_class='' bold={0} index={id}/>
                        <div className="w-[100%] border-b border-neutral-100 p-1"></div>
                        <IOSPopupButton title='Cancel' optional_class='pb-3' bold={0} index={id}/>
                    </>
                    :
                    null
                    }
                    {type == 3 ? 
                    <>
                         <IOSPopupButton title='OK' optional_class='pb-3' bold={0} index={id}/>
                    </>
                    :
                    null
                    }
                </div>  
               
            </div>
        </>
    );
};

export default IOSPopup;