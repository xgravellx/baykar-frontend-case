import {IQuestionState} from "@/redux/models/IQuestion.ts";
import {IQuizState} from "@/redux/models/IQuiz.ts";

export type IPending = boolean;
export type IError = string | null;

export interface IStore {
    question: IQuestionState,
    quiz: IQuizState
}
