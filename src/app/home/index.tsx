import SocialMediaButton from './_components/social-media-button'
import TextReveal from './_components/text-reveal'
import persona from '@/assets/img/persona.jpg'
import Image from 'next/image'

import { getCurrentTime } from '@/util/getCurrentTime'

export default function Home() {
  return (
    <div className="h-full bg-blue-900 relative">
      <div className="absolute top-8 right-12 text-xl font-sans font-light text-white">
        {getCurrentTime()}
      </div>

      <div className="absolute w-full flex flex-col gap-4 items-center top-1/4">
        <h1>Hi, I’m Richarde Lira</h1>
        <TextReveal text="Software Developer" />

        <Image
          src={persona}
          width={256}
          height={256}
          alt="person-image"
          className="relative rounded-full"
        />
      </div>

      <div className="absolute left-8 flex gap-4 bottom-8">
        <SocialMediaButton
          type="social"
          platform="github"
          link="https://github.com/pedrogrigorio"
          text="github.com/pedrogrigorio"
        />

        <SocialMediaButton
          type="social"
          platform="linkedin"
          link="https://www.linkedin.com/in/pedro-grigorio/"
          text="linkedin.com/in/pedro-grigorio"
        />

        <SocialMediaButton
          type="email"
          platform="email"
          email="teste@gmail.com"
          text="teste@gmail.com"
        />
      </div>
    </div>
  )
}
