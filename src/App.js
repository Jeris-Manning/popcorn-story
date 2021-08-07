import React, { useState } from "react";
import PopcornLogo from "./components/PopcornLogo";
import MovieCardThumb from "./components/MovieCardThumb";
import { axiosHelper } from "./utilities/axiosHelper";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch() {
    setSearchResults(await axiosHelper(searchTerm));
  }

  return (
    <div className="container flex flex-col items-center min-w-full min-h-screen bg-yellow-200">
      <div className="flex justify-around items-end max-w-screen-xl w-full">
        <PopcornLogo />
        <div className="flex items-center">
          <input
            className="bg-movie-red text-movie-white text-2xl font-semibold"
            type="search"
            name="filmTitle"
            id="titleSearch"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div
            className="border-2 border-black h-10 w-24 ml-4 bg-movie-white text-movie-red text-2xl font-bold text-center rounded-lg filter drop-shadow-popcorn"
            onClick={searchTerm.length > 0 ? handleSearch : undefined}>
            Search
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-cards justify-around w-full max-w-screen-xl mt-3">
        {searchResults !== [] &&
          searchResults.map((film) => (
            <a
              href={`https://www.imdb.com/title/${film.imdbID}/`}
              target="_blank">
              <MovieCardThumb
                title={film.Title}
                year={film.Year}
                poster={film.Poster}
              />
            </a>
          ))}
      </div>
    </div>
  );
}

export default App;
