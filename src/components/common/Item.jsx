import React, { useState, useEffect } from "react";
import { Decrement, Add, CartAdd } from "./Icons";
import { showTwoDecimals } from "../../utils/showTwoDecimals";
import PropTypes from "prop-types";

function Item({ itemData, simplified, ...props }) {
  const { name, ingredients, sizes: itemSizes, price, photos } = itemData;
  const sizes = !itemSizes ? [] : itemSizes;

  const itHasPhotoExtension =
    photos.oldRetina.match(/\.[0-9a-z]+$/i) ||
    photos.web.match(/\.[0-9a-z]+$/i);
  const extension = itHasPhotoExtension
    ? itHasPhotoExtension[0].slice(1)
    : null;
  if (!extension)
    throw new Error(
      `${photos.oldRetina} or ${photos.web} does not have an extension!`
    );

  const unit = "″";
  const currency = "$";
  const fontStyle = "font-bold text-sm tablet-small:text-base";
  const enabledStyle =
    "transition-colors hover:text-slate-600 active:text-slate-500 cursor-pointer";
  const disabledStyle = "text-slate-400";

  const [itemsCount, setItemsCount] = useState(1);
  const [current, setCurrent] = useState(0);
  const [unitFontSize, setUnitFontSize] = useState("");
  const [sizeMinusStyle, setSizeMinusStyle] = useState(disabledStyle);
  const [quantityMinusStyle, setQuantityMinusStyle] = useState(disabledStyle);
  const [sizePlusStyle, setSizePlusStyle] = useState(
    sizes.length > 1 ? enabledStyle : disabledStyle
  );
  const [quantityPlusStyle, setQuantityPlusStyle] = useState(enabledStyle);

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
      className="flex w-full max-w-screen-tablet-small flex-col rounded-xl 
      border-4 border-solid border-y-slate-800 border-x-slate-700 bg-slate-200 p-6 text-slate-800 tablet-small:border-[5px] tablet-small:p-10 tablet:h-full tablet:max-w-sm
       tablet:border-4 tablet:p-6 laptop:max-w-3xl laptop:flex-row laptop:items-center laptop:justify-center laptop:space-x-8"
    >
      <section
        className="mb-6 flex flex-row items-center justify-center
       drop-shadow laptop:mb-0 laptop:w-1/2"
      >
        <picture className="aspect-w-1 aspect-h-1 w-full">
          <source
            type="image/webp"
            srcSet={`src/css/images/${photos.web} 1x, src/css/images/${
              photos.webRetina ? photos.webRetina : photos.web
            } 2x`}
          />
          <source
            type={`image/${extension}`}
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
            className="object-cover"
            alt={`${name} pizza photo`}
          />
        </picture>
      </section>
      <section className="laptop:w-1/2 desktop:flex desktop:h-full desktop:flex-col desktop:justify-between">
        <article>
          <h4
            className="mb-4 overflow-hidden overflow-ellipsis text-center font-ui text-4xl font-bold tablet-small:mb-8
           tablet-small:text-5xl tablet:mb-4 tablet:text-4xl laptop:mb-3"
          >
            {name}
          </h4>
          <p
            className={`mb-4 overflow-hidden overflow-ellipsis text-left font-text text-lg font-normal line-clamp-2
             tablet-small:mb-8 tablet-small:text-xl tablet:mb-4 tablet:text-lg laptop:text-xl ${
               !simplified ? "desktop-big:line-clamp-3" : ""
             }`}
          >
            {ingredients.toLowerCase()}
          </p>
        </article>
        <article>
          <div
            className={`flex w-full flex-row ${
              !simplified ? "justify-between" : "justify-center"
            } mb-6 items-center tablet-small:mb-8 tablet:mb-6 laptop:mb-6`}
          >
            <div className={`${!simplified ? "" : "hidden"}`}>
              <p className="text-center font-text text-lg font-bold tablet-small:text-2xl tablet:text-lg">
                Size:
              </p>
              <div className="flex flex-row items-center justify-center">
                <Decrement
                  onClick={getPrevSize}
                  className={`w-6 select-none fill-current tablet-small:w-7 tablet:w-6 ${sizeMinusStyle}`}
                />
                <p className="w-12 text-center font-ui text-2xl font-semibold tablet-small:w-16 tablet-small:text-3xl tablet:w-12 tablet:text-2xl">
                  {sizes[current]}
                  <span className={unitFontSize}>{unit}</span>
                </p>
                <Add
                  onClick={getNextSize}
                  className={`w-6 select-none fill-current tablet-small:w-7 tablet:w-6 ${sizePlusStyle}`}
                />
              </div>
            </div>
            <div>
              <p className="text-center font-text text-lg font-bold tablet-small:text-2xl tablet:text-lg">
                Quantity:
              </p>
              <div className="flex flex-row items-center justify-center">
                <Decrement
                  onClick={decrementQuantity}
                  className={`w-6 select-none fill-current tablet-small:w-7 tablet:w-6 ${quantityMinusStyle}`}
                />
                <input
                  value={itemsCount}
                  type="number"
                  onChange={(e) => handleChange(e)}
                  className="w-12 bg-transparent text-center font-ui text-2xl font-semibold outline-none tablet-small:w-16
                 tablet-small:text-3xl tablet:w-12 tablet:text-2xl"
                />
                <Add
                  onClick={incrementQuantity}
                  className={`w-6 select-none fill-current tablet-small:w-7 tablet:w-6 ${quantityPlusStyle}`}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <p className="mb-2 text-center font-text text-3xl font-semibold tablet-small:mb-4 tablet-small:text-5xl tablet:mb-2 tablet:text-3xl laptop:text-4xl">
              {currency}
              {showTwoDecimals(price[current] * itemsCount)}
            </p>
            <button
              type="button"
              className="flex flex-row items-center justify-center space-x-2 rounded-xl bg-slate-700 py-2 px-3 font-ui
             text-xl font-medium text-slate-100 transition-colors hover:bg-amber-600 active:bg-amber-700 tablet-small:rounded-2xl tablet-small:px-5
              tablet-small:py-3 tablet-small:text-2xl tablet:rounded-xl tablet:px-3 tablet:py-2 tablet:text-xl"
            >
              <CartAdd className="w-6 fill-current" />
              <span>Add to cart</span>
            </button>
          </div>
        </article>
      </section>
    </article>
  );
}

Item.defaultProps = {
  simplified: false,
};

Item.propTypes = {
  itemData: PropTypes.object.isRequired,
  simplified: PropTypes.bool,
};

export default Item;
