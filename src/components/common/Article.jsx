import React from "react";
import PropTypes from "prop-types";

function Article({ title, content, ...props }) {
  return (
    <article {...props}>
      <h3 className="underline decoration-orange-400 underline-offset-2 mb-3 laptop:mb-4 drop-shadow-md">
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
