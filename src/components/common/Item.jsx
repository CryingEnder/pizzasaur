import React, { useState, useEffect } from "react";
import { Decrement, Add, CartAdd } from "./Icons";
import { showTwoDecimals } from "../../utils/showTwoDecimals";
import PropTypes from "prop-types";

function Item({ itemData, ...props }) {
  const { name, ingredients, sizes, prices, photos } = itemData;

  const unit = "″";
  const currency = "$";
  const fontStyle = "font-bold text-sm tablet-small:text-base";
  const enabledStyle =
    "transition-colors hover:text-zinc-300 active:text-zinc-200 cursor-pointer";
  const disabledStyle = "text-zinc-600";

  const [itemsCount, setItemsCount] = useState(1);
  const [current, setCurrent] = useState(0);
  const [unitFontSize, setUnitFontSize] = useState("");
  const [sizeMinusStyle, setSizeMinusStyle] = useState(disabledStyle);
  const [quantityMinusStyle, setQuantityMinusStyle] = useState(disabledStyle);
  const [sizePlusStyle, setSizePlusStyle] = useState(
    sizes.length > 1 ? enabledStyle : disabledStyle
  );
  const [quantityPlusStyle, setQuantityPlusStyle] = useState(enabledStyle);

  //TODO: to add Joi

  function setButtonStyles() {
    if (unit === "″") setUnitFontSize("");
    else setUnitFontSize(fontStyle);

    if (itemsCount <= 1) setQuantityMinusStyle(disabledStyle);
    else setQuantityMinusStyle(enabledStyle);

    if (current >= sizes.length - 1) setSizePlusStyle(disabledStyle);
    else setSizePlusStyle(enabledStyle);

    if (current <= 0) setSizeMinusStyle(disabledStyle);
    else setSizeMinusStyle(enabledStyle);
  }

  function handleChange(e) {
    let inputValue =
      typeof e.target.value === "number"
        ? Math.round(Math.abs(e.target.value))
        : e.target.value;
    if (inputValue > 999) setItemsCount(itemsCount);
    else if (inputValue === "" || inputValue >= 1) setItemsCount(inputValue);
    else setItemsCount(1);
  }

  function getPrevSize() {
    if (current > 0) setCurrent(current - 1);
  }

  function getNextSize() {
    if (current < sizes.length - 1) setCurrent(current + 1);
  }

  function decrementQuantity() {
    if (itemsCount > 1) setItemsCount(itemsCount - 1);
  }

  function incrementQuantity() {
    setItemsCount(itemsCount + 1);
  }

  useEffect(() => {
    setButtonStyles();
  }, [unit, itemsCount, current]);

  return (
    <article
      {...props}
      className="flex flex-col laptop:flex-row laptop:justify-center laptop:items-center 
      text-zinc-800 bg-gradient-to-t from-gray-more-redish to-gray-redish border-solid border-8
      border-y-red-less-dark-2 border-x-red-less-dark rounded-xl max-w-screen-tablet-small p-6 tablet-small:p-10
       tablet-small:border-[12px] tablet:border-8 tablet:p-6 tablet:max-w-sm tablet:h-full laptop:w-full laptop:max-w-3xl laptop:space-x-8"
    >
      <section
        className="flex flex-row justify-center items-center drop-shadow-lg
       mb-4 tablet-small:mb-6 tablet:mb-4 laptop:w-1/2 laptop:mb-0"
      >
        <picture>
          <source
            type="image/webp"
            srcSet={`src/css/images/${photos.web} 1x, src/css/images/${
              photos.webRetina ? photos.webRetina : photos.web
            } 2x`}
          />
          <source
            type="image/jpg"
            srcSet={`src/css/images/${
              photos.old ? photos.old : photos.web
            } 1x, src/css/images/${
              photos.oldRetina ? photos.oldRetina : photos.web
            } 2x`}
          />
          <img
            src={`src/css/images/${
              photos.oldRetina ? photos.oldRetina : photos.web
            }`}
            className="w-full object-cover aspect-square"
            alt={`${name} pizza photo`}
          />
        </picture>
      </section>
      <section className="laptop:w-1/2 desktop:flex desktop:flex-col desktop:justify-between desktop:h-full">
        <article>
          <h4 className="text-center font-text font-bold mb-4 text-4xl tablet-small:mb-8 tablet-small:text-5xl tablet:mb-4 tablet:text-4xl laptop:mb-3 laptop:overflow-hidden laptop:overflow-ellipsis">
            {name}
          </h4>
          <p className="text-left line-clamp-2 font-text font-normal mb-4 text-lg tablet-small:mb-8 tablet-small:text-xl tablet:mb-4 tablet:text-lg laptop:text-xl laptop:overflow-hidden laptop:overflow-ellipsis desktop-big:line-clamp-3">
            {ingredients.toLowerCase()}
          </p>
        </article>
        <article>
          <div className="w-full flex flex-row justify-between items-center mb-6 tablet-small:mb-8 tablet:mb-6 laptop:mb-6">
            <div>
              <p className="text-center font-text font-bold text-lg tablet-small:text-2xl tablet:text-lg">
                Size:
              </p>
              <div className="flex flex-row justify-center items-center">
                <Decrement
                  onClick={getPrevSize}
                  className={`fill-current select-none w-6 tablet-small:w-7 tablet:w-6 ${sizeMinusStyle}`}
                />
                <p className="text-center font-ui font-semibold text-2xl w-12 tablet-small:text-3xl tablet-small:w-16 tablet:text-2xl tablet:w-12">
                  {sizes[current]}
                  <span className={unitFontSize}>{unit}</span>
                </p>
                <Add
                  onClick={getNextSize}
                  className={`fill-current select-none w-6 tablet-small:w-7 tablet:w-6 ${sizePlusStyle}`}
                />
              </div>
            </div>
            <div>
              <p className="text-center font-text font-bold text-lg tablet-small:text-2xl tablet:text-lg">
                Quantity:
              </p>
              <div className="flex flex-row justify-center items-center">
                <Decrement
                  onClick={decrementQuantity}
                  className={`fill-current select-none w-6 tablet-small:w-7 tablet:w-6 ${quantityMinusStyle}`}
                />
                <input
                  value={itemsCount}
                  type="number"
                  onChange={(e) => handleChange(e)}
                  className="text-center font-ui font-semibold bg-transparent outline-none text-2xl w-12 tablet-small:text-3xl
                 tablet-small:w-16 tablet:text-2xl tablet:w-12"
                />
                <Add
                  onClick={incrementQuantity}
                  className={`fill-current select-none w-6 tablet-small:w-7 tablet:w-6 ${quantityPlusStyle}`}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-center font-text font-semibold mb-2 text-3xl tablet-small:mb-4 tablet-small:text-5xl tablet:mb-2 tablet:text-3xl laptop:text-4xl">
              {currency}
              {showTwoDecimals(prices[current] * itemsCount)}
            </p>
            <button
              type="button"
              className="flex flex-row justify-center items-center space-x-2 font-medium font-ui rounded-xl bg-red-darker transition-colors
             hover:bg-red-darkest text-zinc-100 text-xl py-2 px-3 tablet-small:px-5 tablet-small:py-3
              tablet-small:rounded-2xl tablet-small:text-2xl tablet:px-3 tablet:py-2 tablet:rounded-xl tablet:text-xl"
            >
              <CartAdd className="fill-current w-6" />
              <span>Add to cart</span>
            </button>
          </div>
        </article>
      </section>
    </article>
  );
}

Item.propTypes = {
  itemData: PropTypes.object.isRequired,
};

export default Item;
