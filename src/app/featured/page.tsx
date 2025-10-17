import { stickers } from '@/data/stickers';
import { StickerCard } from '@/components/StickerCard';
import { BottomNav } from '@/components/BottomNav';

export default function Featured() {
    return (
        <main className="p-4 pb-16">
            <h1 className="text-2xl font-bold mb-4">Featured</h1>
            <div className="grid grid-cols-2 gap-4">
                {stickers.map((sticker) => (
                    <StickerCard key={sticker.id} sticker={sticker} />
                ))}
            </div>
            <BottomNav />
        </main>
    );
}