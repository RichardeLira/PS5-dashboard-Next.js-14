import React from 'react'
import Data from '../data/projects/projects'
import { Poppins } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

interface projectData {
  Title: string
  Description: string
  Image: string
}

const data: Array<projectData> = Data

function handleClick(item: projectData) {}

export default function ListProjects() {
  return (
    <main>
      <div>
        {data.map((item) => (
          <div
            onClick={() => handleClick(item)}
            key={item.Title}
            className="relative flex justify-center"
          >
            <div className="relative group w-full h-full rounded-xl ">
              <Image
                src={item.Image}
                width={300}
                height={400}
                alt="project img"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-[#5A67D8] bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex flex-row justify-center items-center">
                <h1
                  className={`${poppins.className} text-black text-3xl font-bold`}
                >
                  {item.Title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
