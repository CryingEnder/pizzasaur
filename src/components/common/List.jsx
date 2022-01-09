import React from "react";
import PropTypes from "prop-types";

function List({ items, itemsStyle, children, showMenu, ...props }) {
  function triggerAction(item) {
    if (item.showMenu) showMenu();
  }

  return (
    <ul {...props}>
      {items.map(
        (i) =>
          i && (
            <li
              key={i.key}
              onClick={() => triggerAction(i)}
              className={
                i.specialStyle ? `${i.specialStyle} ${itemsStyle}` : itemsStyle
              }
            >
              {i.content}
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
};

export default List;
