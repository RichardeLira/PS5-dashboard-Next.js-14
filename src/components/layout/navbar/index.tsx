'use client'

import { cn } from '@/lib/utils'
import { getCurrentTime } from '@/util/getCurrentTime'
import { ArrowLeft, CaretDown } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <div className="z-10 absolute top-0 left-0 w-full px-48 h-24 flex items-center justify-between">
      <div className="flex items-center gap-16">
        {pathname !== '/' ? (
          <ArrowLeft size={32} className="text-white" />
        ) : (
          <div className="w-8" />
        )}

        <Link href="/">
          <span
            className={cn(
              'hover:text-white transition-colors duration-200',
              pathname === '/' ? 'text-white' : 'text-gray-100',
            )}
          >
            Home
          </span>
        </Link>

        <Link href="/project">
          <span
            className={cn(
              'hover:text-white transition-colors duration-200',
              pathname === '/project' ? 'text-white' : 'text-gray-100',
            )}
          >
            Projetos
          </span>
        </Link>

        <Link href="/about">
          <span
            className={cn(
              'hover:text-white transition-colors duration-200',
              pathname === '/about' ? 'text-white' : 'text-gray-100',
            )}
          >
            Sobre mim
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <span>pt</span>
          <CaretDown size={24} className="text-white" />
        </div>

        <span className="text-xl font-sans font-light text-white">
          {getCurrentTime()}
        </span>
      </div>
    </div>
  )
}
