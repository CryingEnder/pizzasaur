import React, { useEffect, useState, Fragment } from "react";
import Container from "./common/Container";
import Heading from "./common/Heading";
import { DividerTop, DividerBottom } from "./common/Icons";
import pizzaArray from "./../services/fakePizzaService";

function HomeMenu(props) {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaSizes, setPizzaSizes] = useState([]);
  const unit = "″";
  const currency = "$";

  function getPizzaSizes(array) {
    function sortAsc(arr) {
      return arr.sort(function (a, b) {
        return a - b;
      });
    }

    let sizes = [];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
      for (let size of array[index].sizes) {
        if (sizes.indexOf(size) === -1) sizes[index++] = size;
      }
    }

    return sortAsc(sizes);
  }

  useEffect(() => {
    setPizzas(pizzaArray);
    setPizzaSizes(getPizzaSizes(pizzaArray));
  }, []);

  return (
    <main className="z-10 w-full text-slate-800">
      <Heading styles="mb-2 laptop:mb-0" content="Menu" />
      <Container
        tag="section"
        stylesOut={
          "pt-12 pb-16 tablet:pt-14 tablet:pb-20 laptop:pt-20 laptop:pb-24 desktop:pt-24 desktop:pb-28"
        }
        stylesIn={"flex flex-col"}
      >
        <DividerTop className="mx-2 mb-8 hidden fill-current text-slate-800 laptop:mb-10 laptop:block" />
        <header className="mb-6 flex w-full flex-row px-3 font-text text-xl font-medium italic text-amber-600 tablet:text-2xl laptop:mb-8 laptop:px-2 desktop:text-3xl">
          <div className="flex w-full flex-row items-start justify-center laptop:mr-4 laptop:w-1/2">
            <div className="w-1/2"></div>
            {pizzaSizes.map(
              (size) =>
                size && (
                  <div
                    className="w-1/6 text-center laptop:w-[14%]"
                    key={size + "c1"}
                  >
                    {
                      <div>
                        {size}
                        <span
                          className={
                            unit !== "″"
                              ? "text-sm font-bold tablet:text-base"
                              : ""
                          }
                        >
                          {unit}
                        </span>
                      </div>
                    }
                  </div>
                )
            )}
          </div>
          <div className="hidden w-1/2 flex-row items-start justify-center laptop:flex">
            <div className="w-1/2"></div>
            {pizzaSizes.map(
              (size) =>
                size && (
                  <div
                    className="w-1/6 text-center laptop:w-[14%]"
                    key={size + "c2"}
                  >
                    <div>
                      {size}
                      <span
                        className={
                          unit !== "″"
                            ? "text-sm font-bold tablet:text-base"
                            : ""
                        }
                      >
                        {unit}
                      </span>
                    </div>
                  </div>
                )
            )}
          </div>
        </header>
        <section className="grid w-full grid-cols-1 gap-y-7 px-3 pb-4 tablet:gap-y-8 laptop:grid-cols-2 laptop:gap-x-4 laptop:gap-y-9 laptop:px-4">
          {pizzas.map(
            (pizza) =>
              pizza && (
                <div
                  key={pizza._id + "_home"}
                  className="flex w-full flex-row items-start justify-center"
                >
                  <div className="flex w-1/2 flex-col space-y-1 tablet:space-y-2">
                    <div className="font-ui text-xl font-bold tablet:text-2xl laptop:text-3xl laptop:font-semibold">
                      {pizza.name}
                    </div>
                    <div className="font-text text-lg tablet:text-xl">
                      {pizza.ingredients}
                    </div>
                  </div>
                  {pizzaSizes.map((size) =>
                    pizza.sizes.indexOf(size) > -1 ? (
                      <div
                        key={
                          pizza._id +
                          "_home_" +
                          pizza.price[pizza.sizes.indexOf(size)]
                        }
                        className="w-1/6 text-center font-ui text-lg font-medium text-slate-700 tablet:text-xl laptop:w-[14%] desktop:text-2xl"
                      >
                        {currency + pizza.price[pizza.sizes.indexOf(size)]}
                      </div>
                    ) : (
                      <div
                        key={pizza._id + "_empty_space_" + Math.random()}
                        className="w-1/6 text-center font-ui text-lg font-medium text-slate-700 tablet:text-xl laptop:w-[14%] desktop:text-2xl"
                      >
                        --
                      </div>
                    )
                  )}
                </div>
              )
          )}
        </section>
        <DividerBottom className="mx-2 mt-8 hidden fill-current text-slate-800 laptop:mt-10 laptop:block" />
      </Container>
    </main>
  );
}

export default HomeMenu;
