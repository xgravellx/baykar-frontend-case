import { QuizActionTypes, IQuizActions } from "../models/IQuiz";
import { IAnswer, IQuestionResponse } from "@/redux/models/IQuestion.ts";

const {
    SET_ANSWER, GET_QUIZ_START, SET_QUIZ_START,
    GET_QUIZ_RETRY, SET_QUIZ_QUESTION_LIST, RESET_QUIZ
} = QuizActionTypes;

export const setQuizQuestionListAction = (questionList: IQuestionResponse[]): IQuizActions => ({
    type: SET_QUIZ_QUESTION_LIST,
    payload: {
        questionList
    }
})

export const setAnswerAction = (answer: IAnswer): IQuizActions => ({
    type: SET_ANSWER,
    payload: {
        answer
    }
})

export const getQuizStartAction = (): IQuizActions => ({
    type: GET_QUIZ_START,
})

export const setQuizStartAction = (questionList: IQuestionResponse[]): IQuizActions => ({
    type: SET_QUIZ_START,
    payload: {
        questionList
    }
})

export const setQuizRetryAction = (questionList: IQuestionResponse[]): IQuizActions => ({
    type: SET_QUIZ_START,
    payload: {
        questionList
    }
})

export const getQuizRetryAction = (): IQuizActions => ({
    type: GET_QUIZ_RETRY
})

export const resetQuizAction = (): IQuizActions =>  ({
    type: RESET_QUIZ
})
