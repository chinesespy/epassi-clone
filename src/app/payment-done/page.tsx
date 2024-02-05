import PaymentDone from "@/app/components/PaymentDone"

export default function Home() {
  return (
    <main className="flex max-h-screen w-screen flex-col items-center justify-between overflow-hidden" style={{overflow: 'hidden'}}>
      <PaymentDone/>
    </main>
  );
}
