import { IError, IPending } from "@/redux/store/IStore.ts";

export enum QuestionActionTypes {
    GET_QUESTION = 'GET_QUESTION',
    GET_QUESTION_PENDING = 'GET_QUESTION_PENDING',
    GET_QUESTION_FULFILLED = 'GET_QUESTION_FULFILLED',
    GET_QUESTION_REJECTED = 'GET_QUESTION_REJECTED'
}

export interface IQuestionActions {
    type: QuestionActionTypes;
    payload?: {
        pending?: IPending;
        error?: IError;
        data?: IQuestionResponse[];
    }
}

export interface IQuestionState {
    pending: IPending;
    error: IError;
    data: IQuestionResponse[];
}

export interface IQuestionResponse {
    id: number;
    userId: number;
    body: string;
    title: string;
    options: string[];
    correctOptionIndex: number; // doğru şık
}

export enum OptionNames {
    'A', 'B', 'C', 'D'
}

export type IAnswer = number | null;

export interface IAnswerCalculate extends IQuestionResponse {
    answer: IAnswer,
    isCorrect: boolean
}

export interface IResult {
    total: number,
    correct: number,
    percentage: number,
    answerResult: IAnswerCalculate[]
}
