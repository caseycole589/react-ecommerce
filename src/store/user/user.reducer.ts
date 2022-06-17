import { USER_ACTION_TYPES } from "./user.types";

export interface UserData {
  readonly createdAt: string;
  readonly displayName: string;
  readonly email: string;
}

export interface UserState {
  currentUser: UserData;
}

export const USER_INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {} as any) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
