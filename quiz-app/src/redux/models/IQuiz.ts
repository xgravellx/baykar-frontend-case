import { IAnswer, IQuestionResponse, IResult } from "@/redux/models/IQuestion.ts";

export enum QuizActionTypes {
    SET_ANSWER = 'SET_ANSWER',
    GET_QUIZ_START = 'GET_QUIZ_START',
    SET_QUIZ_START = 'SET_QUIZ_START',
    GET_QUIZ_RETRY = 'SET_QUIZ_RETRY',
    SET_QUIZ_QUESTION_LIST = 'SET_QUIZ_QUESTION_LIST',
    RESET_QUIZ = 'RESET_QUIZ'
}

export interface IQuizActions {
    type: QuizActionTypes;
    payload?: {
        answer?: IAnswer;
        questionList?: IQuestionResponse[]
    }
}

export interface IQuizState {
    isStarted: boolean;
    isQuizEnd: boolean;
    currentQuestionIndex: number;
    markedAnswers: IAnswer[];
    questionList: IQuestionResponse[];
    result: IResult;
}
