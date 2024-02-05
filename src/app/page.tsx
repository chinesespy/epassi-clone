
'use client';

import PaymentWindow from "@/app/components/PaymentWindow"

export default function Home() {
  document.addEventListener('touchmove', function(event) {
    if (event.scale !== 1) { event.preventDefault(); }
}, { passive: false });
  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-between p-6" style={{overflow: 'hidden'}}>
        <PaymentWindow/>
    </main>
  );
}
