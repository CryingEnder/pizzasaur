import React from "react";
import PropTypes from "prop-types";

function Container({ children, stylesOut, stylesIn, tag: Tag, ...props }) {
  return (
    <Tag className={`w-full ${stylesOut}`} {...props}>
      <div className={`mx-auto max-w-screen-desktop ${stylesIn}`}>
        {children}
      </div>
    </Tag>
  );
}

Container.defaultProps = {
  stylesOut: "",
  stylesIn: "",
};

Container.propTypes = {
  stylesOut: PropTypes.string,
  stylesIn: PropTypes.string,
  tag: PropTypes.string.isRequired,
};

export default Container;
