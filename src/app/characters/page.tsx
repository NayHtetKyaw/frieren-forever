import React from "react";
import Image from "next/image";
import Profile from "@/components/profile";

const pic = ["/aura_profile.png", "/Aura_BG.png"];

const allPic = pic.map((pics) => (
  <div key={pic.length}>
    <Profile
      className="rounded-md"
      src={pics}
      width={200}
      height={200}
      alt="Picture of the author"
    />
  </div>
));

function page() {
  return (
    // Characters contents
    <section>
      <div className="text-center text-[50px] font-bold tracking-widest">
        <h1>Characters</h1>
      </div>

      {/* Character Cards */}
      <div className=" px-10 py-5 flex flex-col justify-center">
        {/* Aura Card */}
        <div className="flex flex-row flex-wrap justify-center ">{allPic}</div>
      </div>
    </section>
  );
}

export default page;
