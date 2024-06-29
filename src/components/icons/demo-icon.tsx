import { IconProps } from '@/types/icon-props'
import { Button } from '../ui/button'
import { Eye } from '@phosphor-icons/react/dist/ssr'
//

export default function DemoIcon({ size }: IconProps) {
  return (
    <Button className="flex justify-center items-center w-[151px] h-[56px] rounded-xl bg-blue-400">
      <div className="flex flex-row items-center space-x-3 ">
        <Eye size={size}></Eye>

        <h2 className="font-bold text-2xl">Demo</h2>
      </div>
    </Button>
  )
}
