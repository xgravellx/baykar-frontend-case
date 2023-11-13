import { combineReducers} from 'redux';

import question from "./question.ts";
import quiz from "./quiz.ts";

const rootReducer = combineReducers({
  question,
  quiz
});
export default rootReducer;
