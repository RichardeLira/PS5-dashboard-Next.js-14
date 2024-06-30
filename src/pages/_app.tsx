import Navbar from '@/components/layout/navbar'
import '@/styles/globals.css'
import { NextIntlClientProvider } from 'next-intl'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import { useRouter } from 'next/router'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <NextIntlClientProvider
      messages={pageProps.messages}
      locale={router.locale}
    >
      <div className={poppins.className}>
        <div className="h-screen relative">
          <Navbar />
          <main className="h-full">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </NextIntlClientProvider>
  )
}
