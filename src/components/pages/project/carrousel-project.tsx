import Data from '@/data/projects'
import Image from 'next/image'

// import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface ProjectData {
  Title: string
  Description: string
  Image: string
}

const data: Array<ProjectData> = Data

export default function Carrouselproject() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-[90%]"
    >
      <CarouselContent>
        {data.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Image
                src={project.Image}
                alt={project.Title}
                width={200} // Ajuste conforme necessário
                height={200} // Ajuste conforme necessário
                className="object-cover"
              />
              {/* <div className="mt-2 text-center">
                <h3 className="text-lg font-semibold">{project.Title}</h3>
                <p className="text-sm">{project.Description}</p>
              </div> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
