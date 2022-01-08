import React from "react";
import Container from "./common/Container";
import { logo } from "../utils/images";
import { Facebook, Instagram, Twitter, Phone } from "./common/Icons";

function Footer(props) {
  return (
    <div className="w-full relative h-2 text-zinc-100">
      <div className="w-full text-center drop-shadow-md absolute top-0">
        <div className="bg-yellow-300 h-1 tablet:h-2 mb-0.5 tablet:mb-1"></div>
        <div className="bg-yellow-500 h-1"></div>
        <div className="-translate-y-[55%] absolute left-0 right-0 mx-auto w-fit p-0.5 tablet:p-1 font-heading font-semibold cursor-pointer transition-colors bg-red-darker hover:bg-red-darkest border-solid border-4 tablet:border-8 border-yellow-300 rounded-full">
          <h2 className="text-3xl tablet-small:text-4xl laptop:text-5xl desktop:text-6xl border-solid border-4 border-yellow-500 px-6 py-2 tablet:py-3 rounded-full">
            Order now
          </h2>
        </div>
      </div>
      <Container
        tag="footer"
        stylesOut={"bg-red-darker"}
        stylesIn={
          "p-4 flex flex-col justify-center items-center laptop:items-end text-lg tablet:text-xl laptop:text-2xl desktop:text-3xl pt-20 tablet:pt-24 laptop:flex-row laptop:justify-between"
        }
      >
        <div className="flex flex-col justify-center items-center text-center space-y-2 mb-8 laptop:items-end laptop:text-right laptop:space-y-0 laptop:mb-0 laptop:order-1">
          <div className="laptop:order-1">
            <p>1111 Example Street</p>
            <p className="flex flex-row items-center justify-center laptop:justify-end space-x-1">
              <Phone className=" mb-1 fill-current w-6 tablet:w-7 laptop:w-8 desktop:w-9" />
              <span>+123 456 789</span>
            </p>
            <p>example@domain.com</p>
          </div>
          <div className="flex flex-row justify-center items-center space-x-2 laptop:pb-4">
            <Facebook className="w-10 tablet:w-12 laptop:w-14 transition-colors fill-current hover:text-zinc-300 cursor-pointer" />
            <Instagram className="w-10 tablet:w-12 laptop:w-14 transition-colors fill-current hover:text-zinc-300 cursor-pointer" />
            <Twitter className="w-10 tablet:w-12 laptop:w-14 transition-colors fill-current hover:text-zinc-300 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center laptop:items-start">
          <img src={logo} className="w-56 laptop:w-72" alt="Pizzasaur logo" />
          <p>Copyright &copy; 2022 Cristian Botez</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
