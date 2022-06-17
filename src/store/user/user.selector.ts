import { createSelector } from "reselect";
import { UserState } from "./user.reducer";
export const selectUserReducer = (state): UserState => state.user;
export const selectCurrentUser = (state: UserState) =>
	createSelector(selectUserReducer, (user) => user.currentUser);
