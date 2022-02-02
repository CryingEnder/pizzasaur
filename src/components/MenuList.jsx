import React, { useState, useEffect } from "react";
import List from "./common/List";
import PropTypes from "prop-types";
import { Pizza, Dessert, Drink, ArrowLeft, ArrowRight } from "./common/Icons";

function MenuList({ listStyle, itemsStyle, disabledSlider, ...props }) {
  const categories = [
    {
      content: (
        <div className="flex flex-row items-center justify-center">
          <Pizza className="inline mr-1 fill-current w-7 desktop:w-9" />
          <span>Pizza</span>
        </div>
      ),
      key: "pizza-link",
      link: "#pizza-section",
    },
    {
      content: (
        <div className="flex flex-row items-center justify-center">
          <Dessert className="inline mr-1 fill-current w-7 desktop:w-9" />
          <span>Desserts</span>
        </div>
      ),
      key: "desserts-link",
      link: "#desserts-section",
    },
    {
      content: (
        <div className="flex flex-row items-center justify-center">
          <Drink className="inline mr-1 fill-current w-7 desktop:w-9" />
          <span>Drinks</span>
        </div>
      ),
      key: "drinks-link",
      link: "#drinks-section",
    },
  ];

  const maximumShownCategories = 6; //If this value is changed, the four values below must also be changed
  const eachCategoryWidthLaptop = "laptop:w-36"; //w-36 = 9rem
  const maxShownCategoriesContainerWidthLaptop = "laptop:max-w-[54rem]";
  const eachCategoryWidthDesktop = "desktop:w-44"; //w-44 = 11rem
  const maxShownCategoriesContainerWidthDesktop = "desktop:max-w-[66rem]";
  // maxShownCategoriesContainerWidth = maximumShownCategories * eachCategoryWidth (in rem)

  const disabled = "text-zinc-500 cursor-default";
  const enabled =
    "hover:text-zinc-300 cursor-pointer hover:scale-110 active:scale-100";
  const tooManyCategories = categories.length > maximumShownCategories;
  const maxIndex = categories.length - maximumShownCategories;
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [navbarHeight, setNavbarHeight] = useState(window.scrollY);
  const [leftArrowStyle, setLeftArrowStyle] = useState(disabled);
  const [rightArrowStyle, setRightArrowStyle] = useState(enabled);

  function showCurrentLink() {
    let links = [];
    let linksIndex = 0;
    for (let category of categories)
      links[linksIndex++] = document.querySelector(category.link);

    let keys = [];
    let keysIndex = 0;
    for (let category of categories)
      keys[keysIndex++] = document.querySelector(`.${category.key}`);

    let currentScroll = window.scrollY;

    function slide(categoryIndex) {
      if (currentIndex >= categoryIndex) arrangeCategories(categoryIndex);
      else if (categoryIndex >= maximumShownCategories + currentIndex)
        arrangeCategories(currentIndex + 1);
    }

    for (let position of links)
      if (position) {
        const category = keys[links.indexOf(position)];
        if (
          position.offsetTop <= currentScroll &&
          position.offsetTop + position.offsetHeight > currentScroll
        ) {
          category.classList.add("text-yellow-400");
          slide(keys.indexOf(category));
        } else category.classList.remove("text-yellow-400");
      }
  }

  function setHeight() {
    const navHeight = document.querySelector(".nav-bar").offsetHeight;
    setNavbarHeight(navHeight);
  }

  function arrangeCategories(index = currentIndex) {
    const oneRemInPx = 16;
    const categoryWidth = document.querySelector(
      `.${categories[0].key}`
    ).clientWidth;
    const categoryWidthInRem = categoryWidth / oneRemInPx;
    document.querySelector(".categories").style.left = `-${
      categoryWidthInRem * index
    }rem`;

    setCurrentIndex(index);
  }

  function setArrowStyles() {
    if (currentIndex === 0) setLeftArrowStyle(disabled);
    else setLeftArrowStyle(enabled);

    if (currentIndex === maxIndex) setRightArrowStyle(disabled);
    else setRightArrowStyle(enabled);
  }

  function handleLeft() {
    if (currentIndex > 0) arrangeCategories(currentIndex - 1);
  }

  function handleRight() {
    if (currentIndex < maxIndex) arrangeCategories(currentIndex + 1);
  }

  function handleResize() {
    setHeight();
    arrangeCategories();
  }

  function handleScroll() {
    showCurrentLink();
  }

  useEffect(() => {
    if (!disabledSlider) {
      if (currentIndex < 0) arrangeCategories(currentIndex + 1);
      setHeight();
      setArrowStyles();

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (!disabledSlider) {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
        setNavbarHeight(0);
      }
    };
  }, [navbarHeight, currentIndex]);

  return (
    <section className="flex flex-row justify-center items-center w-full">
      {tooManyCategories && (
        <ArrowLeft
          onClick={handleLeft}
          className={`hidden transition-all laptop:block w-12 desktop:w-14 fill-current select-none ${leftArrowStyle}`}
        />
      )}
      <div
        className={`flex overflow-hidden w-full laptop:w-auto ${maxShownCategoriesContainerWidthLaptop} ${maxShownCategoriesContainerWidthDesktop}`}
      >
        <List
          {...props}
          useClassIdentifiers={!disabledSlider}
          className={`${listStyle} transition-all relative`}
          itemsStyle={`${eachCategoryWidthLaptop} ${eachCategoryWidthDesktop} ${itemsStyle}`}
          linksStyle={
            disabledSlider
              ? "hover:text-zinc-300 transition-colors cursor-pointer"
              : ""
          }
          items={categories}
        />
      </div>
      {tooManyCategories && (
        <ArrowRight
          onClick={handleRight}
          className={`hidden transition-all laptop:block w-12 desktop:w-14 fill-current select-none ${rightArrowStyle}`}
        />
      )}
    </section>
  );
}

MenuList.defaultProps = {
  listStyle: "",
  itemsStyle: "",
  disabledSlider: false,
};

MenuList.propTypes = {
  listStyle: PropTypes.string,
  itemsStyle: PropTypes.string,
  disabledSlider: PropTypes.bool,
};

export default MenuList;
