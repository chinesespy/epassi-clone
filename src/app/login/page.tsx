
'use client';

import Login from "@/app/components/Login"
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    const handleTouchStart = (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);
  return (
    <main className="flex max-h-screen max-w-screen flex-col items-center justify-between p-6" style={{overflow: 'none'}}>
        <Login/>
    </main>
  );
}
