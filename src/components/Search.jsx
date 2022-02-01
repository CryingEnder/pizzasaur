import React, { useRef, useState } from "react";
import Container from "./common/Container";
import { MagnifyingGlass } from "./common/Icons";

function Search({ ...props }) {
  const ref = useRef(null);

  function focusInput() {
    if (ref.current) ref.current.focus();
  }

  return (
    <Container
      tag="div"
      stylesIn="px-2 pt-8 flex flex-row items-center justify-center max-w-[16rem] relative"
    >
      <MagnifyingGlass
        className="absolute left-6 fill-current text-zinc-500 w-5 cursor-text"
        onClick={focusInput}
      />
      <input
        {...props}
        ref={ref}
        type="text"
        placeholder="Quick search..."
        className="bg-zinc-100 rounded-2xl font-ui font-medium text-zinc-800 w-full pl-12 pr-6 py-4 outline-none focus:bg-zinc-200 text-xl placeholder-zinc-500 placeholder:text-xl"
      />
    </Container>
  );
}

export default Search;
