'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <main
      className="flex flex-col items-center justify-center h-screen text-white text-center bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/images/splash.png')" }}
    >
      <Image src="/images/logo/logo-white.png" alt="App Logo" width={126} height={37} className="mb-6" />
      <p className="text-lg max-w-sm mb-8 text-app-white-lite">
        The world of collectibles in the palm of your hands, brought to life like never before.
      </p>
      <button
        onClick={() => router.push('/home')}
        className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-blue-50 transition"
      >
        Get Started
      </button>
    </main>
  );
}
