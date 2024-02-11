'use client'

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
          src="/1000_F_265729869_mYcOBHGd1ifo9ocwmfDIc4tl5jN7M7sy.jpg"
          alt="person-image"
          width={256}
          height={256}
          objectFit="cover"
          className="relative rounded-full"
        />
      </button>
    </div>
  )
}
