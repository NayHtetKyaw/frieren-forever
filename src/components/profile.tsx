import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

function profile(props: any) {
  const Herocards = [
    {
      img: "/aura_profile.png",
      name: "Aura",
    },
    {
      img: "/linie_profile.png",
      name: "Linie",
    },
    {
      img: "/ubel_profile.png",
      name: "Ubel",
    },
  ];  


  return (
    <div className="flex flex-row flex-wrap justify-center ">
      {Herocards.map((item) => (
        <div
          className="bg-white w-[150px] h-[150px] rounded-md mx-8 my-6 transition duration-500 hover:scale-105"
          key={uuidv4()}
        >
          <Image
            className="rounded-md"
            src={item.img}
            height={150}
            width={150}
            alt=""
          />

          <div className=" text-center mt-2 font-medium">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default profile;
