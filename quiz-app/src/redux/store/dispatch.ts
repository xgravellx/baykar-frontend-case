import store from './index';
import {Action} from "redux";

const dispatch = (action: Action) => {
  return store.dispatch(action);
};

export default dispatch;
