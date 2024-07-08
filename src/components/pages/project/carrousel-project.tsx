import Data from '@/data/projects'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { SlideProps } from '@/types/slide-props'
import { Button } from '@/components/ui/button'

interface ProjectData {
  Title: string
  Description: string
  Image: string
}

const data: Array<ProjectData> = Data

export default function Carrouselproject({ size }: SlideProps) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030712]/100 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030712]/100 to-transparent z-10 pointer-events-none"></div>
      <Carousel
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent>
          {data.map((project, index) => (
            <CarouselItem key={index} className="md:basis-auto lg:basis-auto">
              <Button className="w-full h-full bg-transparent  transform transition-transform duration-300 hover:-translate-y-2 hover:bg-transparent">
                <Image
                  src={project.Image}
                  alt={project.Title}
                  width={size}
                  height={size}
                  className="object-cover"
                />
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
