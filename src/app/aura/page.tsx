import React from 'react'
import AuraWaifu from "@public/Aura_BG.png";
import { Section } from "@radix-ui/themes"

function page() {
  return (
    <div>
      <div>I love AURA Ouuugggghhttt 😭😭😭😭</div>
      <Section
        className="absolute inset-0 z-5 "
        style={{
          backgroundImage: `url(${AuraWaifu.src})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />
    </div>
  )
}

export default page