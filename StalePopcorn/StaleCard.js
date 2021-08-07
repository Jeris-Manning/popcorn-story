import React from "react";
import styled from "styled-components";

const MovieCard = (props) => {
  console.log(props, "PROPS");

  return (
    <Card>
      <TitleBox>
        <h2>{props.film.title}</h2>
      </TitleBox>

      {props.film.image !== "N/A" && (
        <FilmImg src={props.film.image} alt={props.film.title} />
      )}
      <h3>{props.film.year}</h3>
    </Card>
  );
};

export default MovieCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 225px;
  border: solid black 3px;
  padding: 2px 0;
  margin-bottom: 20px;
  background: #C90402;
  color: white;
  text-shadow: 1px 1px 1px black;

  h3 {
    font-size: 1.2rem;
  }
  /* justify-content: flex-start; */
  /* background: blue; */
  /* min-height: 200px;
  min-width: 300px; */
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 5px 0;

  h2 {
    /* height: 40px; */
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0 5px;
    /* text-overflow: ellipsis; */
    /* max-height: 50px; */
  }
`;

const FilmImg = styled.img`
  height: 290px;
  width: auto;
  max-width: 100%;
  border-top: solid 1px black;
  border-bottom: solid 1px black;
  margin: 3px 0;
  /* width: auto; */
`;
