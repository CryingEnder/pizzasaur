import React from "react";
import { HeroPicture } from "./common/Pictures";
import Container from "./common/Container";

function Hero(props) {
  return (
    <Container
      tag="header"
      stylesOut={"bg-gradient-to-b from-red-darker to-red-dark z-10"}
      stylesIn={"flex flex-col justify-center items-center"}
    >
      <HeroPicture className="w-full laptop:px-2 laptop:order-1 laptop:mb-24 desktop:mb-28" />
      <h1 className="text-zinc-100 drop-shadow-md text-center underline underline-offset-2 decoration-orange-500 mx-2 mt-7 mb-14 tablet-small:mt-9 tablet-small:mb-16 tablet:mb-20 laptop:mb-16 laptop:decoration-yellow-400">
        Welcome to Pizzasaur
      </h1>
    </Container>
  );
}

export default Hero;
