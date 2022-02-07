import React, { useState } from "react";
import Container from "./common/Container";
import { AngleDown } from "./common/Icons";

function Sorting({ ...props }) {
  return (
    <Container
      tag="div"
      stylesOut="mt-10"
      stylesIn="flex w-full flex-col items-center justify-center text-zinc-800"
    >
      <select {...props} name="sort" className="w-64 bg-zinc-100 p-2">
        {/* <AngleDown className="inline mb-1 mr-1 fill-current w-6 tablet:w-7 laptop:w-8 desktop:w-9" />
        <span className="text-xl">Sort</span> */}
        <option defaultValue="Sort by" className="hidden">
          Sort by
        </option>
        <optgroup label="Name">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </optgroup>
        <optgroup label="Price">
          <option value="low">Low to high</option>
          <option value="high">High to low</option>
        </optgroup>
      </select>
    </Container>
  );
}

export default Sorting;
