import React, { useState, useEffect } from "react";
import Item from "./common/Item";
import MenuSection from "./MenuSection";
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
    <main className="bg-gradient-to-b from-red-darker to-red-dark pb-16 tablet:pb-20 laptop:pb-24 desktop:pb-28">
      <MenuSection id="pizza-section" content="Pizza">
        {pizzas.map((pizza) => (
          <Item itemData={pizza} key={pizza._id} />
        ))}
      </MenuSection>
      <MenuSection id="desserts-section" content="Desserts">
        {desserts.map((dessert) => (
          <Item simplified={true} itemData={dessert} key={dessert._id} />
        ))}
      </MenuSection>
      <MenuSection id="drinks-section" content="Drinks">
        {drinks.map((drink) => (
          <Item simplified={true} itemData={drink} key={drink._id} />
        ))}
      </MenuSection>
    </main>
  );
}

export default Menu;
