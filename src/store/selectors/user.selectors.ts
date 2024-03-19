import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IUserState, listAll, userIsDelete, userIsUpdate} from "../reducers/user.reducers";

export const CREATE_USER = 'user'
export const userState = createFeatureSelector<IUserState>(CREATE_USER);
export const selectAllUsers  = createSelector(
  userState,
  // state => state.userListAll
    listAll
)

export const selectUsersUpdate = createSelector(
  userState,
  userIsUpdate
)
export const selectAllUsersUpdate = createSelector(
  userState,
  state => state.isUpdated
)

export  const selectUserDelete = createSelector(
  userState,
  userIsDelete
)
export  const selectAllUsersDelete = createSelector(
  userState,
  state => state.isDelete
)
export const selectUserIsOpen = createSelector(
  userState,
  state => state.isOpen
)

export const selectUserIsSaved = createSelector(
  userState,
  state => state.isSaved
)
