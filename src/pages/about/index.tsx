import LinkedinIcon from '@/components/icons/linkedin-icon'
import EmailIcon from '@/components/icons/email-icon'
import GithubIcon from '@/components/icons/github-icon'
import Skills from '@/components/pages/about/skills'
import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('about')

  return (
    <div className="flex h-full gap-16 pt-36 overflow-y-auto scrollbar scrollbar-track-blue-800 scrollbar-thumb-blue-700 px-96 pb-24 flex-col items-center from-blue-700 from-25% to-80% to-blue-900 bg-gradient-to-bl">
      <section className="flex items-center justify-center flex-col gap-8">
        <div>
          <h2 className="px-2">{t('aboutMe.title')}</h2>
          <div className="w-full h-1 bg-blue-500" />
        </div>
        <p className="text-center">{t('aboutMe.text')}</p>
      </section>

      <section className="flex items-center w-full justify-center flex-col gap-8">
        <div>
          <h2 className="px-2">{t('skills.title')}</h2>
          <div className="w-full h-1 bg-blue-500" />
        </div>
        <Skills />
      </section>

      <section className="flex items-center justify-center flex-col gap-8">
        <div>
          <h2 className="px-2">{t('contact')}</h2>
          <div className="w-full h-1 bg-blue-500" />
        </div>
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-gray-800 px-8 rounded-3xl w-48 h-20">
            <LinkedinIcon size={24} />
            <span className="text-xl text-blue-500 font-bold">LinkedIn</span>
          </div>

          <div className="flex items-center gap-4 bg-gray-800 px-8 rounded-3xl w-48 h-20">
            <EmailIcon size={24} />
            <span className="text-xl text-blue-500 font-bold">E-mail</span>
          </div>

          <div className="flex items-center gap-4 bg-gray-800 px-8 rounded-3xl w-48 h-20">
            <GithubIcon size={24} />
            <span className="text-xl text-blue-500 font-bold">GitHub</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../lang/${locale}.json`)).default,
    },
  }
}
