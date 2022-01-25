import React, { useState, useEffect } from "react";
import List from "./common/List";
import PropTypes from "prop-types";
import { Pizza, Dessert, Drink } from "./common/Icons";

function MenuList({ styles, disabledCurrentLinks, ...props }) {
  const [navbarHeight, setNavbarHeight] = useState(window.scrollY);

  function setHeight() {
    const navHeight = document.querySelector("#nav-bar").offsetHeight;
    setNavbarHeight(navHeight);
  }

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

    let currentScroll = window.scrollY;

    for (let position of scrollPositions) {
      if (position) {
        // const navHeight = document.querySelector("#nav-bar").offsetHeight;
        if (
          position.offsetTop <= currentScroll &&
          position.offsetTop + position.offsetHeight > currentScroll
        )
          links[scrollPositions.indexOf(position)].classList.add(
            "text-yellow-400"
          );
        else
          links[scrollPositions.indexOf(position)].classList.remove(
            "text-yellow-400"
          );
      }
    }
  }

  function handleScroll() {
    showCurrentLink();
  }

  useEffect(() => {
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
  }, [navbarHeight]);

  return (
    <List
      {...props}
      className={styles}
      itemsStyle={`transition-colors cursor-pointer ${
        disabledCurrentLinks && "hover:text-zinc-300"
      }`}
      items={[
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
      ]}
    />
  );
}

MenuList.defaultProps = {
  styles: "",
  disabledCurrentLinks: false,
};

MenuList.propTypes = {
  styles: PropTypes.string,
  disabledCurrentLinks: PropTypes.bool,
};

export default MenuList;
