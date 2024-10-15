import React from "react";

function page() {
  return (
    <div className="flex">
      <div className="w-1/2 h-96 border">
        <img />
      </div>
      <div className="w-1/2 h-96 justify-center  flex flex-col gap-y-3 px-10 py-10">
        <input className="p-3 text-4xl text-black" placeholder="Admin Id" />
        <input className="p-5" placeholder="Password" />
        <button className="p-5 border text-3xl">LOGIN</button>
      </div>
    </div>
  );
}

export default page;
