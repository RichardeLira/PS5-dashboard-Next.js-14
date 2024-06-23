import Navbar from '@/components/layout/navbar'

import Skills from './_components/skills'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import EmailIcon from '@/components/icons/email-icon'
import GithubIcon from '@/components/icons/github-icon'

export default function About() {
  return (
    <div className="flex gap-24 px-48 flex-col items-center from-blue-700 from-25% to-80% to-blue-900 bg-gradient-to-bl">
      <Navbar />

      <div className="px-48 flex flex-col gap-16 pb-24">
        <section className="flex items-center justify-center flex-col gap-8">
          <div>
            <h2 className="px-2">Sobre mim</h2>
            <div className="w-full h-1 bg-blue-500" />
          </div>
          <p className="text-center">
            Projeto de uma plataforma para cursos online construída em Next.js e
            Tailwind CSS. Projeto de uma plataforma para cursos online
            construída em Next.js e Tailwind CSS. Projeto de uma plataforma para
            cursos online construída em Next.js e Tailwind CSS.
          </p>
        </section>

        <section className="flex items-center w-full justify-center flex-col gap-8">
          <div>
            <h2 className="px-2">Habilidades</h2>
            <div className="w-full h-1 bg-blue-500" />
          </div>
          <Skills />
        </section>

        <section className="flex items-center justify-center flex-col gap-8">
          <div>
            <h2 className="px-2">Contato</h2>
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
    </div>
  )
}
