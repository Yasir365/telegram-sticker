// components/TrendingItem.tsx
import React from 'react';
import { Sticker } from '@/types/types';

interface TrendingItemProps {
    sticker: Sticker;
}

export const TrendingItem: React.FC<TrendingItemProps> = ({ sticker }) => {
    return (
        <li className="flex items-center justify-between mb-3 bg-app-white rounded-xl border border-app-black-lite/15">
            <div className="flex items-center">
                <img
                    src={sticker.imageSrc}
                    alt={sticker.title}
                    className="w-16 h-16 object-contain mr-4"
                />
                <div className='py-3'>
                    <h3 className="font-semibold text-base">{sticker.title}</h3>
                    <p className="text-sm font-medium text-sold-out">
                        Sold out {sticker.sold}/{sticker.total}
                    </p>
                </div>
            </div>
            <span className="pr-3 text-xl font-bold text-app-foreground">
                ↗
            </span>
        </li>
    );
};