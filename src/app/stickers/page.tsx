import Filters from '@/components/Filters';
import HeadingAndLink from '@/components/HeadingAndLink';
import Slider from '@/components/Slider';
import { StickerCard } from '@/components/StickerCard';
import { punkSpidermanStickers, topSellingStickers } from '@/data/data';
import { BottomNav } from '@/layout/BottomNav'
import Header from '@/layout/Header'
import { SlideData } from '@/types/types';
import React from 'react'



const mainSliderData: SlideData[] = punkSpidermanStickers.map((sticker, index) => ({
    id: index,
    content: (
        <StickerCard sticker={sticker} variant="small" />
    )
}));

const topSellingSliderData: SlideData[] = topSellingStickers.map((sticker, index) => ({
    id: index,
    content: (
        <StickerCard sticker={sticker} variant="small" />
    )
}));

const filters = [
    {
        id: 1,
        name: 'All',
    },
    {
        id: 2,
        name: 'Upcoming',
    },
    {
        id: 3,
        name: 'Active',
    },
    {
        id: 4,
        name: 'Featured',
    },
]

export default function page() {
    return (
        <div className='p-4'>
            <Header />
            <main className="pb-20">
                <div className='mt-4'>
                    <Filters data={filters} active={1} />
                </div>
                <div className="mb-6">
                    <Slider
                        slidesData={mainSliderData}
                        slidesPerView={1.1}
                        spaceBetween={10}
                        showPagination={false}
                    />
                </div>
                <div className="mb-6">
                    <HeadingAndLink title="Top selling" link="/" />
                    <Slider
                        slidesData={topSellingSliderData}
                        slidesPerView={2}
                        spaceBetween={10}
                        showPagination={false}
                    />
                </div>
                <div className="mb-6">
                    <HeadingAndLink title="Sold Out" link="/" />
                    <Slider
                        slidesData={mainSliderData}
                        slidesPerView={1.1}
                        spaceBetween={10}
                        showPagination={false}
                    />
                </div>

                <HeadingAndLink title="Upcoming drops" link="/" />
                <div className="grid grid-cols-2 gap-4">
                    {topSellingStickers.map((sticker, index) => (
                        <StickerCard key={index} sticker={sticker} variant="small" />
                    ))}
                </div>
            </main>
            <BottomNav />
        </div>
    )
}
