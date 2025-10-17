'use client';

import { useTonConnectUI } from '@tonconnect/ui-react';
import { useState } from 'react';

export function WalletConnectModal() {
    const [tonConnectUI] = useTonConnectUI();
    const [isOpen, setIsOpen] = useState(false);

    const handleConnect = async () => {
        await tonConnectUI.openModal();
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Connect Wallet</button>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                        <h2 className="text-lg font-bold mb-4 text-black dark:text-white">Connect your wallet</h2>
                        <button onClick={handleConnect} className="bg-blue-500 text-white px-4 py-2 rounded mb-2 w-full">Open wallet in Telegram</button>
                        <button onClick={handleConnect} className="bg-purple-500 text-white px-4 py-2 rounded w-full">TON Connect</button>
                        <button onClick={() => setIsOpen(false)} className="mt-4 text-gray-500">Cancel</button>
                    </div>
                </div>
            )}
        </>
    );
}