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
      stylesIn="relative flex flex-row items-center justify-center px-2 pt-8 tablet:mt-1 tablet:p-0 tablet:mr-3 w-64 tablet:w-48 desktop:w-56"
    >
      <MagnifyingGlass
        className="absolute left-6 w-5 cursor-text fill-current text-slate-500 tablet:left-3 tablet:w-4 desktop:left-3.5 desktop:mt-0.5 desktop:w-5"
        onClick={focusInput}
      />
      <input
        {...props}
        ref={ref}
        type="text"
        placeholder="Quick search..."
        className="w-full rounded-xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 py-4 pl-12 pr-2
         font-ui text-xl font-medium text-slate-800 placeholder-slate-500 outline-none placeholder:text-xl tablet:py-1 tablet:pl-9
          tablet:text-lg tablet:placeholder:text-xl desktop:py-1.5 desktop:pl-11 desktop:text-2xl desktop:placeholder:text-2xl"
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
