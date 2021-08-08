import React from "react";
import styled from "styled-components";

const MovieCardThumb = ({ title, year, poster }) => {
  return (
    <MovieCard>
      <TitleWrapper>
        <h2>{title}</h2>
      </TitleWrapper>
      <ImageWrapper>
        <img src={poster} alt={title} />
      </ImageWrapper>
      <FooterWrapper>
        <h3>{year}</h3>
      </FooterWrapper>
    </MovieCard>
  );
};

export default MovieCardThumb;

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 22rem;
  width: 14rem;
  margin: 0.5rem 1rem;
  border: solid 2px black;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f59e0b;
  min-width: 100%;
  height: 2rem;
  text-align: center;
  padding: 0 0.25rem;

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.25rem;
    margin-bottom: 0.25rem;
  }
`;

const ImageWrapper = styled.div`
  height: 83.3333333%;
  width: 100%;
  object-fit: fill;
  border-top: 2px black solid;
  border-bottom: 2px black solid;

  img {
    height: 100%;
    width: 100%;
  }
`;

const FooterWrapper = styled.div`
  background-color: #fef3c7;
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    padding-left: 0.75rem;
  }
`;
