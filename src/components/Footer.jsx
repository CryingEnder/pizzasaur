import React from "react";
import Container from "./common/Container";
import Logo from "./common/Logo";
import Heading from "./common/Heading";
import { Facebook, Instagram, Twitter, Phone } from "./common/Icons";
import List from "./common/List";

function Footer(props) {
  return (
    <footer className="z-10 w-full bg-slate-100 text-slate-800">
      <Heading content="Order now" isButton={true} link="menu" />
      <Container
        tag="section"
        stylesIn={
          "p-2 flex flex-col justify-center items-center space-y-6 pt-14 tablet:pt-16 laptop:items-end laptop:flex-row laptop:justify-between"
        }
      >
        <div className="flex flex-col space-y-2 text-center laptop:order-1 laptop:text-right">
          <List
            linksStyle=""
            className="laptop:order-1"
            items={[
              { content: "1111 Example Street", key: "street1" },
              {
                content: (
                  <div className="mt-1">
                    <Phone className="mb-1 mr-1 inline w-6 fill-current tablet:w-7 laptop:w-8 desktop:w-9" />
                    <span>+123 456 789</span>
                  </div>
                ),
                key: "phonenumber",
              },
              { content: "example@domain.com", key: "customerserviceemail" },
            ]}
          />
          <List
            className="flex flex-row justify-center space-x-2 pb-3 laptop:justify-end"
            items={[
              {
                content: (
                  <Facebook className="w-10 fill-current tablet:w-12 desktop:w-14" />
                ),
                key: "facebook",
              },
              {
                content: (
                  <Instagram className="w-10 fill-current tablet:w-12 desktop:w-14" />
                ),
                key: "instagram",
              },
              {
                content: (
                  <Twitter className="w-10 fill-current tablet:w-12 desktop:w-14" />
                ),
                key: "twitter",
              },
            ]}
          />
        </div>
        <div className="flex flex-col items-center justify-center space-y-1 text-center laptop:items-start">
          <Logo />
          <div>Copyright &copy; 2022 Cristian Botez</div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
