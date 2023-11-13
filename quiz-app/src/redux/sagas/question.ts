import { call, take, put } from 'redux-saga/effects';
import { SagaIterator } from "redux-saga";
import  {actions } from "@/redux";

import { QuestionActionTypes, IQuestionActions, IQuestionResponse } from '../models/IQuestion';
import { fetchGetQuestionList } from '../services/question';


const {
  question: {getQuestionPending, getQuestionRejected, getQuestionFulfilled},
} = actions;

const { GET_QUESTION } = QuestionActionTypes;

export default function* watchQuestion(): SagaIterator {
  while (true) {
    const action: IQuestionActions = yield take([GET_QUESTION]);
    switch (action.type) {
      case GET_QUESTION:
        yield call(getQuestionSaga);
        break;
    }
  }
}

function* getQuestionSaga(): SagaIterator {
  try {
    yield put(getQuestionPending());
    const response = yield call(fetchGetQuestionList)

    if (response) {
      const newQuestions = response.data.map((data: IQuestionResponse) => (
          {
            ...data,
            options: data.body.split('\n'),
            correctOptionIndex: Math.floor(Math.random() * 4)
          }
      ))
      yield put(getQuestionFulfilled(newQuestions));
    } else {
      yield put(getQuestionRejected('ERR_1'));
    }
  } catch (error) {
    yield put(getQuestionRejected('ERR_2'));
  }
}
