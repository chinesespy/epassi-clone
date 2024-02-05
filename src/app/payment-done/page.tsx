'use client';
import PaymentDone from "@/app/components/PaymentDone"

export default function Home() {
  document.addEventListener('touchmove', function(event) {
    if (event.scale !== 1) { event.preventDefault(); }
}, { passive: false });
  return (
    <main className="flex max-h-screen w-screen flex-col items-center justify-between overflow-hidden" style={{overflow: 'hidden'}}>
      <PaymentDone/>
    </main>
  );
}
