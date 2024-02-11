import GetCurrentHour from '../../components/getCurrentTime'
import UserSelectProfile from '../../components/userSelectProfile'

export default function Home() {
  return (
    <main className="bg-[#030712] flex flex-col h-screen">
      <div className="text-4xl flex flex-col justify-items-end items-end mt-3 mr-7 font-sans font-light">
        <GetCurrentHour />
      </div>
      <div className="text-6xl mt-32 flex flex-col items-center font-sans font-light">
        <h1>Welcome back to my portfolio</h1>
        <div className="text-4xl mt-6 font-sans font-light">
          <h2>Let's see what's new?</h2>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-16">
        <UserSelectProfile></UserSelectProfile>
        <div className="flex flex-col items-center font-sans font-light mt-6">
          <h3>Richard Lira</h3>
        </div>
      </div>
    </main>
  )
}
