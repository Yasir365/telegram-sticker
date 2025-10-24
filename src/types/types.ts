
export interface Sticker {
    imageSrc: string;
    title: string;
    description?: string;
    sold: number;
    total: number;
    isHot?: boolean;
}

export type StickerVariant = 'large' | 'small';

export interface SlideData {
    id: string | number;
    content: React.ReactNode;
}

export interface SliderProps {
    slidesData: SlideData[];
    slidesPerView?: number | 1;
    spaceBetween?: number;
    showPagination?: boolean;
    className?: string;
}

export interface FiltersProps {
    data: Array<
        {
            id: number;
            name: string;
        }
    >;
    active: number;
}