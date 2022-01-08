import React from "react";
import Container from "./common/Container";

function AboutUs(props) {
  return (
    <section className="bg-red-dark w-full text-zinc-100 pt-10">
      <div className="w-full text-center drop-shadow-md relative">
        <div className="bg-yellow-300 h-1 tablet:h-2 mb-0.5 tablet:mb-1"></div>
        <div className="bg-yellow-500 h-1"></div>
        <div className="-translate-y-[55%] absolute left-0 right-0 mx-auto w-fit p-0.5 tablet:p-1 font-heading font-semibold bg-red-dark border-solid border-4 tablet:border-8 border-yellow-300 rounded-xl tablet:rounded-3xl">
          <h2 className="text-3xl tablet-small:text-4xl laptop:text-5xl desktop:text-6xl border-solid border-4 border-yellow-500 px-6 py-2 tablet:py-3 rounded-md tablet:rounded-xl flex flex-row justify-center">
            About us
          </h2>
        </div>
      </div>
      <Container
        tag="section"
        stylesOut={"py-14 tablet:py-20 desktop:py-28"}
        stylesIn={"flex flex-col space-y-8 laptop:space-y-12 p-4 -mt-5"}
      >
        <article className="drop-shadow-md">
          <h3 className="text-2xl font-heading underline decoration-orange-400 underline-offset-1 laptop:underline-offset-2 tablet-small:text-3xl laptop:text-4xl desktop:text-5xl mb-3 laptop:mb-4">
            Who are we
          </h3>
          <p className="text-lg tablet-small:text-xl laptop:text-2xl desktop:text-3xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            exercitationem accusantium tempora veniam assumenda architecto
            voluptas suscipit iusto unde sit amet nesciunt dolore eius explicabo
            dolor magnam. Voluptate, perferendis porro? Mollitia corrupti
            inventore aliquam ex ea doloremque iure quae ullam.
          </p>
        </article>
        <article className="drop-shadow-md">
          <h3 className="text-2xl font-heading underline decoration-orange-400 underline-offset-1 laptop:underline-offset-2 tablet-small:text-3xl laptop:text-4xl desktop:text-5xl mb-3 laptop:mb-4">
            What we do
          </h3>
          <p className="text-lg tablet-small:text-xl laptop:text-2xl desktop:text-3xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            eius eaque ipsum veritatis, corrupti quia quisquam ullam fuga
            eveniet facere placeat obcaecati quae dolorem reiciendis perferendis
            deleniti vero similique recusandae soluta quibusdam debitis
            repellendus at doloribus officiis. Asperiores enim veniam soluta
            eius?
          </p>
        </article>
        <article className="drop-shadow-md">
          <h3 className="text-2xl font-heading underline decoration-orange-400 underline-offset-1 laptop:underline-offset-2 tablet-small:text-3xl laptop:text-4xl desktop:text-5xl mb-3 laptop:mb-4">
            Why we do this
          </h3>
          <p className="text-lg tablet-small:text-xl laptop:text-2xl desktop:text-3xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde
            tempore dolores eaque impedit, ullam accusantium perspiciatis
            excepturi repellendus? Voluptatum, debitis totam. Tempore
            architecto, reprehenderit laudantium a consequatur id ratione.
          </p>
        </article>
      </Container>
    </section>
  );
}

export default AboutUs;
