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
      className={`w-full text-center drop-shadow-md relative text-zinc-100 ${styles}`}
    >
      <div className="bg-yellow-300 h-1 tablet:h-2 mb-0.5 tablet:mb-1"></div>
      <div className="bg-yellow-500 h-1"></div>
      {!isButton ? (
        <div className="-translate-y-[60%] absolute left-0 right-0 mx-auto w-fit p-0.5 tablet:p-1 bg-red-dark border-solid border-4 tablet:border-8 border-yellow-300 rounded-xl tablet:rounded-3xl">
          <h2 className="border-solid border-4 border-yellow-500 px-6 py-2 tablet:py-3 rounded-md tablet:rounded-xl">
            {content}
          </h2>
        </div>
      ) : (
        <div className="-translate-y-[60%] absolute left-0 right-0 mx-auto w-fit p-0.5 tablet:p-1 cursor-pointer transition-colors bg-red-darker hover:bg-red-darkest border-solid border-4 tablet:border-8 border-yellow-300 rounded-full">
          <button
            type="button"
            className="border-solid border-4 border-yellow-500 px-6 py-2 tablet:py-3 rounded-full text-2xl tablet-small:text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl"
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
