import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <div>
            <Image src="/images/logo/logo-blue.png" alt="logo" width={60} height={18} className="mt-2 mx-auto" />
        </div>
    )
}
