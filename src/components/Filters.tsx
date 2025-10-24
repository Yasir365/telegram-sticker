import { FiltersProps } from '@/types/types'
import React from 'react'

export default function Filters({ data, active }: FiltersProps) {
    return (
        <ul className='flex justify-start gap-2'>
            {data.map((filter, index) => (
                <li key={index} className={`px-4 py-2 rounded-xl ${index + 1 === active ? 'bg-app-blue text-white' : 'border border-app-black-lite/15 bg-app-white text-app-black-lite'}`}>{filter.name}</li>
            ))}
        </ul>
    )
}
