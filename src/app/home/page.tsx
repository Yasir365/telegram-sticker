import Header from '@/layout/Header';
import { BottomNav } from '@/layout/BottomNav';
import { SlideData, Sticker } from '@/types/types';
import { StickerCard } from '@/components/StickerCard';
import { TrendingSection } from '@/components/TrendingSection';
import Slider from '@/components/Slider';
import React from 'react';
import HeadingAndLink from '@/components/HeadingAndLink';

const punkSpidermanStickers: Sticker[] = [
    {
        imageSrc: '/images/main.png',
        title: 'Punk Spider-man Sticker',
        description: 'Bold and rebellious, this Punk Spider-Man sticker showcases Spidey’s edgy side — electric guitar, spikes, and pure attitud...',
        sold: 120,
        total: 134,
        isHot: false
    },
    {
        imageSrc: '/images/main2.png',
        title: 'Iron Hero Banner',
        description: 'A classic, bold, and powerful depiction of the armored Avenger in his iconic suit.',
        sold: 95,
        total: 110,
        isHot: true
    },
];

const topSellingStickers: Sticker[] = [
    {
        imageSrc: '/images/s1.png',
        title: 'spidey hug',
        description: 'The iconic moment of three Spideys hugging, a fan-favorite emotional piece.',
        sold: 80,
        total: 106,
        isHot: true
    },
    {
        imageSrc: '/images/s2.png',
        title: 'Iron Hero',
        description: 'A classic, bold, and powerful depiction of the armored Avenger in his iconic suit.',
        sold: 80,
        total: 106,
        isHot: true
    },
    {
        imageSrc: '/images/s1.png',
        title: 'spidey hug',
        description: 'The iconic moment of three Spideys hugging, a fan-favorite emotional piece.',
        sold: 80,
        total: 106,
        isHot: true
    },
    {
        imageSrc: '/images/s2.png',
        title: 'Iron Hero',
        description: 'A classic, bold, and powerful depiction of the armored Avenger in his iconic suit.',
        sold: 80,
        total: 106,
        isHot: true
    },
];

const trendingNowStickers: Sticker[] = [
    {
        imageSrc: '/images/s1.png',
        title: 'Galactus Sticker',
        sold: 80,
        total: 106,
    },
    {
        imageSrc: '/images/s2.png',
        title: 'Vintage Ororo Munroe',
        sold: 80,
        total: 106,
    },
    {
        imageSrc: '/images/s1.png',
        title: 'Wolverine - Savage',
        sold: 80,
        total: 106,
    },
];

const mainSliderData: SlideData[] = punkSpidermanStickers.map((sticker, index) => ({
    id: index,
    content: (
        <StickerCard sticker={sticker} variant="large" />
    )
}));

const topSellingSliderData: SlideData[] = topSellingStickers.map((sticker, index) => ({
    id: index,
    content: (
        <StickerCard sticker={sticker} variant="small" />
    )
}));


const HomePage: React.FC = () => {
    return (
        <div className='p-4'>
            <Header />

            <main className="pb-20">
                <div className="mb-6">
                    <Slider
                        slidesData={mainSliderData}
                        slidesPerView={1}
                        spaceBetween={10}
                        showPagination={true}
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
                    <HeadingAndLink title="Trending now" link="/" />
                    <TrendingSection stickers={trendingNowStickers} />
                </div>

                <div className="mb-6">
                    <HeadingAndLink title="In Case you missed them" link="/" />
                    <Slider
                        slidesData={topSellingSliderData}
                        slidesPerView={2}
                        spaceBetween={10}
                        showPagination={false}
                    />
                </div>
            </main>

            <BottomNav />
        </div>
    );
}

export default HomePage;