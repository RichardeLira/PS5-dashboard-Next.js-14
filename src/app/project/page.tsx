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
import Navbar from '@/components/layout/navbar'
import ListProjects from '@/components/ListProjects'
import { Button } from '@/components/ui/button'

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

  const [selectionProjectView, setSelectionProjectView] = useState(false)

  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    setAnimationKey((prev) => prev + 1)
  }, [description, title])

  return (
    <main className="bg-[#030712] flex flex-col h-screen overflow-auto">
      <div className=" ml-10">
        <div className="px-48">
          <Navbar />
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

      <div className="flex flex-col justify-center items-center mt-10">
        <div className="w-1/2 relative flex flex-row justify-center items-center">
          <h1 className="text-white text-2xl absolute left-1/2 transform -translate-x-1/2">
            Projetos
          </h1>
          <div className={`flex flex-row justify-center items-center ml-auto`}>
            <h1 className={`${poppinsHome.className} text-white text-lg`}>
              Grade
            </h1>

            <GridShow>
              <Button
                onClick={() => {
                  console.log(selectionProjectView)
                  setSelectionProjectView(!selectionProjectView)
                }}
              ></Button>
            </GridShow>
          </div>
        </div>
        {selectionProjectView ? (
          <div className="mt-5">
            <GridImage setTitle={setTitle} setDescription={setDescription} />
          </div>
        ) : (
          <div className="mt-5">
            <ListProjects />
          </div>
        )}
      </div>
    </main>
  )
}
