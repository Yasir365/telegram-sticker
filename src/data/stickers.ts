export interface Sticker {
    id: string;
    name: string;
    image: string;
    rarity: string;
    sold: number;
    total: number;
    price: number;
    description: string;
}

export const stickers: Sticker[] = [
    {
        id: '1',
        name: 'Punk Spider Man Sticker',
        image: 'https://via.placeholder.com/300x300?text=Spider+Man', // Replace with actual URLs or assets
        rarity: 'Epic',
        sold: 120,
        total: 154,
        price: 5.99,
        description: 'Spiky hug, sold out 120/154. Pure chaos.',
    },
    {
        id: '2',
        name: 'Iron Hero',
        image: 'https://via.placeholder.com/300x300?text=Iron+Hero',
        rarity: 'Rare',
        sold: 50,
        total: 100,
        price: 3.99,
        description: 'Heroic sticker.',
    },
];