import React, { useState } from "react";
import styled from "styled-components";
import PopcornLogo from "./components/PopcornLogo";
import MovieCardThumb from "./components/MovieCardThumb";
import { axiosHelper } from "./utilities/axiosHelper";
import popcornStack from "./images/popcornStack.png";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch() {
    setSearchResults(await axiosHelper(searchTerm));
  }

  return (
    <PopcornMain>
      <TopBar>
        <PopcornLogo />
        <SearchBar>
          <input
            type="search"
            name="filmTitle"
            id="titleSearch"
            placeholder="Enter a Movie Title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={searchTerm.length > 0 ? handleSearch : undefined}>
            Search
          </button>
        </SearchBar>
      </TopBar>
      <MovieWrapper>
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
      </MovieWrapper>
    </PopcornMain>
  );
}

export default App;

const PopcornMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  min-height: 100vh;
  background-color: rgb(252, 211, 77);
  background-image: url(${popcornStack});
  background-attachment: fixed;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }

  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  padding: 0 1rem;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 1rem;

  input {
    background-color: var(--popcorn-red);
    color: var(--popcorn-white);
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 6px;
    ::placeholder {
      color: var(--popcorn-white);
    }
  }

  button {
    border: solid black 2px;
    height: 2.5rem;
    width: 6rem;
    margin-left: 0.5rem;
    margin-bottom: 0.25rem;
    background-color: var(--popcorn-white);
    color: var(--popcorn-red);
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    border-radius: 8px;
    filter: drop-shadow(2px 2px 1px black);
    cursor: pointer;
  }
`;

const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 20%;
  justify-content: space-around;
  width: 100%;
  max-width: 1280px;
  margin-top: 0.75rem;
`;
