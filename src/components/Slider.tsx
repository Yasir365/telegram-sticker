'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { SliderProps } from '@/types/types';




export default function Slider({
    slidesData,
    slidesPerView = 1,
    spaceBetween = 30,
    showPagination = true,
    className = "mySwiper",
}: SliderProps) {
    const modules = showPagination ? [Pagination] : [];

    const sliderStyle: React.CSSProperties = {
        padding: showPagination ? '20px 0' : '0',
    };

    return (
        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            pagination={showPagination ? { clickable: true } : false}
            modules={modules}
            className={className}
            style={sliderStyle}
        >
            {slidesData.map((slide) => (
                <SwiperSlide key={slide.id}>
                    {slide.content}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}