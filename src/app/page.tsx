import GetCurrentHour from '../../components/getCurrentTime'
import UserSelectProfile from '../../components/userSelectProfile'
import Linkedin from '../../svgs/Linkedin.svg'
import Instagram from '../../svgs/Instagram.svg'
import Github from '../../svgs/Github.svg'
import Email from '../../svgs/Email.svg'
import ArrowRigth from '../../svgs/ArrowRigth.svg'

export default function Home() {
  return (
    <main className="bg-[#030712] flex flex-col h-screen">
      <div className="fixed h-full bg-[#040813] w-[85px] right-0 flex justify-center items-center">
        <ArrowRigth></ArrowRigth>
      </div>

      <div className="flex-1 mr-[85px]">
        <div className="text-4xl text-white flex flex-col items-end mt-3 mr-7 font-sans font-light">
          <GetCurrentHour />
        </div>
        <div className="text-6xl text-white mt-32 flex flex-col items-center font-sans font-bold">
          <h1>Hi, I’m Richarde Lira</h1>
          <div className="text-4xl mt-6 font-sans font-light">
            <h2>Software devolper </h2>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-16">
          <UserSelectProfile></UserSelectProfile>
        </div>

        <div className="flex space-x-6  bottom-0 left-0 p-4 fixed">
          <Linkedin />
          <Github />
          <Instagram />
          <Email />
        </div>
      </div>
    </main>
  )
}
