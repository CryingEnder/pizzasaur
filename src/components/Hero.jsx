import React from "react";
import { HeroPicture } from "./common/Pictures";
import Container from "./common/Container";

function Hero(props) {
  return (
    <Container
      tag="section"
      stylesOut={"bg-gradient-to-b from-red-darker to-red-dark z-10"}
      stylesIn={"flex flex-row justify-center items-center"}
    >
      <HeroPicture className={"laptop:my-12 laptop:px-2 w-full"} />
    </Container>
  );
}

export default Hero;
