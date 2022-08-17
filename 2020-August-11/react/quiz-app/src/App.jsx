import Quiz from "./components/Quiz";
import { useContext, useState } from "react";
import QuizSettings from "./components/QuizSettings";
import QuizContext from "./contexts/QuizContext";

function App() {
  const { loading, showModal } = useContext(QuizContext);
  if (loading) return <div className="mx-auto w-3/4 my-20">Loading...</div>;

  return (
    <div className="mx-auto w-3/4 my-20">
      <div className="bg-white p-20">
        <QuizSettings />
        {!showModal && <Quiz />}
      </div>
    </div>
  );
}

export default App;
