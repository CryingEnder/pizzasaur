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
      <HeroPicture className="aspect-w-1 aspect-h-0.77 w-full tablet:aspect-h-0.6 laptop:aspect-none laptop:order-1 laptop:mb-24 laptop:px-2 desktop:mb-28" />
      <h1 className="mx-2 mt-7 mb-14 text-center text-zinc-100 underline decoration-orange-500 underline-offset-2 drop-shadow-md tablet-small:mt-9 tablet-small:mb-16 tablet:mb-20 laptop:mb-16 laptop:decoration-yellow-400">
        Welcome to Pizzasaur
      </h1>
    </Container>
  );
}

export default Hero;
