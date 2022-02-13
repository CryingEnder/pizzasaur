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
      className="cursor-pointer select-none overflow-hidden fill-current p-4 transition-colors hover:bg-slate-200 laptop:p-6"
      onClick={toggleQuestion}
      {...props}
    >
      <div className="flex max-h-[50rem] flex-row items-center justify-between space-x-8">
        <p className="w-10/12 font-normal">{question}</p>
        <AngleDown
          className={`w-6 transition-transform duration-300 tablet-small:w-7 tablet:w-8 laptop:w-9 desktop:w-10 ${rotation}`}
        />
      </div>
      <p className={`${visibility} w-10/12 transition-all`}>{answer}</p>
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
