'use client';
import PaymentDone from "@/app/components/PaymentDone"
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
    <main className="flex max-h-screen w-screen flex-col items-center justify-between overflow-hidden" style={{overflow: 'hidden'}}>
      <PaymentDone/>
    </main>
  );
}
