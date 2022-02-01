import React, { useState, useEffect } from "react";
import Item from "./common/Item";
import MenuSection from "./MenuSection";
import Search from "./Search";
import pizzaArray from "./../services/fakePizzaService";
import dessertsArray from "./../services/fakeDessertsService";
import drinksArray from "./../services/fakeDrinksService";

function Menu(props) {
  const [pizzas, setPizzas] = useState([]);
  const [allPizzas, setAllPizzas] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [allDesserts, setAllDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [allDrinks, setAllDrinks] = useState([]);

  function getItems() {
    setPizzas(pizzaArray);
    setDesserts(dessertsArray);
    setDrinks(drinksArray);
    setAllPizzas(pizzaArray);
    setAllDesserts(dessertsArray);
    setAllDrinks(drinksArray);
  }

  function searchItems(input) {
    const inputValue = input.toLowerCase();

    let newPizzaArray = [];
    let newPizzaArrayIndex = 0;
    for (let item of allPizzas)
      if (item && item.name.toLowerCase().search(inputValue) !== -1)
        newPizzaArray[newPizzaArrayIndex++] = item;
    setPizzas(newPizzaArray);

    let newDessertsArray = [];
    let newDessertsArrayIndex = 0;
    for (let item of allDesserts)
      if (item && item.name.toLowerCase().search(inputValue) !== -1)
        newDessertsArray[newDessertsArrayIndex++] = item;
    setDesserts(newDessertsArray);

    let newDrinksArray = [];
    let newDrinksArrayIndex = 0;
    for (let item of allDrinks)
      if (item && item.name.toLowerCase().search(inputValue) !== -1)
        newDrinksArray[newDrinksArrayIndex++] = item;
    setDrinks(newDrinksArray);
  }

  function handleChange(e) {
    const inputValue = e.target.value;
    if (inputValue.length === 0) {
      setPizzas(allPizzas);
      setDesserts(allDesserts);
      setDrinks(allDrinks);
    } else searchItems(inputValue);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <main className="bg-gradient-to-b from-red-darker to-red-dark pb-16 tablet:pb-20 laptop:pb-24 desktop:pb-28">
      <Search onChange={handleChange} />
      <MenuSection
        className={pizzas.length === 0 ? "hidden" : ""}
        id="pizza-section"
        header="Pizza"
      >
        {pizzas.map((pizza) => (
          <Item itemData={pizza} key={pizza._id} />
        ))}
      </MenuSection>
      <MenuSection
        className={desserts.length === 0 ? "hidden" : ""}
        id="desserts-section"
        header="Desserts"
      >
        {desserts.map((dessert) => (
          <Item simplified={true} itemData={dessert} key={dessert._id} />
        ))}
      </MenuSection>
      <MenuSection
        className={drinks.length === 0 ? "hidden" : ""}
        id="drinks-section"
        header="Drinks"
      >
        {drinks.map((drink) => (
          <Item simplified={true} itemData={drink} key={drink._id} />
        ))}
      </MenuSection>
      {/* <MenuSection id="test1-section" header="Test1">
        {drinks.map((drink) => (
          <Item simplified={true} itemData={drink} key={drink._id} />
        ))}
      </MenuSection>
      <MenuSection id="test2-section" header="Test2">
        {drinks.map((drink) => (
          <Item simplified={true} itemData={drink} key={drink._id} />
        ))}
      </MenuSection>
      <MenuSection id="test3-section" header="Test3">
        {drinks.map((drink) => (
          <Item simplified={true} itemData={drink} key={drink._id} />
        ))}
      </MenuSection>
      <MenuSection id="test4-section" header="Test4">
        {drinks.map((drink) => (
          <Item simplified={true} itemData={drink} key={drink._id} />
        ))}
      </MenuSection>
      <MenuSection id="test5-section" header="Test5">
        {drinks.map((drink) => (
          <Item simplified={true} itemData={drink} key={drink._id} />
        ))}
      </MenuSection> */}
    </main>
  );
}

export default Menu;
