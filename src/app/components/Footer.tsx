'use client';

import React, { useState } from 'react';
import { UserIcon, MagnifyingGlassIcon, ListBulletIcon } from '@heroicons/react/24/outline'
import {UserIconX, WalletIcon} from '@/app/components/svg/FooterSVG';
import { useRouter } from 'next/navigation';

interface FooterItemProps {
    icon: React.ReactNode;
    text: string;
    onClick: () => void;
    enabled: boolean;
}

const Footer: React.FC = () => {
    const [enabledItem, setEnabledItem] = useState<string>('Purchases');
    const router = useRouter();

    const handleItemClick = (itemName: string) => {
        setEnabledItem(itemName);
    };


    return (
            <footer className="bg-white text-white py-6 absolute bottom-0 left-0 w-screen h-[7rem]">
                <div className="container mx-auto flex justify-between">
                    <FooterItem 
                        icon={<MagnifyingGlassIcon className="h-6 w-6"/>}
                        text="Discovery" 
                        onClick={() => router.replace('/')} 
                        enabled={enabledItem === 'Discovery'} 
                    />
                    <FooterItem 
                        icon={<ListBulletIcon className="h-6 w-6"/>}
                        text="Purchases" 
                        onClick={() => handleItemClick('Purchases')} 
                        enabled={enabledItem === 'Purchases'} 
                    />
                    <FooterItem 
                    icon={<WalletIcon className="h-6 w-6"/>}
                        text="Balances" 
                        onClick={() => handleItemClick('Balances')} 
                        enabled={enabledItem === 'Balances'} 
                    />
                    <FooterItem 
                        icon={<UserIconX className="h-6 w-6"/>}
                        text="User" 
                        onClick={() => handleItemClick('User')} 
                        enabled={enabledItem === 'User'} 
                    />
                </div>
            </footer>
    );
};

const FooterItem: React.FC<FooterItemProps> = ({ icon, text, onClick, enabled }) => {
    const renderDot = () => {
        if (text === 'Purchases') {
          return <div className="absolute top-7 -mr-5 h-[0.6rem] w-[0.6rem] bg-green-500 rounded-full"></div>;
        }
        return null;
      };
    
    return (
        <div 
            className={`flex-1 flex flex-col items-center justify-center px-2 ${enabled ? 'text-black' : 'text-gray-400'}`} 
            onClick={onClick}
        >
             {renderDot()}
            <i className={`${enabled ? 'text-black' : 'text-gray-400'}`}>{icon}</i>
            <p className="mt-1 text-xs font-semibold">{text}</p>
        </div>
    );
};


export default Footer;