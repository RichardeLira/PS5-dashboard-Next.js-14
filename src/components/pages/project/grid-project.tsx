import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Data from '@/data/projects'
import { ViewProjectProps } from '@/types/view-project-props'
import Image from 'next/image'
import { ProjectData } from '../../../types/projec-data-props'

const data: Array<ProjectData> = Data

export default function GridProject({
  setTitle,
  setDescription,
  size,
}: ViewProjectProps) {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)

  const handleMouseOver = (title: string, description: string) => {
    setDescription(description)
    setTitle(title)
  }

  const handleButtonClick = (title: string, description: string) => {
    setSelectedTitle(title)
    setDescription(description)
    setTitle(title)
  }

  return (
    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
        {data.map((item) => (
          <Button
            key={item.Title}
            onMouseOver={() => handleMouseOver(item.Title, item.Description)}
            onClick={() => handleButtonClick(item.Title, item.Description)}
            className={`w-auto h-auto flex justify-center bg-transparent hover:bg-transparent transform transition-transform duration-300 hover:-translate-y-3 ${
              selectedTitle === item.Title ? 'drop-shadow-2xl shadow-black' : ''
            }`}
          >
            <div
              className={` transition-transform duration-300 relative ${
                selectedTitle === item.Title ? 'scale-110' : ''
              }`}
            >
              <Image
                src={item.Image}
                width={size}
                height={size}
                alt={item.Title}
                className="object-cover rounded-2xl "
              ></Image>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" rounded-2xl absolute inset-0 bg-purple-400 opacity-0 hover:opacity-60"></div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}
