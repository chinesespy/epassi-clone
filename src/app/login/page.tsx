
'use client';

import Login from "@/app/components/Login"

export default function Home() {
  document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });
  return (
    <main className="flex max-h-screen max-w-screen flex-col items-center justify-between p-6" style={{overflow: 'none'}}>
        <Login/>
    </main>
  );
}
