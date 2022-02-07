import React from "react";
import PropTypes from "prop-types";

function Article({ title, content, ...props }) {
  return (
    <article {...props}>
      <h3 className="mb-3 underline decoration-orange-400 underline-offset-2 drop-shadow-md laptop:mb-4">
        {title}
      </h3>
      <p className="drop-shadow-md">{content}</p>
    </article>
  );
}

Article.defaultProps = {
  title: "",
  content: "",
};

Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Article;
