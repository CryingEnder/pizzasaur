import React, { useState } from "react";
import Container from "./common/Container";
import Question from "./common/Question";
import { QuestionMark } from "./common/Icons";

function Faq(props) {
  return (
    <Container
      tag="section"
      stylesOut="bg-red-dark"
      stylesIn="text-zinc-100 pt-8 laptop:pt-12 pb-20 tablet:pb-24 laptop:pb-28 desktop:pb-32"
    >
      <header className="flex flex-col justify-center items-center space-y-2 text-center px-4 mb-12 tablet-small:mb-14 laptop:mb-16 desktop:mb-20">
        <QuestionMark className="w-10 tablet-small:w-12 tablet:w-14 laptop:w-16 desktop:w-20 fill-current text-yellow-300" />
        <h2 className="underline underline-offset-2 decoration-orange-400">
          Frequently asked questions
        </h2>
      </header>
      <main className="flex flex-col w-full divide-y-2 divide-solid divide-zinc-100 border-y-2 border-solid border-zinc-100">
        <Question
          question="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, voluptatibus?"
          answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, corrupti distinctio? Laborum exercitationem, harum sed recusandae voluptatum consequatur rerum accusantium."
        />
        <Question
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas?"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam optio enim eius."
        />
        <Question
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo soluta rem sit. Accusamus magni dolore omnis repudiandae, ducimus ea excepturi aspernatur? Corrupti."
        />
        <Question
          question="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, porro?"
          answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit hic quis expedita natus animi ipsa ab exercitationem reiciendis eos."
        />
        <Question
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas?"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam optio enim eius."
        />
        <Question
          question="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, molestias?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore."
        />
        <Question
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas?"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam optio enim eius."
        />
      </main>
    </Container>
  );
}

export default Faq;
