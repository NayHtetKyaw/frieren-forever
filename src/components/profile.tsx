import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

function profile(props: any) {
  const cards = [
    {
      img: "/aura_profile.png",
    },
    {
      img: "/aura_profile.png",
    },
    {
      img: "/aura_profile.png",
    },
    {
      img: "/aura_profile.png",
    },
    {
      img: "/aura_profile.png",
    },
    {
      img: "/aura_profile.png",
    },
    {
      img: "/aura_profile.png",
    },
    {
      img: "/aura_profile.png",
    },
    {
      img: "/aura_profile.png",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap justify-center ">
      {cards.map((item) => (
        <div
          className="bg-white w-[200px] h-[200px] rounded-md m-10 transition duration-500 hover:scale-105"
          key={uuidv4()}
        >
          <Image
            className="rounded-md"
            src={item.img}
            height={200}
            width={200}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

export default profile;
