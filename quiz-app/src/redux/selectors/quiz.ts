import { createSelector, Selector } from 'reselect';
import { IStore } from "@/redux/store/IStore.ts";
import { IQuizState } from "@/redux/models/IQuiz.ts";
import { IAnswer, IQuestionResponse, IResult } from "@/redux/models/IQuestion.ts";

export const selectQuiz = (state: IStore) => state.quiz;

export const selectIsQuizEnd: Selector<IStore, boolean> = createSelector(
    [selectQuiz],
    (quiz: IQuizState) => quiz.isQuizEnd,
);

export const selectQuizCurrentQuestionIndex: Selector<IStore, number> = createSelector(
    [selectQuiz],
    (quiz: IQuizState) => quiz.currentQuestionIndex,
);

export const selectQuizIsStarted: Selector<IStore, boolean> = createSelector(
    [selectQuiz],
    (quiz: IQuizState) => quiz.isStarted,
);

export const selectQuizMarkedAnswers: Selector<IStore, IAnswer[]> = createSelector(
    [selectQuiz],
    (quiz: IQuizState) => quiz.markedAnswers
)

export const selectQuizQuestionList: Selector<IStore, IQuestionResponse[]> = createSelector(
    [selectQuiz],
    (quiz: IQuizState) => quiz.questionList
)

export const selectQuizResult: Selector<IStore, IResult> = createSelector(
    [selectQuiz],
    (quiz: IQuizState) => quiz.result
)
