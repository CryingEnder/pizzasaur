import React, { useState, useEffect, useContext } from "react";
import Item from "./common/Item";
import MenuSection from "./MenuSection";
import Search from "./Search";
import Sorting from "./Sorting";
import pizzaArray from "./../services/fakePizzaService";
import dessertsArray from "./../services/fakeDessertsService";
import drinksArray from "./../services/fakeDrinksService";
import { SearchContext } from "./context/SearchContext";
import { SortingContext } from "./context/SortingContext";

function Menu(props) {
  const [pizzas, setPizzas] = useState([]);
  const [allPizzas, setAllPizzas] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [allDesserts, setAllDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [allDrinks, setAllDrinks] = useState([]);

  const [itemsFetched, setItemsFetched] = useState(false);
  const { searchState, setSearchState } = useContext(SearchContext);
  const { sortingState, setSortingState } = useContext(SortingContext);

  function getItems() {
    setPizzas([...pizzaArray]);
    setDesserts([...dessertsArray]);
    setDrinks([...drinksArray]);
    setAllPizzas([...pizzaArray]);
    setAllDesserts([...dessertsArray]);
    setAllDrinks([...drinksArray]);
  }

  function noItemsFound() {
    if (
      itemsFetched === true &&
      pizzas.length === 0 &&
      desserts.length === 0 &&
      drinks.length === 0
    )
      return true;
    return false;
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

    if (selectOption === "") {
      getItems();
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

  function scrollUp() {
    window.scrollTo(0, 0);
  }

  function handleSearch(e) {
    let inputValue = "";
    if (e.target) inputValue = e.target.value;
    else inputValue = e;
    setSearchState(inputValue);

    scrollUp();

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
    setSortingState(sortingOption);
    orderBy(sortingOption);
    handleSearch(searchState);
  }

  useEffect(() => {
    if (itemsFetched === false) getItems();
    if (itemsFetched === true) {
      handleSearch(searchState);
      handleSort(sortingState);
    }
    setItemsFetched(true);

    return () => {
      setSearchState("");
      setSortingState("");
      setItemsFetched(false);
    };
  }, [searchState, sortingState]);

  return (
    <main className="min-h-screen pb-4 tablet:pb-8 laptop:pb-12 desktop:pb-16 desktop-big:pb-20">
      <div className="relative mb-20 mt-8 flex w-full flex-col items-center justify-start tablet:m-0 tablet:mb-10">
        <Search
          value={searchState}
          styles="tablet:hidden mb-4"
          onChange={handleSearch}
        />
        <Sorting styles="tablet:hidden top-16 absolute" onChange={handleSort} />
      </div>
      {noItemsFound() ? (
        <div className="mt-20 w-full px-4 text-center font-ui text-2xl font-medium text-slate-800 tablet:text-3xl laptop:text-4xl desktop:text-5xl">
          No items that match "{searchState}" could be found.
        </div>
      ) : (
        ""
      )}
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
