import React from 'react'
import { Button } from '../ui/button'
import { Code, IconProps } from '@phosphor-icons/react'

export default function CodeIcon({ size }: IconProps) {
  return (
    <Button className="flex justify-center items-center w-[151px] h-[56px] rounded-xl bg-green-500">
      <div className="flex flex-row items-center space-x-3">
        <Code size={size}></Code>
        <h2 className="font-bold text-2xl">Code</h2>
      </div>
    </Button>
  )
}
