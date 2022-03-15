import React from "react";
import Container from "./common/Container";
import CategoryTitle from "./common/CategoryTitle";
import PropTypes from "prop-types";

function MenuSection({ header, id, children, ...props }) {
  return (
    <section id={id} {...props}>
      <CategoryTitle
        content={header}
        styles="pb-6 desktop:pb-10 pt-2 laptop:pt-0"
      />
      <Container
        tag="div"
        stylesOut="px-3 tablet-small:px-6 tablet:px-3 pb-16 tablet:pb-20 desktop:pb-24"
        stylesIn="relative grid grid-cols-1 items-center justify-items-center gap-y-12 tablet-small:gap-y-16 tablet:grid-cols-2
         tablet:gap-y-12 tablet:gap-x-3 laptop:grid-cols-1 laptop:gap-x-4 laptop:gap-y-6 desktop:grid-cols-2 desktop:gap-y-8"
      >
        {children}
      </Container>
    </section>
  );
}

MenuSection.propTypes = {
  header: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MenuSection;
