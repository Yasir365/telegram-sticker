import Image from 'next/image';
import Link from 'next/link';

export function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] flex justify-around py-2 z-50">
            <Link href="/home" className="text-gray-700 flex flex-col justify-center items-center text-sm">
                <Image src="/images/nav/home.png" width={22} height={22} alt="home" />
                <span>Home</span>
            </Link>

            <Link href="/stickers" className="text-gray-700 flex flex-col justify-center items-center text-sm">
                <Image src="/images/nav/stickers.png" width={22} height={22} alt="shop" />
                <span>Shop</span>
            </Link>

            <Link href="/market" className="text-gray-700 flex flex-col justify-center items-center text-sm">
                <Image src="/images/nav/market.png" width={22} height={22} alt="market" />
                <span>Market</span>
            </Link>

            <Link href="/profile" className="text-gray-700 flex flex-col justify-center items-center text-sm">
                <Image src="/images/nav/profile.png" width={22} height={22} alt="profile" />
                <span>Profile</span>
            </Link>
        </nav>
    );
}
