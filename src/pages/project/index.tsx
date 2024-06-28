import React from 'react'
import { Poppins } from 'next/font/google'
import { Code } from '@phosphor-icons/react'
import GridImage from '@/components/pages/project/grid-image'

const poppinsHome = Poppins({
  subsets: ['latin'],
  weight: ['500'],
})

const poppinsDescription = Poppins({
  subsets: ['latin'],
  weight: ['200'],
})

export default function Project() {
  return (
    <main className="bg-[#030712] flex flex-col h-screen overflow-auto">
      <div className=" ml-10">
        <div className="flex flex-row space-x-20 items-center mt-4">
          <div className="mt-3 ">{/* <ArrowLeft /> */}</div>
          <div
            className={`${poppinsHome.className} flex flex-row space-x-10 mt-3`}
          >
            <h2 className="text-white  font-medium text-4xl ">Home</h2>
            <h2 className="text-[#C9C9C9] font-medium text-4xl">Sobre mim</h2>
          </div>
        </div>

        <div className="flex flex-row  mt-12">
          {/* <NodeSvg />
          <NextSvg />
          <PrismaSvg /> 
          <TailWind /> */}
        </div>

        <div className={`flex flex-col  mt-20`}>
          <h1 className={`${poppinsHome.className} text-white text-5xl`}>
            Videoplatform
          </h1>
          <h3
            className={`${poppinsDescription.className} text-white text-3xl w-1/3 mt-5 `}
          >
            Projeto de uma plataforma para cursos online construída em Next.js e
            Tailwind CSS.
          </h3>
        </div>

        <div className="flex flex-row mt-10 -ml-2">
          <Code />
          {/* <Demo />
          <Code /> */}
        </div>
      </div>

      <div className="flex flex-col felx-row justify-center items-center mt-10">
        <h1 className={`${poppinsHome.className} text-white text-2xl `}>
          Projetos
        </h1>

        <div className="mt-5">
          <GridImage />
        </div>
      </div>
    </main>
  )
}
