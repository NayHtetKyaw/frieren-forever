import React from 'react'
import Image from 'next/image'

function profile() {
  return (
    <div className="bg-white w-[200px] h-[200px] rounded-md m-10 transition duration-500 hover:scale-105">
    <Image
      className="rounded-md"
      src="/aura_profile.png"
      width={200}
      height={200}
      alt="Picture of the author"
    />
  </div>
  )
}

export default profile