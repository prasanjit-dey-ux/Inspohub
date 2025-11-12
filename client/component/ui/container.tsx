import clsx from 'clsx'
import React from 'react'

export const Container = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={clsx('max-w-7xl mx-auto px-6 min-h-screen border-x border-slate-200 ',className)}>
        {children}
    </div>
  )
}
