import Data from '../data/projects/projects'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

interface projectData {
  Title: string
  Description: string
  Image: string
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

interface GridImageProps {
  setTitle: (title: string) => void
  setDescription: (description: string) => void
}

const data: Array<projectData> = Data

export default function GridImage({
  setTitle,
  setDescription,
}: GridImageProps) {
  function handleClick(item: projectData) {
    setTitle(item.Title)
    setDescription(item.Description)
  }

  return (
    <main className="max-w-6xl mx-auto sm:px-6 lg:px-8 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
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
