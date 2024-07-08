import React, { useState } from 'react'
import { Poppins } from 'next/font/google'
import DemoIcon from '@/components/icons/demo-icon'
import CodeIcon from '@/components/icons/code-icon'
import PrismaIcon from '@/components/icons/prisma-icon'
import Carrouselproject from '@/components/pages/project/carrousel-project'
import Gridicon from '@/components/icons/grid-icon'
import { Button } from '@/components/ui/button'
import GridProject from '@/components/pages/project/grid-project'
import NodeIcon from '@/components/icons/node-icon'

const poppinsHome = Poppins({
  subsets: ['latin'],
  weight: ['500'],
})

const poppinsDescription = Poppins({
  subsets: ['latin'],
  weight: ['200'],
})

export default function Project() {
  const [changeView, setChangeView] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [moveSlide, setMoveSlide] = useState(true)

  return (
    <div className="bg-[#030712] flex flex-col overflow-auto h-screen">
      {title ? (
        <div>
          <div className="px-48 pt-28 animate-fade-in">
            <div className="flex flex-row space-x-5">
              <PrismaIcon size={80}></PrismaIcon>
              <PrismaIcon size={80}></PrismaIcon>
              <PrismaIcon size={80}></PrismaIcon>
              <PrismaIcon size={80}></PrismaIcon>
              <NodeIcon size={80}></NodeIcon>
            </div>

            <div className={`flex flex-col  pt-10`}>
              <h1 className={`${poppinsHome.className} text-white text-4xl`}>
                {title}
              </h1>
              <h3
                className={`${poppinsDescription.className} text-white text-xl w-1/3 mt-5 `}
              >
                {description}
              </h3>
            </div>

            <div className="flex flex-row mt-10 space-x-5">
              <DemoIcon size={30}></DemoIcon>
              <CodeIcon size={30}></CodeIcon>
            </div>
          </div>

          <div className="mt-24 px-48">
            <div className="flex items-center justify-between">
              <h1
                className={`${poppinsHome.className} text-white text-2xl flex-grow text-center `}
              >
                Projetos
              </h1>
              <Button
                className="bg-transparent hover:bg-transparent"
                onClick={() => {
                  setChangeView(!changeView)
                }}
              >
                <div className="flex flex-row space-x-4">
                  {changeView ? (
                    <h3 className="font-medium text-xl">Grade</h3>
                  ) : (
                    <h3 className="font-medium text-xl">Lista</h3>
                  )}

                  <Gridicon size={30}></Gridicon>
                </div>
              </Button>
            </div>
            {changeView ? (
              <div></div>
            ) : (
              <div className="pt-24">
                <GridProject
                  size={400}
                  setDescription={setDescription}
                  setTitle={setTitle}
                ></GridProject>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex flex-col items-center justify-center h-screen w-screen animate-fade-in pt-24">
        <div className="flex justify-center items-center animate-out ">
          {title ? (
            <div></div>
          ) : (
            <h1 className="text-white text-4xl font-bold text-center mb-28">
              My projects
            </h1>
          )}
        </div>
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out ${
            moveSlide ? 'bottom-[50%]' : 'bottom-6'
          }`}
        >
          {changeView ? (
            <Carrouselproject
              size={250}
              setDescription={setDescription}
              setTitle={setTitle}
              setSlideMove={setMoveSlide}
              slideMove={moveSlide}
            ></Carrouselproject>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
}
