'use client'

import React, { useEffect, useState } from 'react'
import ArrowLeft from '../../assets/svgs/ArrowLeft.svg'
import { Poppins } from 'next/font/google'
import NodeSvg from '../../assets/tecnologies-svg/Node.svg'
import NextSvg from '../../assets/tecnologies-svg/NextJs.svg'
import PrismaSvg from '../../assets/tecnologies-svg/Prisma.svg'
import TailWind from '../../assets/tecnologies-svg/Tailwind.svg'
import Demo from '../../assets/svgs/Demo.svg'
import Code from '../../assets/svgs/Code.svg'
import GridImage from '@/components/GridImage'
import GridShow from '../../assets/svgs/GradeChange.svg'

const poppinsHome = Poppins({
  subsets: ['latin'],
  weight: ['500'],
})

const poppinsDescription = Poppins({
  subsets: ['latin'],
  weight: ['200'],
})

export default function Page() {
  const [description, setDescription] = useState(
    'Projeto de uma plataforma para cursos online construída em Next.js e Tailwind CSS.',
  )

  const [title, setTitle] = useState(
    'Projeto de uma plataforma para cursos online construída em Next.js e Tailwind CSS.',
  )

  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    setAnimationKey((prev) => prev + 1)
  }, [description, title])

  return (
    <main className="bg-[#030712] flex flex-col h-screen overflow-auto">
      <div className=" ml-10">
        <div className="flex flex-row space-x-20 items-center mt-4">
          <div className="mt-3 ">
            <ArrowLeft />
          </div>

          <div
            className={`${poppinsHome.className} flex flex-row space-x-10 mt-3`}
          >
            <h2 className="text-white  font-medium text-4xl ">Home</h2>
            <h2 className="text-[#C9C9C9]  font-medium text-4xl">Sobre mim</h2>
          </div>
        </div>

        <div
          key={animationKey}
          className={`flex flex-row  mt-12 animate-fadeIn`}
        >
          <NodeSvg />
          <NextSvg />
          <PrismaSvg />
          <TailWind />
        </div>

        <div className={`flex flex-col  mt-20`}>
          <h1
            key={animationKey + 1}
            className={`${poppinsHome.className} text-white text-5xl animate-fadeIn`}
          >
            {title}
          </h1>
          <h3
            key={animationKey + 2}
            className={`${poppinsDescription.className} text-white text-3xl w-full sm:w-2/3 md:w-1/2 mt-5 animate-fadeIn`}
          >
            {description}
          </h3>
        </div>

        <div className="flex flex-row mt-10 -ml-2">
          <Demo />
          <Code />
        </div>
      </div>

      <div className="flex felx-row flex-col justify-center items-center mt-10">
        <div className="flex flex-row w-1/2">
          <h1 className={`${poppinsHome.className} text-white text-2xl `}>
            Projetos
          </h1>

          <GridShow />
        </div>

        <div className="mt-5">
          <GridImage setTitle={setTitle} setDescription={setDescription} />
        </div>
      </div>
    </main>
  )
}
