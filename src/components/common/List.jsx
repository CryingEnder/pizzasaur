import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function List({
  items,
  itemsStyle,
  linksStyle,
  children,
  showMenu,
  closeMenu,
  useClassIdentifiers,
  ...props
}) {
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
            <li
              key={i.key}
              className={
                i.specialStyle
                  ? `${i.specialStyle} ${itemsStyle} ${
                      useClassIdentifiers ? i.key : ""
                    }`
                  : `${itemsStyle} ${useClassIdentifiers ? i.key : ""}`
              }
            >
              {i.link && i.link.search("#") === 0 ? (
                <a
                  onClick={() => triggerAction(i)}
                  className={`inline-block ${linksStyle}`}
                  href={i.link ? i.link : (e) => e.preventDefault()}
                >
                  {i.content}
                </a>
              ) : i.link ? (
                <Link
                  onClick={() => triggerAction(i)}
                  className={`inline-block ${linksStyle}`}
                  to={i.link ? i.link : (e) => e.preventDefault()}
                >
                  {i.content}
                </Link>
              ) : (
                <div
                  onClick={() => triggerAction(i)}
                  className={`inline-block ${linksStyle}`}
                >
                  {i.content}
                </div>
              )}
            </li>
          )
      )}
      {children}
    </ul>
  );
}

List.defaultProps = {
  itemsStyle: "",
  linksStyle: "hover:text-zinc-300 transition-colors cursor-pointer",
  useClassIdentifiers: false,
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  itemsStyle: PropTypes.string,
  linksStyle: PropTypes.string,
  showMenu: PropTypes.func,
  closeMenu: PropTypes.func,
  useClassIdentifiers: PropTypes.bool,
};

export default List;
