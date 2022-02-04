import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  Fragment,
} from "react";
import { useLocation } from "react-router-dom";
import Container from "./common/Container";
import List from "./common/List";
import Logo from "./common/Logo";
import MenuList from "./MenuList";
import Search from "./Search";
import { SearchContext } from "./context/SearchContext";
import { CartIcon, Cross, MenuButton } from "./common/Icons";

function Navbar(props) {
  let location = useLocation();
  const ref = useRef(null);
  const visible = "visible opacity-100 animate-opacity-slow";
  const notVisible = "hidden opacity-0";
  const [visibility, setVisibility] = useState(notVisible);
  const [currentLocation, setCurrentLocation] = useState(location.pathname);
  const { searchState, setSearchState } = useContext(SearchContext);

  function handleChange(e) {
    const inputValue = e.target.value;
    setSearchState(inputValue);
  }

  function showMenu() {
    setVisibility(visible);
  }

  function closeMenu() {
    setVisibility(notVisible);
  }

  function handleClickOutside(e) {
    if (ref.current && !ref.current.contains(e.target)) closeMenu();
  }

  useEffect(() => {
    setCurrentLocation(location.pathname);

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [location.pathname]);

  return (
    <Fragment>
      <Container
        tag="nav"
        stylesOut={
          "bg-red-darker sticky top-0 -mb-1 laptop:m-0 z-30 border-solid border-b-4 border-zinc-100 transition-all nav-bar"
        }
        stylesIn={"flex flex-col p-1 laptop:px-4 text-zinc-100"}
      >
        <div className="flex flex-row justify-between items-center">
          <List
            className="hidden laptop:flex flex-row justify-center items-center space-x-5 drop-shadow-lg"
            items={[
              { content: "Contact", key: "contact1", scrollUp: true },
              { content: "Faq", key: "faq1", link: "faq", scrollUp: true },
            ]}
          />
          <Logo />
          <List
            showMenu={showMenu}
            className="flex flex-row justify-center items-center space-x-2 laptop:space-x-5 drop-shadow-lg"
            itemsStyle="flex flex-row justify-center items-center"
            items={[
              {
                content: "Order online",
                key: "orderonline",
                link: "menu",
                specialStyle: `hidden ${
                  currentLocation !== "/menu" ? "tablet:block" : ""
                } tablet:mr-2 laptop:m-0`,
                scrollUp: true,
              },
              {
                content: (
                  <Search
                    value={searchState}
                    onChange={handleChange}
                    stylesOut={`hidden ${
                      currentLocation === "/menu" ? "tablet:block" : ""
                    }`}
                  />
                ),
                key: "searchbox",
              },
              {
                content: (
                  <CartIcon className="fill-current w-7 tablet:w-8 laptop:w-9" />
                ),
                key: "shoppingcart",
              },
              {
                content: (
                  <MenuButton className="fill-current w-7 tablet:w-8 laptop:w-9 laptop:hidden" />
                ),
                key: "menubutton",
                showMenu: true,
              },
            ]}
          />
        </div>
        {currentLocation === "/menu" && (
          <MenuList
            listStyle="hidden laptop:flex flex flex-row justify-center items-center py-2 categories"
            itemsStyle="flex flex-row justify-center items-center"
          />
        )}
      </Container>
      <nav
        className={`bg-white-faded-50 text-zinc-100 z-30 w-full h-screen fixed flex flex-row justify-center items-start top-0 laptop:hidden ${visibility}`}
      >
        <div
          className="relative text-xl tablet:text-2xl rounded-lg p-6 m-3 w-60 bg-gradient-to-b from-red-dark to-red-darker drop-shadow-md"
          ref={ref}
        >
          <Cross
            onClick={closeMenu}
            className="fill-current absolute top-6 right-4 w-7 tablet:w-9 cursor-pointer transition-colors hover:text-zinc-300"
          />
          <List
            closeMenu={closeMenu}
            className="flex flex-col justify-center items-start space-y-4"
            items={[
              {
                content: "Order online",
                key: "orderonline2",
                link: "menu",
                scrollUp: true,
              },
              { content: "Faq", key: "faq2", link: "faq", scrollUp: true },
              { content: "Contact", key: "contact2", scrollUp: true },
            ]}
          >
            {currentLocation === "/menu" && (
              <Fragment>
                <div className="border-2 border-solid border-zinc-100 rounded-full w-full"></div>
                <MenuList
                  closeMenu={closeMenu}
                  listStyle="flex flex-col justify-center items-start space-y-4"
                  itemsStyle="flex flex-col justify-center items-center"
                  disabledSlider={true}
                />
              </Fragment>
            )}
          </List>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
