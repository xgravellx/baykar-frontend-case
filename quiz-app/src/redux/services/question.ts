import axios from "@/services/axios/api";

export const fetchGetQuestionList = () => {
  return axios.get('jsonplaceholder.typicode.com/posts');
};
