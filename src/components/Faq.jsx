import React, { useState } from "react";
import Container from "./common/Container";
import Question from "./common/Question";
import { QuestionMark } from "./common/Icons";

function Faq(props) {
  return (
    <Container
      tag="section"
      stylesOut="bg-red-dark"
      stylesIn="pt-8 pb-20 text-zinc-100 tablet:pb-24 laptop:pt-12 laptop:pb-28 desktop:pb-32"
    >
      <header className="mb-12 flex flex-col items-center justify-center space-y-2 px-4 text-center tablet-small:mb-14 laptop:mb-16 desktop:mb-20">
        <QuestionMark className="w-10 fill-current text-yellow-300 tablet-small:w-12 tablet:w-14 laptop:w-16 desktop:w-20" />
        <h2 className="underline decoration-orange-400 underline-offset-2">
          Frequently asked questions
        </h2>
      </header>
      <main className="flex w-full flex-col divide-y-2 divide-solid divide-zinc-100 border-y-2 border-solid border-zinc-100">
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
