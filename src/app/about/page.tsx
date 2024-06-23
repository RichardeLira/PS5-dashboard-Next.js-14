import Navbar from '@/components/layout/navbar'

export default function About() {
  return (
    <div className="h-full flex gap-24 px-48 flex-col items-center from-blue-700 from-25% to-80% to-blue-900 bg-gradient-to-bl">
      <Navbar />

      <section className="flex items-center justify-center flex-col gap-8">
        <div>
          <h2 className="px-2">Sobre mim</h2>
          <div className="w-full h-1 bg-blue-500" />
        </div>
        <p className="max-w-[900px] text-center">
          Projeto de uma plataforma para cursos online construída em Next.js e
          Tailwind CSS. Projeto de uma plataforma para cursos online construída
          em Next.js e Tailwind CSS. Projeto de uma plataforma para cursos
          online construída em Next.js e Tailwind CSS.
        </p>
      </section>

      <section className="flex items-center justify-center flex-col gap-8">
        <div>
          <h2 className="px-2">Habilidades</h2>
          <div className="w-full h-1 bg-blue-500" />
        </div>
        <p className="max-w-[900px] text-center">
          Projeto de uma plataforma para cursos online construída em Next.js e
          Tailwind CSS. Projeto de uma plataforma para cursos online construída
          em Next.js e Tailwind CSS. Projeto de uma plataforma para cursos
          online construída em Next.js e Tailwind CSS.
        </p>
      </section>
    </div>
  )
}
