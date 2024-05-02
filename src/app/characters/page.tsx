import React from "react";
import Profile from "@/components/profile";
<style>
@import url('https://fonts.googleapis.com/css2?family=Platypi:ital,wght@0,300..800;1,300..800&display=swap');
</style>

function page() {
  return (
    // Characters contents
    <section>
      <div className="font-[Platypi]">
        <h1 className="text-center text-[50px] font-bold tracking-widest">CHARACTERS</h1>
        <p className="text-center text-[30px] my-5">Hero's Party</p>

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
