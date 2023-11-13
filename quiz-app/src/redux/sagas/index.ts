import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from "redux-saga";

import watchQuestion from "./question.ts";
import watchQuiz from "./quiz.ts";

export default function* RootSaga(): SagaIterator {
  yield all([
    fork(watchQuestion),
    fork(watchQuiz)
  ]);
}
