import React from "react";
import styled from "styled-components";
import popcornBox from "../images/popcornBox.png";

const PopcornLogo = () => {
  return (
    <PopcornWrapper className="block">
      <div>
        <h1 className="popcornTopLayer">POPCORN!</h1>
        <h1 className="popcornMidLayer">POPCORN!</h1>
        <h1 className="popcornBottomLayer">POPCORN!</h1>
      </div>
    </PopcornWrapper>
  );
};

export default PopcornLogo;

const PopcornWrapper = styled.div`
  display: block;

  div {
    position: relative;
    width: 100%;
    h1 {
      font-size: 7rem;
      line-height: 0.9;
      font-weight: 700;
    }
    .popcornTopLayer {
      position: absolute;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: url(${popcornBox});
      background-position: bottom;
      background-size: cover;
      color: transparent;
      z-index: 10;
    }
    .popcornMidLayer {
      filter: drop-shadow(2px 2px 1px black);
      position: absolute;
      z-index: 5;
      color: black;
    }
    .popcornBottomLayer {
      color: transparent;
    }
  }
`;
