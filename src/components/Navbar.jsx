import React, { useState, useEffect, useRef, Fragment } from "react";
import Container from "./common/Container";
import List from "./common/List";
import Logo from "./common/Logo";
import { CartIcon, Cross, MenuButton } from "./common/Icons";

function Navbar(props) {
  const ref = useRef(null);
  const visible = "visible opacity-100 animate-opacity-slow";
  const notVisible = "hidden opacity-0";
  const [visibility, setVisibility] = useState(notVisible);

  function showMenu() {
    setVisibility(visible);
  }

  function closeMenu() {
    setVisibility(notVisible);
  }

  function handleClickOutside(e) {
    if (ref.current && !ref.current.contains(e.target))
      setVisibility(notVisible);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <Fragment>
      <Container
        tag="nav"
        stylesOut={
          "bg-red-darker sticky top-0 -mb-1 laptop:m-0 z-20 border-solid border-b-4 border-zinc-100"
        }
        stylesIn={
          "flex flex-row justify-between items-center p-1 laptop:px-4 text-zinc-100"
        }
      >
        <List
          className="hidden laptop:flex flex-row justify-center items-center space-x-4 drop-shadow-lg"
          items={[
            { content: "Contact", key: "contact1" },
            { content: "Faq", key: "faq1", link: "faq" },
          ]}
        />
        <Logo />
        <List
          showMenu={showMenu}
          className="flex flex-row justify-center items-center space-x-2 laptop:space-x-4 drop-shadow-lg"
          items={[
            {
              content: "Order online",
              key: "orderonline",
              specialStyle: "hidden tablet:block tablet:mr-2 laptop:m-0",
            },
            {
              content: <CartIcon />,
              key: "shoppingcart",
              specialStyle: "fill-current w-7 tablet:w-8 laptop:w-9",
            },
            {
              content: <MenuButton />,
              key: "menubutton",
              specialStyle:
                "fill-current w-7 tablet:w-8 laptop:w-9 laptop:hidden",
              showMenu: true,
            },
          ]}
        />
      </Container>
      <div
        className={`bg-white-faded-50 text-zinc-100 z-30 w-full h-screen fixed flex flex-row justify-center items-start top-0 laptop:hidden ${visibility}`}
      >
        <div
          className="relative text-xl tablet:text-2xl rounded-lg p-6 m-3 w-60 tablet:w-72 bg-gradient-to-b from-red-dark to-red-darker drop-shadow-md"
          ref={ref}
        >
          <Cross
            onClick={closeMenu}
            className="fill-current absolute top-6 right-4 w-7 tablet:w-8 cursor-pointer transition-colors hover:text-zinc-300"
          />
          <List
            className="flex flex-col justify-center items-start space-y-4"
            items={[
              { content: "Order online", key: "orderonline2" },
              { content: "Faq", key: "faq2", link: "faq" },
              { content: "Contact", key: "contact2" },
            ]}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
