import React from "react";
import { HeroPictureSmall, HeroPictureBig } from "./common/Pictures";
import Container from "./common/Container";

function Hero(props) {
  return (
    <Container
      tag="header"
      stylesOut={"z-10"}
      stylesIn={"flex flex-col justify-center items-center"}
    >
      <h1 className="mx-2 mt-8 mb-14 hidden text-center text-slate-800 drop-shadow laptop:block">
        Welcome to Pizzasaur
      </h1>
      <HeroPictureSmall className="aspect-w-1 aspect-h-0.77 w-full border-t-4 border-solid border-slate-800 tablet:aspect-h-0.6 tablet:border-t-8 laptop:hidden" />
      <HeroPictureBig className="mx-2 mb-24 hidden laptop:block desktop:mb-28" />
    </Container>
  );
}

export default Hero;
