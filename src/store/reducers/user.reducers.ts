import {createReducer, on} from "@ngrx/store";
import {
  addUser,
  addUserFail,
  addUserSuccess, deleteUser, deleteUserFail, deleteUserSuccess, editUser, editUserFail, editUserSuccess, getAllUser,
  getUserFail,
  getUserSuccess, hideDialog, showDialog
} from "../actions/user.actions";
import {IUser} from "../../app/models/user";



export interface IUserState{

  userListAll : IUser [] |null,
  user: IUser | null,
  isUpdated: boolean,
  isDelete: boolean,
  isOpen: boolean,
  isSaved: boolean,
  users: IUser[] | null
}

const initialState: IUserState = {
  userListAll: null,
  user: null,
  isUpdated: false,
  isDelete: false,
  isOpen: false,
  isSaved: false,
  users: null
}

export const userReducers = createReducer(
  initialState,
  on(getAllUser, (state)=>{
    return{...state, userListAll: null, users: null}
  }),
  on(getUserSuccess, (state, {payload}) => {
    return{...state, userListAll:payload, users: payload}
  }),
  on(getUserFail, (state, {payload}) => {
    return{...state, payload}
  }),
  on(addUser, (state)=>{
    return{...state, user: null, isSaved: false, isOpen: true}
  }),
  on(addUserSuccess, (state, {payload}) => {
    return{...state, user: payload, isSaved: true, isOpen: false}
  }),
  on(addUserFail, (state, {payload}) => {
    return{...state, payload, isSaved: false, isOpen: false}
  }),
  on(editUser, (state, {payload}) =>{
    return{...state, user: payload, isOpen: true}
  }),
  on(editUserSuccess, (state, {payload}) =>{
    return{...state, user: payload, isUpdated: true, isOpen: false}
  }),
  on(editUserFail, (state, {payload}) =>{
    return{...state, payload, isUpdated: false, isOpen: false}
  }),
  on(deleteUser, (state, {payload}) =>{
    return{...state, user: payload, isOpen: true}
  }),
  on(deleteUserSuccess, (state, {payload}) =>{
    return{...state, user: payload, isDelete: true, isOpen: false }
  }),
  on(deleteUserFail, (state, {payload}) =>{
    return{...state,  payload, isDelete: false}
  }),
  on(showDialog, (state) =>{
    return {...state, isOpen: true}
  }),
  on(hideDialog, (state) => {
    return {...state, isOpen: false}
  })
)

export const listAll = (state : IUserState) => state.users;
export const userIsUpdate = (state: IUserState) => state.isUpdated;
export const userIsDelete = (state: IUserState) => state.isDelete;


