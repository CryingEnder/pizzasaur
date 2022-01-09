import React from "react";
import PropTypes from "prop-types";

function Welcome({ styles }) {
  return (
    <h1
      className={`text-zinc-100 m-2 drop-shadow-md text-center underline underline-offset-2 decoration-orange-500 laptop:decoration-yellow-400 ${styles}`}
    >
      Welcome to Pizzasaur
    </h1>
  );
}

Welcome.defaultProps = {
  styles: "",
};

Welcome.propTypes = {
  styles: PropTypes.string,
};

export default Welcome;
