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
            <li id={i.key} key={i.key}>
              {i.link && i.link.search("#") === 0 ? (
                <a
                  className={
                    i.specialStyle
                      ? `${i.specialStyle} ${itemsStyle}`
                      : itemsStyle
                  }
                  onClick={() => triggerAction(i)}
                  href={i.link ? i.link : (e) => e.preventDefault()}
                >
                  {i.content}
                </a>
              ) : (
                <Link
                  className={
                    i.specialStyle
                      ? `${i.specialStyle} ${itemsStyle}`
                      : itemsStyle
                  }
                  onClick={() => triggerAction(i)}
                  to={i.link ? i.link : (e) => e.preventDefault()}
                >
                  {i.content}
                </Link>
              )}
            </li>
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
