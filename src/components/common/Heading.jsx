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
      className={`relative text-center text-slate-800 drop-shadow ${styles}`}
    >
      <div className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300">
        <div className="mb-1 h-1 bg-slate-800 tablet:h-2 laptop:mb-1.5"></div>
        <div className="h-1 bg-slate-800"></div>
      </div>
      {!isButton ? (
        <div className="absolute left-0 right-0 mx-auto w-fit -translate-y-[60%] overflow-hidden rounded-xl border-4 border-solid border-slate-800 bg-slate-200 p-1 tablet:rounded-3xl tablet:border-8 laptop:p-1.5">
          <h2 className="rounded-md border-4 border-solid border-slate-800 bg-slate-100 px-4 py-2 tablet:rounded-xl tablet:py-3 laptop:px-6">
            {content}
          </h2>
        </div>
      ) : (
        <div className="absolute left-0 right-0 mx-auto w-fit -translate-y-[60%] overflow-hidden rounded-full border-4 border-solid border-slate-800 bg-slate-200 p-1 tablet:border-8 laptop:p-1.5">
          <Link
            onClick={scrollUp}
            to={isButton && link ? link : (e) => e.preventDefault()}
          >
            <button
              type="button"
              className="rounded-full border-4 border-solid border-slate-800 bg-slate-100 px-6 py-2 text-2xl transition-colors hover:bg-slate-200 tablet-small:text-3xl tablet:py-3 tablet:text-4xl laptop:text-5xl desktop:text-6xl desktop-big:text-7xl"
            >
              {content}
            </button>
          </Link>
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
