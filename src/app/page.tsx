'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import TelegramWebApp from '@twa-dev/sdk';
import { BottomNav } from '@/components/BottomNav';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    TelegramWebApp.expand();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Telegram Stickers</h1>
      <p className="text-center mb-8">The world of collectibles in the palm of your hands. Brought to life like never before.</p>
      <button onClick={() => router.push('/featured')} className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold">Get Started</button>
      <BottomNav />
    </main>
  );
}