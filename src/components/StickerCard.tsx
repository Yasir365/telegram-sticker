import Image from 'next/image';
import Link from 'next/link';

interface StickerCardProps {
    sticker: Sticker;
}

export function StickerCard({ sticker }: StickerCardProps) {
    return (
        <Link href={`/sticker/${sticker.id}`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <Image src={sticker.image} alt={sticker.name} width={300} height={300} className="w-full h-40 object-cover" />
                <div className="p-4">
                    <h3 className="font-bold text-lg text-black dark:text-white">{sticker.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Sold {sticker.sold}/{sticker.total}</p>
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Trade on market</button>
                </div>
            </div>
        </Link>
    );
}