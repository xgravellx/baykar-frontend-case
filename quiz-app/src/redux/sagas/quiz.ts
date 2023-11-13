import { call, take, put, select } from 'redux-saga/effects';
import { SagaIterator } from "redux-saga";
import { actions } from "@/redux";

import { QuizActionTypes, IQuizActions } from '../models/IQuiz';
import Selectors from "@/redux/selectors";

const {
    quiz: {setQuizRetryAction}
} = actions;

const {
    question: {selectGetQuestionData}
} = Selectors;

const { GET_QUIZ_START } = QuizActionTypes;

export default function* watchQuiz(): SagaIterator {
    while (true) {
        const action: IQuizActions = yield take([GET_QUIZ_START]);
        switch (action.type) {
            case GET_QUIZ_START:
                yield call(getQuizStartSaga);
                break;
        }
    }
}

function* getQuizStartSaga(): SagaIterator {
    try {
        const questionList = yield select(selectGetQuestionData);
        yield put(setQuizRetryAction(getRandomElements(questionList, 10)));
    } catch (error) {
        console.warn(error);
    }
}

function getRandomElements<T>(arr: T[] = [], count: number = 1): T[] {
    const shuffled = arr.slice();
    let i = arr.length;
    const min = i - count;
    let temp: T;
    let index: number;

    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[i];
        shuffled[i] = shuffled[index];
        shuffled[index] = temp;
    }

    return shuffled.slice(min);
}
