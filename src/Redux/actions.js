import { SET_VLIST } from "./actionTypes";
import axios from "axios";

export const setVList = (content) => ({
  type: SET_VLIST,
  payload: {
    userList: content,
  },
});

export const fetchVList = (page, size) => {
  return (dispatch) => {
    dispatch(fetchVList);
    let act = 'https://jsonplaceholder.typicode.com/users';
    axios
      .get(act)
      .then((res) => {
        const users = res.data;
        dispatch(setVList(users));
      })
      .catch((error) => {});
  };
};
