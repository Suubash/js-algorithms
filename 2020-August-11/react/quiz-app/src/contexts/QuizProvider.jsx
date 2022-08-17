import React, { useState } from "react";
import QuizContext from "./QuizContext";

const QuizProvider = ({ children }) => {
  const [quizes, setQuizes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > quizes.length - 1) {
        setShowLeaderBoard(true);
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
  };

  const closeModal = () => {
    setShowModal(true);
    setShowLeaderBoard(false);
    setCorrect(0);
  };

  return (
    <QuizContext.Provider
      value={{
        quizes,
        setQuizes,
        loading,
        setLoading,
        index,
        nextQuestion,
        checkAnswer,
        correct,
        showLeaderBoard,
        setShowLeaderBoard,
        showModal,
        setShowModal,
        closeModal,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
