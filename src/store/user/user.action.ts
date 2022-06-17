import { UserData } from "./user.reducer";
import { USER_ACTION_TYPES } from "./user.types";
export const setCurrentUser = (user: UserData) => {
  return {
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user,
  };
};
