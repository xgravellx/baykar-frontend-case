import { QuizActionTypes, IQuizActions, IQuizState } from "../models/IQuiz";
import { IAnswer, IAnswerCalculate, IQuestionResponse } from "@/redux/models/IQuestion.ts";

const {
  SET_ANSWER, SET_QUIZ_START,
  GET_QUIZ_RETRY, RESET_QUIZ
} = QuizActionTypes;

const initialState: IQuizState = {
  markedAnswers: [],
  currentQuestionIndex: 0,
  isQuizEnd: false,
  isStarted: false,
  questionList: [],
  result: {
    answerResult: [],
    percentage: 0,
    correct: 0,
    total: 0
  }
}

export const quiz = (state: IQuizState = initialState, action: IQuizActions): IQuizState => {
  const {type, payload}: IQuizActions = action;
  switch (type) {
    case SET_ANSWER: {
      const newMarkedAnswers: IAnswer[] = [...state.markedAnswers];
      newMarkedAnswers[state.currentQuestionIndex] = payload?.answer ?? null;

      const newCurrentQuestionIndex = state.currentQuestionIndex + 1;

      const isQuizEnd = newCurrentQuestionIndex === state.questionList.length;


      return {
        ...state,
        markedAnswers: newMarkedAnswers,
        currentQuestionIndex: newCurrentQuestionIndex,
        isQuizEnd: isQuizEnd,
        result: isQuizEnd ? calculateResult(state.questionList, newMarkedAnswers) : state.result
      }
    }
    case SET_QUIZ_START: {
      return {
        ...initialState,
        isStarted: true,
        questionList: payload?.questionList || []
      }
    }
    case GET_QUIZ_RETRY:
      return  {
        ...initialState
      }
    case RESET_QUIZ:
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default quiz;


const calculateResult = (questionList: IQuestionResponse[], markedAnswers: IAnswer[]) => {
  let correct: number = 0;
  let answerResult: IAnswerCalculate[] = [];
  questionList.forEach((question: IQuestionResponse, index: number) => {
    const isCorrect: boolean = question.correctOptionIndex === markedAnswers[index];
    if (isCorrect) {
      correct++;
    }
    answerResult = [
      ...answerResult,
      {
        ...question,
        answer: markedAnswers[index],
        isCorrect: isCorrect
      }
    ]
  })
  return {
    total: questionList.length,
    correct: correct,
    percentage: Math.trunc((correct / questionList.length) * 100),
    answerResult: answerResult
  }
}
