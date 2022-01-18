import React from "react";
import Item from "./common/Item";
import Container from "./common/Container";
import pizzaArray from "./../services/fakePizzaService";

function Menu(props) {
  return (
    <Container
      tag="main"
      stylesOut="bg-gradient-to-b from-red-darker to-red-dark px-3 pb-16 pt-8 tablet-small:px-6 tablet:px-3 tablet:pb-20 laptop:pb-24 desktop:pb-28"
      stylesIn="grid grid-cols-1 justify-items-center items-center gap-y-12 tablet-small:gap-y-16 tablet:gap-y-12 tablet:grid-cols-2 tablet:gap-x-3 laptop:grid-cols-1 laptop:gap-x-4 laptop:gap-y-6 desktop:grid-cols-2 desktop:gap-y-8"
    >
      {pizzaArray.map((pizza) => (
        <Item itemData={pizza} key={pizza._id} />
      ))}
    </Container>
  );
}

export default Menu;
