import React, { useState, useEffect, useRef, Fragment } from "react";
import Container from "./common/Container";
import { logo } from "../utils/images";
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
        stylesOut={"bg-red-darker sticky top-0 -mb-1 laptop:m-0 z-20"}
        stylesIn={
          "flex flex-row justify-between items-center p-1 text-xl laptop:text-2xl laptop:px-4 border-solid border-b-4 border-zinc-100 text-zinc-100 font-semibold"
        }
      >
        <img
          className="cursor-pointer w-40 tablet:w-44 laptop:hidden"
          src={logo}
          alt="Pizzasaur logo"
        />
        <ul className="flex flex-row justify-center laptop:justify-between items-center space-x-4 laptop:w-full">
          <li className="hidden laptop:flex flex-row justify-center items-center space-x-4 drop-shadow-lg">
            <div>Contact</div>
            <div>Faq</div>
          </li>
          <li className="drop-shadow-lg">
            <img
              className="hidden laptop:block w-56 cursor-pointer"
              src={logo}
              alt="Pizzasaur logo"
            />
          </li>
          <li className="flex flex-row justify-center items-center space-x-2 laptop:space-x-4 drop-shadow-lg">
            <div className="hidden tablet:block tablet:mr-2 laptop:m-0">
              Order online
            </div>
            <CartIcon className="fill-current w-6 tablet:w-7 laptop:w-8 cursor-pointer" />
            <MenuButton
              onClick={showMenu}
              className="fill-current w-6 tablet:w-7 laptop:w-8 laptop:hidden cursor-pointer"
            />
          </li>
        </ul>
      </Container>
      <div
        className={`bg-white-faded-50 text-lg tablet:text-xl text-zinc-100 z-30 w-full h-screen fixed flex flex-row justify-center items-start top-0 laptop:hidden ${visibility}`}
      >
        <ul
          ref={ref}
          className="relative flex flex-col justify-start items-start rounded-lg p-6 m-3 w-60 tablet:w-72 bg-gradient-to-b from-red-dark to-red-darker drop-shadow-md"
        >
          <Cross
            onClick={closeMenu}
            className="fill-current absolute top-6 right-4 w-7 tablet:w-8 cursor-pointer drop-shadow-md"
          />
          <li className="mb-4 drop-shadow-md">Order online</li>
          <li className="mb-4 drop-shadow-md">Faq</li>
          <li className="drop-shadow-md">Contact</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Navbar;