import React from 'react'
import { Poppins } from 'next/font/google'
import GridImage from '@/components/pages/project/grid-project'
import DemoIcon from '@/components/icons/demo-icon'
import CodeIcon from '@/components/icons/code-icon'
import PrismaIcon from '@/components/icons/prisma-icon'
import Carrouselproject from '@/components/pages/project/carrousel-project'

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
    <div className="bg-[#030712] flex flex-col overflow-auto h-screen">
      <div className="px-48 pt-28">
        <div className="flex flex-row space-x-5">
          <PrismaIcon size={80}></PrismaIcon>
          <PrismaIcon size={80}></PrismaIcon>
          <PrismaIcon size={80}></PrismaIcon>
          <PrismaIcon size={80}></PrismaIcon>
        </div>

        <div className={`flex flex-col  pt-10`}>
          <h1 className={`${poppinsHome.className} text-white text-4xl`}>
            Videoplatform
          </h1>
          <h3
            className={`${poppinsDescription.className} text-white text-xl w-1/3 mt-5 `}
          >
            Projeto de uma plataforma para cursos online construída em Next.js e
            Tailwind CSS.
          </h3>
        </div>

        <div className="flex flex-row mt-10 space-x-5">
          <DemoIcon size={30}></DemoIcon>
          <CodeIcon size={30}></CodeIcon>
        </div>
      </div>

      <div className="flex flex-col felx-row justify-center items-center mt-10">
        <h1 className={`${poppinsHome.className} text-white text-2xl `}>
          Projetos
        </h1>

        <div className="pt-24 flex flex-row justify-center items-center ">
          <Carrouselproject></Carrouselproject>
        </div>
      </div>
    </div>
  )
}
