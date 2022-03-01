import React, { useContext } from "react";
import { AngleDown } from "./common/Icons";
import { SortingContext } from "./context/SortingContext";
import PropTypes from "prop-types";

function Sorting({ styles, ...props }) {
  const { sortingState, setSortingState } = useContext(SortingContext);

  return (
    // <AngleDown className="inline mb-1 mr-1 fill-current w-6 tablet:w-7 laptop:w-8 desktop:w-9" />
    <select
      {...props}
      name="sort"
      value={sortingState}
      className={`${styles} z-20 max-h-52 w-24 bg-sky-200 font-ui text-lg font-medium transition-all tablet:text-xl desktop:w-28 desktop:text-2xl`}
    >
      <option value="Sort by" className="hidden">
        Sort by
      </option>
      <optgroup label="Name">
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </optgroup>
      <optgroup label="Price">
        <option value="low">Low</option>
        <option value="high">High</option>
      </optgroup>
    </select>
  );
}

Sorting.defaultTypes = {
  styles: "",
};

Sorting.propTypes = {
  styles: PropTypes.string,
};

export default Sorting;
