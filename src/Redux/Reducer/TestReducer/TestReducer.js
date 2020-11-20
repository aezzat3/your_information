import {
  LOADING_QUESTIONS,
  FETCH_QUESTIONS_SUCCESS,
  SELECT_QUESTION_ANSWER,
} from '../../Action/actionTypes.js';

const INIT_STATE = {
  loading: false,
  questions: [],
  answers: [],
  score: 0,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOADING_QUESTIONS:
      return {...state, loading: action.payload};
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        answers: [],
        score: 0,
        loading: false,
      };
    case SELECT_QUESTION_ANSWER:
      const {answers} = state;
      const {answer, index, isCorrect} = action.payload;
      answers[index] = {answer, isCorrect};
      return {
        ...state,
        answers,
        //calculate the score for the user .. count the correct answers
        score: answers.filter((i) => i.isCorrect === true).length,
      };
    default:
      return state;
  }
};
