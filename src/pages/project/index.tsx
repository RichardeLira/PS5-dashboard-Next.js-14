import React, { useEffect, useState } from 'react'
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
  const [coreAnimation, setCoreAnimation] = useState(false) // Initial state to center
  const [myProjectAnimation, setMyProjectAnimation] = useState(false) // Initial state to my project name animation
  const [slideAnimation, setSlideAnimation] = useState(false)
  const [contentAnimantion, setContentAnimation] = useState(false)

  useEffect(() => {
    const animateSequentially = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setMyProjectAnimation((prev) => !prev)

      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSlideAnimation((prev) => !prev)

      await new Promise((resolve) => setTimeout(resolve, 1000))
      setContentAnimation((prev) => !prev)
    }

    animateSequentially()
  }, [coreAnimation])

  return (
    <div className="bg-[#030712] flex flex-col overflow-auto overflow-x-hidden h-screen relative">
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          slideAnimation ? 'opacity-100  animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="px-48 pt-28">
          <div className="flex flex-row space-x-5">
            <PrismaIcon size={80}></PrismaIcon>
            <PrismaIcon size={80}></PrismaIcon>
            <PrismaIcon size={80}></PrismaIcon>
            <PrismaIcon size={80}></PrismaIcon>
            <NodeIcon size={80}></NodeIcon>
          </div>

          <div className={`flex flex-col pt-10`}>
            <h1 className={`${poppinsHome.className} text-white text-4xl`}>
              {title}
            </h1>
            <h3
              className={`${poppinsDescription.className} text-white text-xl w-1/3 mt-5`}
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
              className={`${poppinsHome.className} text-white text-2xl flex-grow text-center`}
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

      <div className="flex flex-col justify-center items-center h-screen w-screen animate-fade-in">
        <div
          className={`transition-transform duration-1000 ease-in-out transform-gpu ${
            coreAnimation ? 'translate-y-[0%]' : '-translate-y-[30vh]'
          }`}
        >
          <h1
            className={`text-white text-4xl font-bold text-center ${myProjectAnimation ? 'animate-fade-out opacity-0 mb-10' : 'mb-10'}`}
          >
            My projects
          </h1>
          {changeView ? (
            <Carrouselproject
              size={250}
              setDescription={setDescription}
              setTitle={setTitle}
              setSlideMove={setCoreAnimation}
              slideMove={coreAnimation}
              titleState={title}
            ></Carrouselproject>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
}
