import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
// import { TonConnectUIProvider } from '@tonconnect/ui-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Telegram Stickers',
    description: 'Collect and trade digital stickers in Telegram',
    manifest: '/manifest.json',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                {/* <TonConnectUIProvider manifestUrl="https://your-domain.com/tonconnect-manifest.json"> */}
                <ThemeProvider>
                    <div className="min-h-screen bg-blue-500 dark:bg-gray-900 text-white dark:text-gray-200">
                        {children}
                    </div>
                </ThemeProvider>
                {/* </TonConnectUIProvider> */}
            </body>
        </html>
    );
}