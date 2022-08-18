import React, { useContext, useState } from "react";
import QuizContext from "../contexts/QuizContext";

const Quiz = () => {
  const {
    quizes,
    index,
    nextQuestion,
    checkAnswer,
    correct,
    showLeaderBoard,
    closeModal,
  } = useContext(QuizContext);
  // const { quizes } = quizState;
  const { question, incorrect_answers, correct_answer } = quizes[index];

  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  if (showLeaderBoard)
    return (
      <div className="bg-white  flex flex-col gap-4">
        you answered {correct} out of {quizes.length} questions
        <button
          onClick={closeModal}
          className="p-2 bg-gray-200 hover:bg-gray-300"
        >
          Play again?
        </button>
      </div>
    );

  return (
    <div className="bg-white  flex flex-col gap-4">
      <p className="text-green-600">
        {correct} correct answers out of {index} questions.
      </p>
      <h1
        className="font-semibold text-lg"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <div className="flex flex-col items-start gap-2">
        {answers.map((ans, i) => (
          <button
            className="w-full p-4 bg-purple-600/10 text-purple-600 hover:opacity-80"
            key={i}
            onClick={() => checkAnswer(correct_answer === ans)}
          >
            {ans}
          </button>
        ))}
      </div>

      <div className="w-full flex justify-end">
        <button
          className=" px-4 py-2 bg-gray-200 hover:bg-gray-300"
          onClick={nextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Quiz;
