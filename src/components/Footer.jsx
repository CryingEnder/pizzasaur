import React from "react";
import Container from "./common/Container";
import Logo from "./common/Logo";
import Heading from "./common/Heading";
import { Facebook, Instagram, Twitter, Phone } from "./common/Icons";
import List from "./common/List";

function Footer(props) {
  return (
    <footer className="w-full text-zinc-100 bg-red-darker z-10">
      <Heading content="Order now" isButton={true} link="menu" />
      <Container
        tag="section"
        stylesIn={
          "p-4 flex flex-col justify-center items-center space-y-6 pt-14 tablet:pt-16 laptop:items-end laptop:flex-row laptop:justify-between"
        }
      >
        <div className="flex flex-col text-center laptop:text-right space-y-2 laptop:order-1">
          <List
            linksStyle=""
            className="laptop:order-1"
            items={[
              { content: "1111 Example Street", key: "street1" },
              {
                content: (
                  <div>
                    <Phone className="inline mb-1 mr-1 fill-current w-6 tablet:w-7 laptop:w-8 desktop:w-9" />
                    <span>+123 456 789</span>
                  </div>
                ),
                key: "phonenumber",
              },
              { content: "example@domain.com", key: "customerserviceemail" },
            ]}
          />
          <List
            className="flex flex-row justify-center laptop:justify-end space-x-2 pb-3"
            items={[
              {
                content: (
                  <Facebook className="w-10 tablet:w-12 desktop:w-14 fill-current" />
                ),
                key: "facebook",
              },
              {
                content: (
                  <Instagram className="w-10 tablet:w-12 desktop:w-14 fill-current" />
                ),
                key: "instagram",
              },
              {
                content: (
                  <Twitter className="w-10 tablet:w-12 desktop:w-14 fill-current" />
                ),
                key: "twitter",
              },
            ]}
          />
        </div>
        <div className="flex flex-col justify-center items-center laptop:items-start text-center">
          <Logo />
          <div>Copyright &copy; 2022 Cristian Botez</div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
