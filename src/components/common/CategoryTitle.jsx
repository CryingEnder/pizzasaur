import React from "react";
import PropTypes from "prop-types";
import { Pizza, Dessert, Drink } from "./Icons";

function CategoryTitle({ content, styles }) {
  return (
    <header
      className={`flex w-full flex-col items-center justify-center text-slate-800 ${styles}`}
    >
      {content.toLowerCase() === "pizza" && (
        <Pizza className="w-12 fill-current tablet-small:w-16 tablet:w-14 laptop:w-16" />
      )}
      {content.toLowerCase() === "desserts" && (
        <Dessert className="w-12 fill-current tablet-small:w-16 tablet:w-14 laptop:w-16" />
      )}
      {content.toLowerCase() === "drinks" && (
        <Drink className="w-12 fill-current tablet-small:w-16 tablet:w-14 laptop:w-16" />
      )}
      <h2 className="font-ui text-5xl font-semibold underline decoration-amber-500 tablet-small:text-6xl desktop:text-7xl">
        {content}
      </h2>
    </header>
  );
}

CategoryTitle.defaultProps = {
  content: "",
  styles: "",
};

CategoryTitle.propTypes = {
  content: PropTypes.string.isRequired,
  styles: PropTypes.string,
};

export default CategoryTitle;
