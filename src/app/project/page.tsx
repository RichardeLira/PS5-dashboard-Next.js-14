import React from 'react'
import ArrowLeft from '../../assets/svgs/ArrowLeft.svg'
import { Poppins } from 'next/font/google'
import NodeSvg from '../../assets/tecnologies-svg/Node.svg'
import NextSvg from '../../assets/tecnologies-svg/NextJs.svg'
import PrismaSvg from '../../assets/tecnologies-svg/Prisma.svg'
import TailWind from '../../assets/tecnologies-svg/Tailwind.svg'

const poppinsHome = Poppins({
  subsets: ['latin'],
  weight: ['500'],
})

const poppinsProjectDescription = Poppins({
  subsets: ['latin'],
  weight: ['300'],
})

export default function page() {
  return (
    <main className="bg-[#030712] flex flex-col h-screen">
      <div className="flex flex-row space-x-20 items-center">
        <div className="mt-3 ml-10">
          <ArrowLeft />
        </div>
        <div className={poppinsHome.className}>
          <div className="flex flex-row space-x-10 mt-3">
            <h2 className="text-white  font-medium text-4xl ">Home</h2>
            <h2 className="text-[#C9C9C9]  font-medium text-4xl">Sobre mim</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-row ml-10 mt-12">
        <NodeSvg />
        <NextSvg />
        <PrismaSvg />
        <TailWind />
      </div>

      <div className={poppinsHome.className}>
        <div className="flex flex-col ml-10 mt-10">
          <h1 className="text-white text-5xl">Videoplatform</h1>
          <h3 className="text-white text-3xl">
            Projeto de uma plataforma para cursos online construída em Next.js e
            Tailwind CSS.
          </h3>
        </div>
      </div>
    </main>
  )
}
