'use client'
import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

type cardProp = {
    className?: string
    src: string
    title: string
    tag: string
}


export const Card = ({src, title, className, tag }: cardProp) => {
  return (
    <div className={clsx('relative h-auto outline-1 outline-zinc-200 rounded-lg overflow-hidden aspect-4/3', className)}>
        <Image  
            src={src}
            alt={title}
            fill
            className='object-cover'
        />
<div className="flex justify-between items-end px-4 py-3 absolute bg-neutral-100 w-full">
    <div>
      <h3 className="text-black text-sm font-semibold">Superlist</h3>
      <p className="text-zinc-500 text-sm font-medium">SaaS</p>
    </div>
    <span className="text-zinc-500 text-sm font-medium">2025</span>
  </div>

    </div>
  )
}


