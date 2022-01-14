import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function List({ items, itemsStyle, children, showMenu, closeMenu, ...props }) {
  function scrollUp() {
    window.scrollTo(0, 0);
  }

  function triggerAction(item) {
    if (item.scrollUp) scrollUp();

    if (item.showMenu) showMenu();
    else if (closeMenu) closeMenu();
  }

  return (
    <ul {...props}>
      {items.map(
        (i) =>
          i && (
            <Link
              to={i.link ? i.link : (e) => e.preventDefault()}
              key={i.key}
              onClick={() => triggerAction(i)}
              className={
                i.specialStyle ? `${i.specialStyle} ${itemsStyle}` : itemsStyle
              }
            >
              {i.content}
            </Link>
          )
      )}
      {children}
    </ul>
  );
}

List.defaultProps = {
  itemsStyle: "transition-colors hover:text-zinc-300 cursor-pointer",
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  itemsStyle: PropTypes.string,
  showMenu: PropTypes.func,
  closeMenu: PropTypes.func,
};

export default List;
