import React, { useState, useEffect } from "react";
import List from "./common/List";
import PropTypes from "prop-types";
import { Pizza, Dessert, Drink, ArrowLeft, ArrowRight } from "./common/Icons";

function MenuList({ listStyle, itemsStyle, disabledCurrentLinks, ...props }) {
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
    {
      content: (
        <div className="flex flex-row items-center justify-center">
          <Drink className="inline mr-1 fill-current w-7 desktop:w-9" />
          <span>Test1</span>
        </div>
      ),
      key: "test1-link",
      link: "#test1-section",
    },
    {
      content: (
        <div className="flex flex-row items-center justify-center">
          <Drink className="inline mr-1 fill-current w-7 desktop:w-9" />
          <span>Test2</span>
        </div>
      ),
      key: "test2-link",
      link: "#test2-section",
    },
    {
      content: (
        <div className="flex flex-row items-center justify-center">
          <Drink className="inline mr-1 fill-current w-7 desktop:w-9" />
          <span>Test3</span>
        </div>
      ),
      key: "test3-link",
      link: "#test3-section",
    },
    {
      content: (
        <div className="flex flex-row items-center justify-center">
          <Drink className="inline mr-1 fill-current w-7 desktop:w-9" />
          <span>Test4</span>
        </div>
      ),
      key: "test4-link",
      link: "#test4-section",
    },
    {
      content: (
        <div className="flex flex-row items-center justify-center">
          <Drink className="inline mr-1 fill-current w-7 desktop:w-9" />
          <span>Test5</span>
        </div>
      ),
      key: "test5-link",
      link: "#test5-section",
    },
  ];

  const disabled = "text-zinc-500 cursor-default";
  const enabled = "hover:text-zinc-300 cursor-pointer";
  const maximumShownCategories = 6;
  const tooManyCategories = categories.length > maximumShownCategories;
  const [navbarHeight, setNavbarHeight] = useState(window.scrollY);
  const [shownCategories, setShownCategories] = useState(categories);
  const [startIndex, setStartindex] = useState(0);
  const [endIndex, setEndIndex] = useState(maximumShownCategories);
  const [leftArrowStyle, setLeftArrowStyle] = useState(disabled);
  const [rightArrowStyle, setRightArrowStyle] = useState(enabled);

  function showCurrentLink() {
    const scrollPositions = [
      document.querySelector("#pizza-section"),
      document.querySelector("#desserts-section"),
      document.querySelector("#drinks-section"),
    ];

    const links = [
      document.querySelector("#pizza-link"),
      document.querySelector("#desserts-link"),
      document.querySelector("#drinks-link"),
    ];

    // function showLink(activeLink) {
    //   for (let category of shownCategories)
    //     if (category.key === activeLink.id) return;

    //   setStartindex(0);
    //   setEndIndex(maximumShownCategories);
    //   while (true) {
    //     handleRight();
    //     for (let category of shownCategories)
    //       if (category.key === activeLink.id) return;
    //   }
    // }

    let currentScroll = window.scrollY;

    for (let position of scrollPositions)
      if (position)
        if (
          position.offsetTop <= currentScroll &&
          position.offsetTop + position.offsetHeight > currentScroll
        ) {
          links[scrollPositions.indexOf(position)].classList.add(
            "text-yellow-400"
          );
          // showLink(links[scrollPositions.indexOf(position)]);
        } else
          links[scrollPositions.indexOf(position)].classList.remove(
            "text-yellow-400"
          );
  }

  function setArrowStyles(startIndex, endIndex) {
    if (startIndex === 0) setLeftArrowStyle(disabled);
    else setLeftArrowStyle(enabled);

    if (endIndex === categories.length) setRightArrowStyle(disabled);
    else setRightArrowStyle(enabled);
  }

  function arrangeCategories(startIndex, endIndex) {
    setShownCategories(categories.slice(startIndex, endIndex));
  }

  function handleLeft() {
    if (startIndex - 1 >= 0) {
      setStartindex(startIndex - 1);
      setEndIndex(endIndex - 1);
      arrangeCategories(startIndex - 1, endIndex - 1);
      setArrowStyles(startIndex - 1, endIndex - 1);
    }
  }

  function handleRight() {
    if (endIndex + 1 <= categories.length) {
      setStartindex(startIndex + 1);
      setEndIndex(endIndex + 1);
      arrangeCategories(startIndex + 1, endIndex + 1);
      setArrowStyles(startIndex + 1, endIndex + 1);
    }
  }

  function setHeight() {
    const navHeight = document.querySelector("#nav-bar").offsetHeight;
    setNavbarHeight(navHeight);
  }

  function handleScroll() {
    showCurrentLink();
  }

  useEffect(() => {
    if (shownCategories.length > maximumShownCategories)
      arrangeCategories(startIndex, endIndex);

    if (disabledCurrentLinks === false) {
      setHeight();

      window.addEventListener("resize", setHeight);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (disabledCurrentLinks === false) {
        window.removeEventListener("resize", setHeight);
        window.removeEventListener("scroll", handleScroll);
        setNavbarHeight(0);
      }
    };
  }, [navbarHeight, shownCategories]);

  return (
    <div className="flex flex-row justify-center items-center">
      {tooManyCategories && (
        <ArrowLeft
          onClick={handleLeft}
          className={`hidden transition-colors laptop:block w-12 desktop:w-14 fill-current select-none ${leftArrowStyle}`}
        />
      )}
      <List
        {...props}
        className={`${listStyle}`}
        itemsStyle={`transition-colors cursor-pointer ${itemsStyle} ${
          disabledCurrentLinks && "hover:text-zinc-300"
        }`}
        items={shownCategories}
      />
      {tooManyCategories && (
        <ArrowRight
          onClick={handleRight}
          className={`hidden transition-colors w-12 laptop:block desktop:w-14 fill-current select-none ${rightArrowStyle}`}
        />
      )}
    </div>
  );
}

MenuList.defaultProps = {
  listStyle: "",
  itemsStyle: "",
  disabledCurrentLinks: false,
};

MenuList.propTypes = {
  listStyle: PropTypes.string,
  itemsStyle: PropTypes.string,
  disabledCurrentLinks: PropTypes.bool,
};

export default MenuList;
