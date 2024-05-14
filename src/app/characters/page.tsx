import React from "react";
import Profile from "@/components/profile";
import { Platypi } from "next/font/google";
const platypi = Platypi({ subsets: ["latin"] });

function page() {
  return (
    // Characters contents
    <section>
      <div className={platypi.className}>
        <h1 className="text-center text-[50px] font-bold tracking-widest mt-8">
          CHARACTERS
        </h1>
        <p className="text-center text-[30px] my-5">Hero&apos;s Party</p>
      </div>

      {/* Character Cards */}
      <div className=" px-10 flex flex-col justify-center">
        {/* Aura Card */}
        <Profile />
      </div>
    </section>
  );
}

export default page;
