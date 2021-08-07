import React from "react";
import styled from "styled-components";
import popcornBox from "../images/popcornBox.png";

const Logo = () => {
  return (
    <Papa>
      <h1 className="top-pop">Popcorn!</h1>
      <h1 className="bot-pop">Popcorn!</h1>
    </Papa>
  );
};

export default Logo;

const Papa = styled.div`
  width: 445px;
  height: 125px;
  background: green;
  h1 {
    line-height: 1.3;
    margin-top: -25px;

  }

  .top-pop {
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    position: absolute;
    font-size: 6.5rem;
    background-image: url(${popcornBox});
    background-clip: text;
    -webkit-background-clip: text;
    background-position: bottom;
    color: transparent;
  }
  .bot-pop {
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    position: absolute;
    font-size: 6.5rem;
    color: black;
    text-shadow: black 2px 2px 4px;
    -webkit-text-stroke: 2px black;
  }
`;
