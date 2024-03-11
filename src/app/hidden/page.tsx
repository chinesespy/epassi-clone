'use client';
import Settings from "@/app/components/Settings"
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
    <main className="flex min-w-screen flex-col items-center justify-between p-4 bg-black h-[100%]" style={{overflowY: 'scroll'}}>
        <Settings/>
    </main>
  );
}
