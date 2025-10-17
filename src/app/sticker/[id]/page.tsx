import { stickers, type Sticker } from '@/data/stickers';
import Image from 'next/image';
import { WalletConnectModal } from '@/components/WalletConnectModal';
import { BottomNav } from '@/components/BottomNav';

interface StickerPageProps {
    params: { id: string };
}

export default function StickerPage({ params }: StickerPageProps) {
    const sticker = stickers.find((s) => s.id === params.id) as Sticker;

    return (
        <main className="p-4 pb-16">
            <Image src={sticker.image} alt={sticker.name} width={300} height={300} className="mx-auto" />
            <h1 className="text-2xl font-bold mt-4">{sticker.name}</h1>
            <p className="text-sm">Sold {sticker.sold}/{sticker.total}</p>
            <p>{sticker.description}</p>
            <WalletConnectModal />
            <BottomNav />
        </main>
    );
}