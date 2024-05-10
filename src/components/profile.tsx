import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

function profile() {
  const Herocards = [
    {
      img: "/char-images/aura_profile.png",
      name: "Aura",
      onClick: "",
    },
    {
      img: "/char-images/linie_profile.png",
      name: "Linie",
      onClick: "",
    },
    {
      img: "/char-images/ubel_profile.png",
      name: "Ubel",
      onClick: "",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap justify-center ">
      {Herocards.map((item) => (
        <div
          className="bg-white w-[150px] h-[150px] rounded-2xl mx-8 my-6 transition duration-500 hover:scale-105"
          key={uuidv4()}
        >
          <Image
            className="rounded-2xl"
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
