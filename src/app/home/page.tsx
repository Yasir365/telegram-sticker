import Header from '@/layout/Header';
import { BottomNav } from '@/layout/BottomNav';
import { SlideData } from '@/types/types';
import { StickerCard } from '@/components/StickerCard';
import { TrendingSection } from '@/components/TrendingSection';
import Slider from '@/components/Slider';
import React from 'react';
import HeadingAndLink from '@/components/HeadingAndLink';
import { punkSpidermanStickers, topSellingStickers, trendingNowStickers } from '@/data/data';


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