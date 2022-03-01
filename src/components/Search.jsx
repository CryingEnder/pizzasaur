import React, { useRef } from "react";
import { MagnifyingGlass } from "./common/Icons";
import PropTypes from "prop-types";

function Search({ styles, ...props }) {
  const ref = useRef(null);

  function focusInput() {
    if (ref.current) ref.current.focus();
  }

  return (
    <div
      className={`relative flex w-48 flex-row items-center justify-center px-2 drop-shadow tablet:mt-1 tablet:mr-3 tablet:p-0 desktop:w-56 ${styles}`}
    >
      <MagnifyingGlass
        className="absolute left-5 w-4 cursor-text fill-current text-slate-500 tablet:left-3 tablet:top-2.5 tablet:w-4 desktop:left-3.5 desktop:mt-0.5 desktop:w-5"
        onClick={focusInput}
      />
      <input
        {...props}
        ref={ref}
        type="text"
        placeholder="Quick search..."
        className="w-full rounded-xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 py-2 pl-9 pr-2
         font-ui text-lg font-medium text-slate-800 placeholder-slate-500 outline-none placeholder:text-lg tablet:py-1 tablet:pl-9
          tablet:text-xl tablet:placeholder:text-xl desktop:py-1.5 desktop:pl-11 desktop:text-2xl desktop:placeholder:text-2xl"
      />
    </div>
  );
}

Search.defaultTypes = {
  styles: "",
};

Search.propTypes = {
  styles: PropTypes.string,
};

export default Search;
