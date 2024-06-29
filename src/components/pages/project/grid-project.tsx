import Data from '@/data/projects'
import Image from 'next/image'

interface projectData {
  Title: string
  Description: string
  Image: string
}

const data: Array<projectData> = Data

export default function GridImage() {
  return (
    <main className="max-w-6xl mx-auto sm:px-6 lg:px-8 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
        {data.map((item) => {
          console.log(item.Image)
          return (
            <div key={item.Title} className="flex justify-center">
              <Image
                src={item.Image}
                width={300}
                height={400}
                alt="project img"
              ></Image>
            </div>
          )
        })}
      </div>
    </main>
  )
}
