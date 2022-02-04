import React, { useRef } from "react";
import Container from "./common/Container";
import { MagnifyingGlass } from "./common/Icons";
import PropTypes from "prop-types";

function Search({ stylesOut, ...props }) {
  const ref = useRef(null);

  function focusInput() {
    if (ref.current) ref.current.focus();
  }

  return (
    <Container
      tag="div"
      stylesOut={stylesOut}
      stylesIn="px-2 pt-8 tablet:p-0 flex flex-row items-center w-64 tablet:w-48 tablet:mt-1 justify-center relative"
    >
      <MagnifyingGlass
        className="absolute left-6 tablet:left-3 w-5 tablet:w-4 fill-current text-zinc-500 cursor-text"
        onClick={focusInput}
      />
      <input
        {...props}
        ref={ref}
        type="text"
        placeholder="Quick search..."
        className="bg-zinc-100 rounded-2xl font-ui font-medium text-zinc-800 w-full pl-12 pr-2 py-4 text-xl tablet:text-lg tablet:py-1 tablet:pl-9 outline-none focus:bg-zinc-200 placeholder-zinc-500 placeholder:text-xl tablet:placeholder:text-lg"
      />
    </Container>
  );
}

Search.defaultTypes = {
  stylesOut: "",
};

Search.propTypes = {
  stylesOut: PropTypes.string,
};

export default Search;
