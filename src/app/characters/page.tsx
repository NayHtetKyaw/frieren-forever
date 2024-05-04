import React from "react";
import Profile from "@/components/profile";

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
        <Profile />
      </div>
    </section>
  );
}

export default page;
