'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect } from 'react';
import TelegramWebApp from '@twa-dev/sdk';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        TelegramWebApp.ready();
        const theme = TelegramWebApp.themeParams.bg_color?.startsWith('#0') ? 'dark' : 'light';
        document.documentElement.classList.add(theme);
    }, []);

    return (
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </NextThemesProvider>
    );
}