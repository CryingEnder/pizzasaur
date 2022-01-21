import React, { useState, useEffect, useRef } from "react";
import Container from "./common/Container";
import List from "./common/List";

function MenuList({ ...props }) {
  const ref = useRef(null);
  const onePixelInRem = 0.0625;
  const [navbarHeight, setNavbarHeight] = useState(window.scrollY);

  function setTopOfMenuList() {
    const navHeight = document.querySelector("#nav-bar").offsetHeight;

    if (ref.current)
      ref.current.style.top = `${navbarHeight * onePixelInRem}rem`;
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
    let linkIndex = 0;

    let currentScroll = window.scrollY;

    for (let position of scrollPositions) {
      if (position)
        if (
          position.offsetTop <= currentScroll &&
          position.offsetTop + position.offsetHeight > currentScroll
        )
          links[linkIndex++].classList.add("text-yellow-400");
        else links[linkIndex++].classList.remove("text-yellow-400");
    }
  }

  function handleScroll() {
    showCurrentLink();
  }

  useEffect(() => {
    setTopOfMenuList();

    window.addEventListener("resize", setTopOfMenuList);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", setTopOfMenuList);
      window.removeEventListener("scroll", handleScroll);
      setNavbarHeight(0);
    };
  }, [navbarHeight]);

  return (
    <nav ref={ref} className={`sticky z-20 w-full overflow-hidden`}>
      <Container
        tag="div"
        stylesOut={`bg-red-darker border-solid max-h-[50rem] border-b-4 border-zinc-100`}
      >
        <List
          className="flex flex-row justify-center items-center space-x-5 p-2 text-zinc-100"
          itemsStyle="transition-colors cursor-pointer"
          items={[
            {
              content: "Pizza",
              key: "pizza-link",
              link: "#pizza-section",
            },
            {
              content: "Desserts",
              key: "desserts-link",
              link: "#desserts-section",
            },
            {
              content: "Drinks",
              key: "drinks-link",
              link: "#drinks-section",
            },
          ]}
        />
      </Container>
    </nav>
  );
}

export default MenuList;
