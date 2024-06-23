'use client'
import persona from '@/assets/img/persona.jpg'
import Image from 'next/image'
import React from 'react'

export default function UserSelectProfile() {
  function sendAlert(): void {
    console.log('Ok, is work')
  }

  return (
    <div className="w-300px h-300px rounded-full overflow-hidden hover:scale-125 transition duration-500 cursor-pointer">
      <button onClick={sendAlert} className="">
        <Image
          src={persona}
          width={256}
          height={256}
          alt="person-image"
          className="relative rounded-full"
        />
      </button>
    </div>
  )
}
