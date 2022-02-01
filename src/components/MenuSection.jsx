import React from "react";
import Container from "./common/Container";
import Heading from "./common/Heading";
import PropTypes from "prop-types";

function MenuSection({ header, id, children, ...props }) {
  return (
    <section id={id} {...props}>
      <Heading
        content={header}
        styles="pb-12 pt-16 tablet:pb-14 tablet:pt-20 laptop:pb-20 laptop:pt-24 desktop:pb-24 desktop:pt-28"
      />
      <Container
        tag="div"
        stylesOut="px-3 tablet-small:px-6 tablet:px-3"
        stylesIn="grid grid-cols-1 justify-items-center items-center gap-y-12 tablet-small:gap-y-16 tablet:gap-y-12 tablet:grid-cols-2
         tablet:gap-x-3 laptop:grid-cols-1 laptop:gap-x-4 laptop:gap-y-6 desktop:grid-cols-2 desktop:gap-y-8 relative"
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
