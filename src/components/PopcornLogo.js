import React from "react";

const PopcornLogo = () => {
  return (
    <div className="block">
      <div className="relative w-max">
        <h1 className=" text-9xl leading-popcorn font-bold absolute bg-clip-text bg-popcorn-box bg-bottom bg-cover text-transparent z-10">
          POPCORN!
        </h1>
        <h1 className=" filter drop-shadow-popcorn text-9xl leading-popcorn font-bold absolute z-0 text-black">
          POPCORN!
        </h1>
        <h1 className=" text-9xl leading-popcorn font-bold text-transparent">
          POPCORN!
        </h1>
      </div>
    </div>
  );
};

export default PopcornLogo;
