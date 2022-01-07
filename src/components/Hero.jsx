import React from "react";
import { HeroPicture } from "./common/Pictures";
import Container from "./common/Container";
import Welcome from "./Welcome";

function Hero(props) {
  return (
    <Container
      tag="section"
      stylesOut={"bg-gradient-to-b from-red-darker to-red-dark z-10"}
      stylesIn={"flex flex-col justify-center items-center"}
    >
      <HeroPicture
        className={"laptop:mb-20 laptop:px-2 w-full laptop:order-1"}
      />
      <Welcome styles="my-10 tablet:my-16 laptop:mb-14 laptop:mt-10" />
    </Container>
  );
}

export default Hero;
