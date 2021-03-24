import { SET_VLIST } from "../actionTypes";

const initialState = {
  userList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_VLIST: {
      const { userList } = action.payload;
      return {
        ...state,
        userList
      };
    }
    default:
      return state;
  }
}
