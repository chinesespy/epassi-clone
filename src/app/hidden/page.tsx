'use client';
import Settings from "@/app/components/Settings"

export default function Home() {
  document.addEventListener('touchmove', function(event) {
    if (event.scale !== 1) { event.preventDefault(); }
}, { passive: false });
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-4 bg-white">
        <Settings/>
    </main>
  );
}
