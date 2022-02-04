import React, { useState, useEffect, useContext } from "react";
import Item from "./common/Item";
import MenuSection from "./MenuSection";
import Search from "./Search";
import Sorting from "./Sorting";
import pizzaArray from "./../services/fakePizzaService";
import dessertsArray from "./../services/fakeDessertsService";
import drinksArray from "./../services/fakeDrinksService";
import { SearchContext } from "./context/SearchContext";

function Menu(props) {
  const [pizzas, setPizzas] = useState([]);
  const [allPizzas, setAllPizzas] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [allDesserts, setAllDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [allDrinks, setAllDrinks] = useState([]);

  const [itemsFetched, setItemsFetched] = useState(false);
  const { searchState, setSearchState } = useContext(SearchContext);

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

    function itemNameMatches(item) {
      return item.name.toLowerCase().search(inputValue) !== -1;
    }

    let newPizzaArray = [];
    let newPizzaArrayIndex = 0;
    for (let item of allPizzas)
      if (item && itemNameMatches(item))
        newPizzaArray[newPizzaArrayIndex++] = item;
    setPizzas(newPizzaArray);

    let newDessertsArray = [];
    let newDessertsArrayIndex = 0;
    for (let item of allDesserts)
      if (item && itemNameMatches(item))
        newDessertsArray[newDessertsArrayIndex++] = item;
    setDesserts(newDessertsArray);

    let newDrinksArray = [];
    let newDrinksArrayIndex = 0;
    for (let item of allDrinks)
      if (item && itemNameMatches(item))
        newDrinksArray[newDrinksArrayIndex++] = item;
    setDrinks(newDrinksArray);
  }

  function orderBy(selectOption) {
    let pizzasSorted = [];
    let dessertsSorted = [];
    let drinksSorted = [];

    function orderAscending(array) {
      return array.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase()
          ? -1
          : a.name.toLowerCase() > b.name.toLowerCase()
          ? 1
          : 0
      );
    }

    function orderDescending(array) {
      return array.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase()
          ? -1
          : a.name.toLowerCase() < b.name.toLowerCase()
          ? 1
          : 0
      );
    }

    function orderFromLowToHigh(array) {
      return array.sort(
        (a, b) => parseFloat(a.price[0]) - parseFloat(b.price[0])
      );
    }

    function orderFromHighToLow(array) {
      return array.sort(
        (a, b) => parseFloat(b.price[0]) - parseFloat(a.price[0])
      );
    }

    function setItemsState() {
      setAllPizzas([...pizzasSorted]);
      setAllDesserts([...dessertsSorted]);
      setAllDrinks([...drinksSorted]);
    }

    if (selectOption === "asc") {
      pizzasSorted = orderAscending(allPizzas);
      dessertsSorted = orderAscending(allDesserts);
      drinksSorted = orderAscending(allDrinks);
      setItemsState();
    }

    if (selectOption === "desc") {
      pizzasSorted = orderDescending(allPizzas);
      dessertsSorted = orderDescending(allDesserts);
      drinksSorted = orderDescending(allDrinks);
      setItemsState();
    }

    if (selectOption === "low") {
      pizzasSorted = orderFromLowToHigh(allPizzas);
      dessertsSorted = orderFromLowToHigh(allDesserts);
      drinksSorted = orderFromLowToHigh(allDrinks);
      setItemsState();
    }

    if (selectOption === "high") {
      pizzasSorted = orderFromHighToLow(allPizzas);
      dessertsSorted = orderFromHighToLow(allDesserts);
      drinksSorted = orderFromHighToLow(allDrinks);
      setItemsState();
    }
  }

  function handleSearch(e) {
    let inputValue = "";
    if (e.target) inputValue = e.target.value;
    else inputValue = e;
    setSearchState(inputValue);

    if (inputValue.length === 0) {
      setPizzas([...allPizzas]);
      setDesserts([...allDesserts]);
      setDrinks([...allDrinks]);
    } else searchItems(inputValue);
  }

  function handleSort(e) {
    let sortingOption = "";
    if (e.target) sortingOption = e.target.value;
    else sortingOption = e;
    orderBy(sortingOption);
    handleSearch(searchState);
  }

  useEffect(() => {
    if (itemsFetched === false) getItems();
    if (itemsFetched === true) handleSearch(searchState);
    setItemsFetched(true);

    return () => {
      setSearchState("");
    };
  }, [searchState]);

  return (
    <main className="bg-gradient-to-b from-red-darker to-red-dark pb-16 tablet:pb-20 laptop:pb-24 desktop:pb-28">
      <Search
        value={searchState}
        stylesOut="tablet:hidden"
        onChange={handleSearch}
      />
      <Sorting onChange={handleSort} />
      <MenuSection
        className={pizzas.length === 0 ? "hidden" : ""}
        id="pizza-section"
        header="Pizza"
      >
        {pizzas.map(
          (pizza) => pizza && <Item itemData={pizza} key={pizza._id} />
        )}
      </MenuSection>
      <MenuSection
        className={desserts.length === 0 ? "hidden" : ""}
        id="desserts-section"
        header="Desserts"
      >
        {desserts.map(
          (dessert) =>
            dessert && (
              <Item simplified={true} itemData={dessert} key={dessert._id} />
            )
        )}
      </MenuSection>
      <MenuSection
        className={drinks.length === 0 ? "hidden" : ""}
        id="drinks-section"
        header="Drinks"
      >
        {drinks.map(
          (drink) =>
            drink && <Item simplified={true} itemData={drink} key={drink._id} />
        )}
      </MenuSection>
    </main>
  );
}

export default Menu;
