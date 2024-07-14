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
import { ViewDataSlideProps } from '@/types/view-data-slide-props'

interface ProjectData {
  Title: string
  Description: string
  Image: string
}

const data: Array<ProjectData> = Data

export default function Carrouselproject({
  setDescription,
  setTitle,
  size,
  setSlideMove,
  slideMove,
  titleState,
}: ViewDataSlideProps) {
  function handleClickButton(title: string, description: string) {
    if (!titleState) setSlideMove(!slideMove)

    setDescription(description)
    setTitle(title)
  }

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030712]/100 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030712]/100 to-transparent z-10 pointer-events-none"></div>
      <Carousel
        opts={{
          align: 'center',
        }}
      >
        <CarouselContent>
          {data.map((project, index) => (
            <CarouselItem key={index} className="md:basis-auto lg:basis-auto">
              <Button
                onClick={() =>
                  handleClickButton(project.Title, project.Description)
                }
                className="w-full h-full bg-transparent  transform transition-transform duration-300 hover:-translate-y-2 hover:bg-transparent"
              >
                <div className="relative">
                  <Image
                    src={project.Image}
                    alt={project.Title}
                    width={size}
                    height={size}
                    className="object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center justify-center rounded-2xl absolute inset-0 bg-[#5A67D8] opacity-0 hover:opacity-90">
                      <h1 className="font-bold text-2xl text-black text-wrap">
                        {project.Title}
                      </h1>
                    </div>
                  </div>
                </div>
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
