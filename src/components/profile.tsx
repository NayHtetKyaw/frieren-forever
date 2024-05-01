import React from "react";
import Image from "next/image";

function profile(props: any) {
  return (
    <div className="bg-white w-[200px] h-[200px] rounded-md m-10 transition duration-500 hover:scale-105">
      <Image {...props} />
    </div>
  );
}

export default profile;

