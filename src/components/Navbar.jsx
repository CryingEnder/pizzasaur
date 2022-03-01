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
import Sorting from "./Sorting";
import { SearchContext } from "./context/SearchContext";
import { SortingContext } from "./context/SortingContext";
import { CartIcon, Cross, MenuButton } from "./common/Icons";

function Navbar(props) {
  let location = useLocation();
  const ref = useRef(null);
  const visible = "visible opacity-100 animate-opacity-slow";
  const notVisible = "hidden opacity-0";
  const [visibility, setVisibility] = useState(notVisible);
  const [currentLocation, setCurrentLocation] = useState(location.pathname);
  const { searchState, setSearchState } = useContext(SearchContext);
  const { sortingState, setSortingState } = useContext(SortingContext);

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

  function handleSearchingChange(e) {
    let inputValue = "";
    if (e.target) inputValue = e.target.value;
    else inputValue = e;
    setSearchState(inputValue);
  }

  function handleSortingChange(e) {
    let inputValue = "";
    if (e.target) inputValue = e.target.value;
    else inputValue = e;
    setSortingState(inputValue);
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
          "nav-bar sticky top-0 z-30 -mb-1 border-b-4 border-solid border-slate-800 bg-slate-100 transition-all laptop:m-0"
        }
        stylesIn={
          "flex flex-col px-1 py-2 text-slate-800 tablet:px-2 laptop:px-5 tablet:py-2 relative"
        }
      >
        <div className="flex flex-row items-center justify-between">
          <List
            className="hidden grow-0 flex-row items-center justify-start space-x-5 drop-shadow laptop:flex laptop:w-80"
            items={[
              { content: "Contact", key: "contact1", scrollUp: true },
              { content: "Faq", key: "faq1", link: "faq", scrollUp: true },
            ]}
          />
          <Logo />
          <List
            showMenu={showMenu}
            className="wrap flex flex-row items-center justify-end space-x-2 drop-shadow laptop:-mr-1 laptop:w-80"
            itemsStyle="flex flex-row items-center justify-end"
            items={[
              {
                content: "Order online",
                key: "orderonline",
                link: "menu",
                specialStyle: `hidden ${
                  currentLocation !== "/menu" ? "tablet:block" : ""
                } tablet:mr-1 laptop:mr-2`,
                scrollUp: true,
              },
              {
                content: (
                  <Search
                    value={searchState}
                    onChange={handleSearchingChange}
                    styles={`hidden ${
                      currentLocation === "/menu" ? "tablet:block" : ""
                    }`}
                  />
                ),
                key: "searchbox",
                disableLinkStyle: true,
              },
              {
                content: (
                  <CartIcon className="w-7 fill-current tablet:w-8 desktop:w-10" />
                ),
                key: "shoppingcart",
              },
              {
                content: (
                  <MenuButton className="w-7 fill-current tablet:w-8 laptop:hidden" />
                ),
                key: "menubutton",
                showMenu: true,
              },
            ]}
          />
        </div>
        {currentLocation === "/menu" && (
          <Fragment>
            <MenuList
              listStyle="hidden laptop:flex flex flex-row justify-center items-center py-2 categories"
              itemsStyle="flex flex-row justify-center items-center"
            />
            <Sorting
              styles="absolute hidden right-0 top-0 mt-4 laptop:mt-16 desktop:mt-[4.75rem] mr-[19rem] laptop:mr-20 tablet:block"
              onChange={handleSortingChange}
            />
          </Fragment>
        )}
      </Container>
      <nav
        className={`fixed top-0 z-30 flex h-screen w-full flex-row items-center justify-center bg-white-faded-50 p-3 text-slate-800 laptop:hidden ${visibility}`}
      >
        <div
          className="relative box-content block max-h-80 w-52 overflow-auto rounded-lg border-2 border-solid border-slate-800 bg-slate-100 p-6 text-xl drop-shadow tablet:max-h-80 tablet:w-60 tablet:text-2xl"
          ref={ref}
        >
          <Cross
            onClick={closeMenu}
            className="absolute top-6 right-4 w-7 cursor-pointer fill-current transition-colors hover:text-slate-500 tablet:w-9"
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
                <div className="w-full rounded-full border-[1px] border-solid border-slate-800"></div>
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
