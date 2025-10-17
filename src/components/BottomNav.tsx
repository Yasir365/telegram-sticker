import Link from 'next/link';

export function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg flex justify-around py-2">
            <Link href="/" className="text-blue-500">Home</Link>
            <Link href="/shop" className="text-blue-500">Shop</Link>
            <Link href="/market" className="text-blue-500">Market</Link>
            <Link href="/profile" className="text-blue-500">Profile</Link>
        </nav>
    );
}