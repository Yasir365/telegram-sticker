// components/StickerCard.tsx
import React from 'react';
import { Sticker, StickerVariant } from '@/types/types';

interface StickerCardProps {
    sticker: Sticker;
    variant?: StickerVariant;
}

export const StickerCard: React.FC<StickerCardProps> = ({ sticker, variant = 'large' }) => {
    const isLarge = variant === 'large';

    return (
        <div className={`flex-shrink-0 mr-4 bg-app-white rounded-xl shadow-md overflow-hidden`}>
            <div className="relative">
                {isLarge && sticker.isHot && (
                    <div className="absolute top-4 left-4 px-3 py-1 text-sm font-semibold text-app-white rounded-full bg-gradient-to-r from-hot-start to-hot-end">
                        ❤️ Hot
                    </div>
                )}
                <img
                    src={sticker.imageSrc}
                    alt={sticker.title}
                    className="w-full h-auto object-contain"
                    style={{ minHeight: isLarge ? '344px' : '180px' }}
                />
            </div>

            <div className="p-4 pt-0">
                <h3 className={`font-bold ${isLarge ? 'text-lg' : 'text-base'} mb-1`}>{sticker.title}</h3>
                {isLarge && sticker.description && (
                    <p className="text-sm text-app-black-lite mb-3 line-clamp-2">
                        {sticker.description}
                    </p>
                )}
                <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold text-sold-out">
                        Sold out {sticker.sold}/{sticker.total}
                    </p>
                    {isLarge ? (
                        <button className="px-4 py-2 text-sm font-semibold text-app-white rounded-lg bg-app-blue-lite hover:bg-app-blue-lite transition-colors">
                            Trade on market
                        </button>
                    ) : (
                        <span className="text-xl font-bold text-app-foreground">
                            ↗
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};