export const quizReducer = (state, action) => {
  switch (action.type) {
    case "ADD_QUIZES":
      return {
        quizes: [...action.payload],
      };

    default:
      return state;
  }
};
