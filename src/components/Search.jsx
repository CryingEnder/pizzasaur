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
      className={`relative box-content flex w-44 flex-row items-center justify-center overflow-hidden tablet:mr-3 tablet:w-[11.5rem] tablet:p-0 desktop:w-56 ${styles}`}
    >
      <MagnifyingGlass
        className="absolute left-3.5 w-4 cursor-text fill-current text-slate-300 tablet:left-3 tablet:top-3 tablet:w-4 desktop:left-3.5 desktop:mt-[0.075rem] desktop:w-5"
        onClick={focusInput}
      />
      <input
        {...props}
        ref={ref}
        type="text"
        placeholder="Quick search..."
        className="w-full rounded-xl border-2 border-solid border-zinc-500 bg-slate-800 py-1.5 pl-[2.375rem]
         pr-2 font-ui text-lg font-medium text-slate-200 placeholder-zinc-400 outline-none placeholder:text-lg tablet:py-1 tablet:pl-9
          tablet:text-xl tablet:placeholder:text-xl desktop:pl-[2.625rem] desktop:text-2xl desktop:placeholder:text-2xl"
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
