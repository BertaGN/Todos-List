import { userTypes } from "../Types/UserTypes";

export const initialState = {
  user: null,
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case userTypes.register:
      return { ...state, user: { ...action.payload } };
      case userTypes.login:
      return { ...state, user: { ...action.payload } };
    default:
      return state;
  }
};

