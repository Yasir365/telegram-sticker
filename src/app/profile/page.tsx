import { BottomNav } from '@/components/BottomNav';
// import { WalletConnectModal } from '@/components/WalletConnectModal';
import Image from 'next/image';

export default function Profile() {
    return (
        <main className="p-4 pb-16 bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-gray-800 dark:to-gray-700">
            <div className="flex items-center mb-4">
                <Image src="https://via.placeholder.com/50?text=User" alt="User" width={50} height={50} className="rounded-full" />
                <div className="ml-4">
                    <h1 className="font-bold">Alex Johnson</h1>
                    <p>TON ID: ...</p>
                </div>
            </div>
            <h2 className="text-xl font-bold mb-4">Your Collection</h2>
            {/* List collections here */}
            {/* <WalletConnectModal /> */}
            <BottomNav />
        </main>
    );
}