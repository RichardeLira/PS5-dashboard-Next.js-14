import persona from '@/assets/img/persona.jpg'
import SocialMediaButton from '@/components/pages/home/social-media-button'
import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home() {
  const t = useTranslations('home')

  const router = useRouter()
  const textRevealContent =
    router.locale === 'en'
      ? "before:content-['Software_Developer']"
      : "before:content-['Desenvolvedor_de_Software']"

  return (
    <div className="h-full bg-blue-900 relative">
      <div className="absolute w-full flex flex-col gap-8 items-center top-1/4">
        <div className="flex items-center flex-col gap-4">
          <h1>{t('title')}</h1>
          <h2 className={`text-reveal ${textRevealContent}`}>
            {t('subtitle.text')}
          </h2>
        </div>

        <Image
          src={persona}
          width={256}
          height={256}
          alt="person-image"
          className="relative rounded-full"
        />
      </div>

      <div className="absolute left-8 flex flex-col gap-4 bottom-8">
        <SocialMediaButton
          type="social"
          platform="github"
          link="https://github.com/pedrogrigorio"
          text="github.com/pedrogrigorio"
        />

        <SocialMediaButton
          type="social"
          platform="linkedin"
          link="https://www.linkedin.com/in/pedro-grigorio/"
          text="linkedin.com/in/pedro-grigorio"
        />

        <SocialMediaButton
          type="email"
          platform="email"
          email="teste@gmail.com"
          text="teste@gmail.com"
        />
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../lang/${locale}.json`)).default,
    },
  }
}
