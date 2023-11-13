import { createSelector, Selector } from 'reselect';
import { IError, IPending, IStore } from "@/redux/store/IStore.ts";
import { IQuestionResponse, IQuestionState } from "@/redux/models/IQuestion.ts";

export const selectGetQuestion = (state: IStore) => state.question;

export const selectGetQuestionPending: Selector<IStore, IPending> = createSelector(
  [selectGetQuestion],
  (selectQuestion: IQuestionState) => selectQuestion.pending,
);

export const selectGetQuestionError: Selector<IStore, IError> = createSelector(
  [selectGetQuestion],
  (selectQuestion: IQuestionState) => selectQuestion.error,
);

export const selectGetQuestionData: Selector<IStore, IQuestionResponse[]> = createSelector(
    [selectGetQuestion],
    (selectQuestion: IQuestionState) => selectQuestion.data,
);
