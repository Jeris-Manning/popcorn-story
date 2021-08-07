import React from "react";

const MovieCardThumb = ({ title, year, poster }) => {
  return (

    <div className="flex flex-col justify-between h-movie-card w-56 mx-4 my-2 bg-green-600 border-2 border-black" >
      <div className="min-w-full h-8 text-center flex items-center justify-center bg-yellow-500 px-1">
        <h2 className="truncate font-bold text-xl leading-tight  mb-1">{title}</h2>
      </div>
      <div className="h-5/6 w-full object-fill border-t-2 border-b-2 border-black">
        <img className="h-full w-full" src={poster} alt={title} />
      </div>
      <div className="h-1/12 bg-yellow-100">
        <h3 className="text-lg font-semibold pl-3">{year}</h3>
      </div>
    </div>
  );
};

export default MovieCardThumb;
