import React, { useState, useEffect } from "react";
import Item from "./common/Item";
import Container from "./common/Container";
import pizzaArray from "./../services/fakePizzaService";
import dessertsArray from "./../services/fakeDessertsService";
import drinksArray from "./../services/fakeDrinksService";

function Menu(props) {
  const [pizzas, setPizzas] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  function getItems() {
    setPizzas(pizzaArray);
    setDesserts(dessertsArray);
    setDrinks(drinksArray);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container
      tag="main"
      stylesOut="bg-gradient-to-b from-red-darker to-red-dark px-3 pb-16 pt-8 tablet-small:px-6 tablet:px-3 tablet:pb-20 laptop:pb-24 desktop:pb-28"
      stylesIn="grid grid-cols-1 justify-items-center items-center gap-y-12 tablet-small:gap-y-16 tablet:gap-y-12 tablet:grid-cols-2 tablet:gap-x-3 laptop:grid-cols-1 laptop:gap-x-4 laptop:gap-y-6 desktop:grid-cols-2 desktop:gap-y-8"
    >
      {pizzas.map((pizza) => (
        <Item itemData={pizza} key={pizza._id} />
      ))}
      {desserts.map((dessert) => (
        <Item simplified={true} itemData={dessert} key={dessert._id} />
      ))}
      {drinks.map((drink) => (
        <Item simplified={true} itemData={drink} key={drink._id} />
      ))}
    </Container>
  );
}

export default Menu;
