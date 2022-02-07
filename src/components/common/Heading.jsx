import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Heading({ isButton, link, content, styles, ...props }) {
  function scrollUp() {
    window.scrollTo(0, 0);
  }

  return (
    <div
      {...props}
      className={`relative w-full text-center text-zinc-100 drop-shadow-md ${styles}`}
    >
      <div className="mb-0.5 h-1 bg-yellow-300 tablet:mb-1 tablet:h-2"></div>
      <div className="h-1 bg-yellow-500"></div>
      {!isButton ? (
        <div className="absolute left-0 right-0 mx-auto w-fit -translate-y-[60%] rounded-xl border-4 border-solid border-yellow-300 bg-red-dark p-0.5 tablet:rounded-3xl tablet:border-8 tablet:p-1">
          <h2 className="rounded-md border-4 border-solid border-yellow-500 px-6 py-2 tablet:rounded-xl tablet:py-3">
            {content}
          </h2>
        </div>
      ) : (
        <div className="absolute left-0 right-0 mx-auto w-fit -translate-y-[60%] cursor-pointer rounded-full border-4 border-solid border-yellow-300 bg-red-darker p-0.5 transition-colors hover:bg-red-darkest tablet:border-8 tablet:p-1">
          <button
            type="button"
            className="rounded-full border-4 border-solid border-yellow-500 px-6 py-2 text-2xl tablet-small:text-3xl tablet:py-3 tablet:text-4xl laptop:text-5xl desktop:text-6xl"
          >
            <Link
              onClick={scrollUp}
              to={isButton && link ? link : (e) => e.preventDefault()}
            >
              {content}
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

Heading.defaultProps = {
  content: "",
  isButton: false,
  link: "",
  styles: "",
};

Heading.propTypes = {
  content: PropTypes.string,
  isButton: PropTypes.bool,
  link: PropTypes.string,
  styles: PropTypes.string,
};

export default Heading;
