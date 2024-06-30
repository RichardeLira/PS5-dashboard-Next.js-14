'use client'

import Link from 'next/link'

import { getCurrentTime } from '@/util/getCurrentTime'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

export default function Navbar() {
  const router = useRouter()
  const { pathname, asPath, query } = router
  const t = useTranslations('navbar')

  const changeLang = (value: string) => {
    router.push({ pathname, query }, asPath, { locale: value })
  }

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
            {t('home')}
          </span>
        </Link>

        <Link href="/project">
          <span
            className={cn(
              'hover:text-white transition-colors duration-200',
              pathname === '/project' ? 'text-white' : 'text-gray-100',
            )}
          >
            {t('projects')}
          </span>
        </Link>

        <Link href="/about">
          <span
            className={cn(
              'hover:text-white transition-colors duration-200',
              pathname === '/about' ? 'text-white' : 'text-gray-100',
            )}
          >
            {t('about')}
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <Select defaultValue={router.locale} onValueChange={changeLang}>
            <SelectTrigger className="bg-transparent gap-2 text-white focus-visible:outline-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 max-h-[--radix-select-content-available-height] w-[--radix-select-trigger-width]">
              <SelectItem
                className="data-[highlighted]:bg-gray-600 hover:bg-gray-700 data-[state='checked']:bg-gray-600"
                value="pt-br"
              >
                PT
              </SelectItem>
              <SelectItem
                className="hover:bg-gray-700 data-[highlighted]:bg-gray-600 data-[state='checked']:bg-gray-600"
                value="en"
              >
                EN
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <span className="text-xl font-sans font-light text-white">
          {getCurrentTime()}
        </span>
      </div>
    </div>
  )
}
