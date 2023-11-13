import { QuestionActionTypes, IQuestionActions, IQuestionState } from "../models/IQuestion";

const {
    GET_QUESTION_PENDING, GET_QUESTION_REJECTED, GET_QUESTION_FULFILLED
} = QuestionActionTypes;

const initialState: IQuestionState = {
    pending: false,
    data: [],
    error: null
}

export const question = (state: IQuestionState = initialState, action: IQuestionActions): IQuestionState => {
    const {type, payload}: IQuestionActions = action;
    switch (type) {
        case GET_QUESTION_PENDING:
            return {
                ...state,
                pending: true,
                error: null,
            }
        case GET_QUESTION_FULFILLED:
            return {
                ...state,
                pending: false,
                data: payload?.data ?? initialState.data
            }
        case GET_QUESTION_REJECTED:
            return {
                ...state,
                pending: false,
                error: payload?.error ?? initialState.error
            }
        default:
            return state
    }
}

export default question;
