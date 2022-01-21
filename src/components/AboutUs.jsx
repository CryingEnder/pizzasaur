import React from "react";
import Container from "./common/Container";
import Article from "./common/Article";
import Heading from "./common/Heading";

function AboutUs(props) {
  return (
    <main className="bg-red-dark w-full text-zinc-100 z-10">
      <Heading content="About us" />
      <Container
        tag="section"
        stylesOut={
          "px-4 pt-12 pb-16 tablet:pt-14 tablet:pb-20 laptop:pt-20 laptop:pb-24 desktop:pt-24 desktop:pb-28"
        }
        stylesIn={"flex flex-col space-y-8 laptop:space-y-12"}
      >
        <Article
          title="Who are we"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            exercitationem accusantium tempora veniam assumenda architecto
            voluptas suscipit iusto unde sit amet nesciunt dolore eius explicabo
            dolor magnam. Voluptate, perferendis porro? Mollitia corrupti
            inventore aliquam ex ea doloremque iure quae ullam."
        />
        <Article
          title="What we do"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            eius eaque ipsum veritatis, corrupti quia quisquam ullam fuga
            eveniet facere placeat obcaecati quae dolorem reiciendis perferendis
            deleniti vero similique recusandae soluta quibusdam debitis
            repellendus at doloribus officiis. Asperiores enim veniam soluta
            eius?"
        />
        <Article
          title="Why we do this"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde
            tempore dolores eaque impedit, ullam accusantium perspiciatis
            excepturi repellendus? Voluptatum, debitis totam. Tempore
            architecto, reprehenderit laudantium a consequatur id ratione."
        />
      </Container>
    </main>
  );
}

export default AboutUs;
