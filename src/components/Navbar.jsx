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

  function hideBodyOverflow() {
    document.body.classList.add("overflow-hidden");
  }

  function showBodyOverflow() {
    document.body.classList.remove("overflow-hidden");
  }

  function showMenu() {
    setVisibility(visible);
    hideBodyOverflow();
  }

  function closeMenu() {
    setVisibility(notVisible);
    showBodyOverflow();
  }

  function handleResize() {
    if (document.body.classList.contains("overflow-hidden")) closeMenu();
  }

  function handleChange(e) {
    const inputValue = e.target.value;
    setSearchState(inputValue);
  }

  function handleClickOutside(e) {
    if (ref.current && !ref.current.contains(e.target)) closeMenu();
  }

  useEffect(() => {
    setCurrentLocation(location.pathname);

    if (visibility === visible) hideBodyOverflow();

    document.addEventListener("click", handleClickOutside, true);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      window.removeEventListener("resize", handleResize);
      showBodyOverflow();
    };
  }, [location.pathname]);

  return (
    <Fragment>
      <Container
        tag="nav"
        stylesOut={
          "nav-bar sticky top-0 z-30 -mb-1 border-b-4 border-solid border-zinc-100 bg-red-darker transition-all laptop:m-0"
        }
        stylesIn={"flex flex-col p-1 text-zinc-100 laptop:px-4"}
      >
        <div className="relative flex flex-row items-center justify-between">
          <List
            className="hidden grow-0 flex-row items-center justify-start space-x-5 drop-shadow-lg laptop:flex laptop:w-80"
            items={[
              { content: "Contact", key: "contact1", scrollUp: true },
              { content: "Faq", key: "faq1", link: "faq", scrollUp: true },
            ]}
          />
          <Logo styles="grow" />
          <List
            showMenu={showMenu}
            className="wrap flex flex-row items-center justify-end space-x-2 drop-shadow-lg laptop:w-80 laptop:space-x-3"
            itemsStyle="flex flex-row items-center justify-end"
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
                  <CartIcon className="w-7 fill-current tablet:w-8 laptop:w-9" />
                ),
                key: "shoppingcart",
              },
              {
                content: (
                  <MenuButton className="w-7 fill-current tablet:w-8 laptop:hidden laptop:w-9" />
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
        className={`fixed top-0 z-30 flex h-screen w-full flex-row items-center justify-center overflow-auto bg-white-faded-50 p-3 text-zinc-100 laptop:hidden ${visibility}`}
      >
        <div
          className="relative block max-h-80 w-60 overflow-auto rounded-lg bg-gradient-to-b from-red-dark to-red-darker p-6 text-xl drop-shadow-md tablet:max-h-80 tablet:w-72 tablet:text-2xl"
          ref={ref}
        >
          <Cross
            onClick={closeMenu}
            className="absolute top-6 right-4 w-7 cursor-pointer fill-current transition-colors hover:text-zinc-300 tablet:w-9"
          />
          <List
            closeMenu={closeMenu}
            className="flex flex-col items-start justify-center space-y-4"
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
                <div className="w-full rounded-full border-2 border-solid border-zinc-100"></div>
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
