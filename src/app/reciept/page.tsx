'use client';

import Reciept from '@/app/components/Reciept'

export default function Home() {
  document.addEventListener('touchmove', function(event) {
    if (event.scale !== 1) { event.preventDefault(); }
}, { passive: false });
  return (
    <main className="flex max-h-screen max-w-screen flex-col items-center justify-between p-4 bg-neutral-100" style={{overflow: 'hidden'}}>
        <Reciept/>
    </main>
  );
}
