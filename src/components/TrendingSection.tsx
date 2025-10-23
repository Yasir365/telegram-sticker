import React from 'react';
import { Sticker } from '@/types/types';
import { TrendingItem } from './TrendingItem';

interface TrendingSectionProps {
    stickers: Sticker[];
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({ stickers }) => {
    return (
        <ul>
            {stickers.map((sticker, index) => (
                <TrendingItem key={index} sticker={sticker} />
            ))}
        </ul>
    );
};
