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
      stylesIn="relative flex w-64 flex-row items-center justify-center px-2 pt-8 tablet:mt-1 tablet:w-48 tablet:p-0"
    >
      <MagnifyingGlass
        className="absolute left-6 w-5 cursor-text fill-current text-zinc-500 tablet:left-3 tablet:w-4"
        onClick={focusInput}
      />
      <input
        {...props}
        ref={ref}
        type="text"
        placeholder="Quick search..."
        className="w-full rounded-2xl bg-slate-200 py-4 pl-12 pr-2 font-ui text-xl font-medium text-zinc-800 placeholder-zinc-500 outline-none placeholder:text-xl focus:bg-zinc-200 tablet:py-1 tablet:pl-9 tablet:text-lg tablet:placeholder:text-lg"
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
