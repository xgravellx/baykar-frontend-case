import { QuestionActionTypes, IQuestionActions, IQuestionResponse } from "../models/IQuestion";

const {
  GET_QUESTION, GET_QUESTION_PENDING,
  GET_QUESTION_REJECTED, GET_QUESTION_FULFILLED
} = QuestionActionTypes;

export const getQuestionListAction = (): IQuestionActions => ({
  type: GET_QUESTION
})

export const getQuestionPending = (): IQuestionActions => ({
  type: GET_QUESTION_PENDING
})

export const getQuestionFulfilled = (data: IQuestionResponse[]): IQuestionActions => ({
  type: GET_QUESTION_FULFILLED,
  payload: {
    data
  }
})

export const getQuestionRejected = (error: string): IQuestionActions => ({
  type: GET_QUESTION_REJECTED,
  payload: {
    error
  }
})
