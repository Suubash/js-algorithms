import axios from "axios";
import React, { useContext, useState } from "react";
import { TABLE, API_ENDPOINT } from "../constants/constant";
import QuizContext from "../contexts/QuizContext";

const QuizSettings = () => {
  const { setQuizes, setLoading, showModal, setShowModal } =
    useContext(QuizContext);

  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "politics",
    difficulty: "medium",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchQuiz();
    setShowModal(false);
  };

  const fetchQuiz = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_ENDPOINT}amount=${quiz.amount}&category=${
          TABLE[quiz.category]
        }&difficulty=${quiz.difficulty}&type=multiple`
      );

      setQuizes(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log({ name, value });
    setQuiz({ ...quiz, [name]: value });
  };

  return (
    <div
      className={`${showModal ? "block" : "hidden"} bg-white  p-5 rounded-sm`}
    >
      <h1 className="text-2xl font-semibold mb-5">Quiz Settings</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <label htmlFor="amount">How many questions?</label>
          <input
            className="w-full p-2 outline-none bg-gray-200/80"
            type="amount"
            name="amount"
            value={quiz.amount}
            min={5}
            max={20}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-10">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className="flex-grow p-2"
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>

        <div className="flex items-center gap-10">
          <label htmlFor="difficulty">Difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            value={quiz.difficulty}
            className={`flex-grow p-2`}
            onChange={handleChange}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-sm"
        >
          Start
        </button>
      </form>
    </div>
  );
};

export default QuizSettings;
