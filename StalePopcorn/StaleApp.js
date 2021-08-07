import React, { useEffect, useState } from "react";
import "./App.css";
import { queryKey, url } from "./utilities/keys.sensitive";
import popcornBox from "./images/popcornBox.png";
import styled from "styled-components";
import Logo from "./Components/Logo";
import MovieCard from "./Components/MovieCard";

const axios = require("axios").default;

function App() {
  const [titleSearch, setTitleSearch] = useState("");
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [startSearch, setStartSearch] = useState(true);
  const [results, setResults] = useState([]);

  // const params = {
  //   apikey: queryKey,
  //   i: "tt0211915",
  //   plot: "full",
  //   r: "json",
  // };

  const params = {
    apikey: queryKey,
    s: titleSearch,
    type: "movie",
  };

  useEffect(() => {
    if (titleSearch.length > 0) {
      axios.get(url, { params }).then((res) => {
        // setTitle(res.data.Title);
        // setPoster(res.data.Poster);
        setResults(
          res.data.Search.map((film) => {
            return {
              title: film.Title,
              year: film.Year,
              id: film.imdbID,
              image: film.Poster,
            };
          })
        );
      });
    }
  }, [startSearch]);

  //startSearch

  return (
    <Popcorn>
      {/* <div className="papa">
        <h1 className="top-pop">Popcorn!</h1>
        <h1 className="bot-pop">Popcorn!</h1>
      </div> */}

      <TopDiv>
        <Logo />
        <SearchDiv>
          <input
            type="search"
            name="filmTitle"
            id="titleSearch"
            value={titleSearch}
            onChange={(e) => setTitleSearch(e.target.value)}
          />
          <button onClick={() => setStartSearch(!startSearch)}>Search</button>
        </SearchDiv>
      </TopDiv>
      <CardContainer>
        {results !== [] && results.map((film) => <MovieCard film={film} />)}
      </CardContainer>
    </Popcorn>
  );
}

export default App;

const Popcorn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fab1;
  min-height: 100vh;
  width: 100%;
`;

const TopDiv = styled.div`
  /* margin-bottom: 25px; */
  height: 150px;
  display: flex;

  .monkey {
    display: none;
  }
`;

const SearchDiv = styled.div`
  display: flex;
  height: 150px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  /* background: green; */
  flex-wrap: wrap;
  max-width: 1300px;
`;
