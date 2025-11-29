'use client'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { SiteItem } from '@/types/site'

export default function CardTool({logo, title, className, tag, url, creator}: SiteItem) {
  
  const username = creator 
    ? creator.replace("https://", "").replace("http://", "").split("/")[1]
    : null;
  
  return (
    <div className={clsx('border border-slate-300 rounded-lg overflow-hidden group', className)}>
        
    <Link href={url} target='_blank'>
      <div className={clsx(   
        'relative aspect-4/2 flex items-center justify-center p-4 overflow-hidden rounded-t-lg',
    'bg-[repeating-linear-gradient(45deg,var(--color-neutral-100)_0px,var(--color-neutral-100)_2px,transparent_2px,transparent_10px)]',className)}
    >
        {logo ? (
            <Image  
            src={logo}
            alt={title}
            height={80}
            width={80}
            className='object-contain transition-transform ease-out duration-500 group-hover:scale-[1.05]'
        />
          ): (
            <div className="text-neutral-400 text-sm">
              {title}
            </div>
          )}

        <div className=' absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center'>
          <span className='text-black rounded-md px-2 py-1 text-sm font-medium flex justify-center  items-center bg-white'>Visit →</span>
        </div>
      </div>
    </Link>

<div className="flex justify-between items-end px-4 py-3 bg-neutral-50">
    <div className='flex flex-col items-start justify-center gap-1'>
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-zinc-500 text-sm font-medium">{tag}</p>
    </div>

    { creator && username &&(
      <Link 
      href={creator}
      target='blank'
      className='text-zinc-500 text-sm font-medium hover:underline hover:text-blue-700'
      >
        {username}
      </Link>
    )}

  </div>

    </div>
  )
}


