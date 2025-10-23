import Link from 'next/link'
import React from 'react'

export default function HeadingAndLink({ title, link }: { title: string, link: string }) {
    return (
        <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold">{title}</h2>
            <Link href={link} className="text-app-blue-lite font-semibold text-sm">
                View all
            </Link>
        </div>)
}
