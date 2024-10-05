
'use client';

import PaymentWindow from "@/app/components/PaymentWindow"
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
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-between" style={{overflow: 'hidden'}}>
        <PaymentWindow/>
    </main>
  );
}
