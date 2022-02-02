import React, { useState } from "react";
import PropTypes from "prop-types";
import { AngleDown } from "./Icons";

function Question({ question, answer, ...props }) {
  const off = "max-h-0 opacity-0 pt-0";
  const on = "max-h-full opacity-100 pt-4 tablet:pt-6 desktop:pt-8";
  const up = "rotate-180";
  const down = "rotate-0";
  const [visibility, setVisibility] = useState(off);
  const [rotation, setRotation] = useState("");

  function toggleQuestion() {
    if (visibility === off) {
      setVisibility(on);
      setRotation(up);
    } else {
      setVisibility(off);
      setRotation(down);
    }
  }

  return (
    <article
      className="cursor-pointer select-none fill-current transition-colors hover:bg-red-darker overflow-hidden p-4 laptop:p-6"
      onClick={toggleQuestion}
      {...props}
    >
      <div className="flex flex-row max-h-[50rem] justify-between items-center space-x-8">
        <p className="font-normal w-10/12">{question}</p>
        <AngleDown
          className={`w-6 tablet-small:w-7 tablet:w-8 laptop:w-9 desktop:w-10 transition-transform duration-300 ${rotation}`}
        />
      </div>
      <p className={`${visibility} transition-all w-10/12`}>{answer}</p>
    </article>
  );
}

Question.defaultProps = {
  question: "Question unknown",
  answer: "Answer unknown",
};

Question.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default Question;
