import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function SortArrow(filter, key) {
    if (key === filter?.key && filter?.desc === false) {
        return <ArrowUpIcon className='h-5' />
    }
    if (key === filter?.key && filter?.desc === true) {
        return <ArrowDownIcon className='h-5' />
    }
    return <ArrowUpIcon className='h-5 opacity-30' />

}
