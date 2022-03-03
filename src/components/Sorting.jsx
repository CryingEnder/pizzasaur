import React, { useState, useEffect, useRef, useContext } from "react";
import { AngleDownBold, ArrowSmallDown, ArrowSmallUp } from "./common/Icons";
import { SortingContext } from "./context/SortingContext";
import PropTypes from "prop-types";

function Sorting({ styles, ...props }) {
  const off = "max-h-0 opacity-0";
  const on = "max-h-full opacity-100";
  const selectedStyle = "bg-slate-500 cursor-auto";
  const ref = useRef(null);
  const [visibility, setVisibility] = useState(off);
  const [selectedOption, setSelectedOption] = useState("Sort by");
  const [ascStyle, setAscStyle] = useState(""); //ascending order
  const [descStyle, setDescStyle] = useState(""); //descending order
  const [lowStyle, setLowStyle] = useState(""); //from low to high price
  const [highStyle, setHighStyle] = useState(""); //from high to low price
  const { sortingState, setSortingState } = useContext(SortingContext);

  function toggleSelect() {
    if (visibility === off) {
      setVisibility(on);
    } else {
      setVisibility(off);
    }
  }

  function closeSelect() {
    setVisibility(off);
  }

  function handleSelected(option) {
    if (option === "asc") {
      setAscStyle(selectedStyle);
      setDescStyle("");
      setLowStyle("");
      setHighStyle("");
      setSelectedOption(
        <div className="flex w-full flex-row items-center justify-start">
          <span>Name</span>
          <ArrowSmallUp className="inline w-6 fill-current" />
        </div>
      );
      setSortingState(option);
    } else if (option === "desc") {
      setAscStyle("");
      setDescStyle(selectedStyle);
      setLowStyle("");
      setHighStyle("");
      setSelectedOption(
        <div className="flex w-full flex-row items-center justify-start">
          <span>Name</span>
          <ArrowSmallDown className="inline w-6 fill-current" />
        </div>
      );
      setSortingState(option);
    } else if (option === "low") {
      setAscStyle("");
      setDescStyle("");
      setLowStyle(selectedStyle);
      setHighStyle("");
      setSelectedOption(
        <div className="flex w-full flex-row items-center justify-start">
          <span>Price</span>
          <ArrowSmallUp className="inline w-6 fill-current" />
        </div>
      );
      setSortingState(option);
    } else if (option === "high") {
      setAscStyle("");
      setDescStyle("");
      setLowStyle("");
      setHighStyle(selectedStyle);
      setSelectedOption(
        <div className="flex w-full flex-row items-center justify-start">
          <span>Price</span>
          <ArrowSmallDown className="inline w-6 fill-current" />
        </div>
      );
      setSortingState(option);
    }

    closeSelect();
  }

  function handleClickOutside(e) {
    if (ref.current && !ref.current.contains(e.target)) closeSelect(off);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    handleSelected(sortingState);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [sortingState, ref]);

  return (
    <ul
      {...props}
      ref={ref}
      className={`z-20 flex w-28 select-none flex-col overflow-hidden rounded-xl bg-slate-800 text-left 
      font-ui text-lg font-medium text-slate-200 tablet:w-[7.25rem] tablet:text-xl ${styles}`}
    >
      <li
        onClick={toggleSelect}
        className="flex w-full cursor-pointer flex-row items-center justify-between px-2.5 py-2 transition-colors hover:bg-slate-500 tablet:py-1.5 laptop:py-1"
      >
        <div>{selectedOption}</div>
        <AngleDownBold className="w-4 fill-current text-slate-300" />
      </li>
      <div className={`${visibility} transition-opacity`}>
        <li
          onClick={() => setSortingState("asc")}
          className={`${ascStyle} flex w-full cursor-pointer flex-row items-center justify-start px-2.5 py-2 transition-colors hover:bg-slate-500 tablet:py-1.5 laptop:py-1`}
        >
          <span>Name</span>
          <ArrowSmallUp className="inline w-6 fill-current" />
        </li>
        <li
          onClick={() => setSortingState("desc")}
          className={`${descStyle} flex w-full cursor-pointer flex-row items-center justify-start px-2.5 py-2 transition-colors hover:bg-slate-500 tablet:py-1.5 laptop:py-1`}
        >
          <span>Name</span>
          <ArrowSmallDown className="inline w-6 fill-current" />
        </li>
        <li
          onClick={() => setSortingState("low")}
          className={`${lowStyle} flex w-full cursor-pointer flex-row items-center justify-start px-2.5 py-2 transition-colors hover:bg-slate-500 tablet:py-1.5 laptop:py-1`}
        >
          <span>Price</span>
          <ArrowSmallUp className="inline w-6 fill-current" />
        </li>
        <li
          onClick={() => setSortingState("high")}
          className={`${highStyle} flex w-full cursor-pointer flex-row items-center justify-start px-2.5 py-2 transition-colors hover:bg-slate-500 tablet:py-1.5 laptop:py-1`}
        >
          <span>Price</span>
          <ArrowSmallDown className="inline w-6 fill-current" />
        </li>
      </div>
    </ul>
  );
}

Sorting.defaultTypes = {
  styles: "",
};

Sorting.propTypes = {
  styles: PropTypes.string,
};

export default Sorting;
