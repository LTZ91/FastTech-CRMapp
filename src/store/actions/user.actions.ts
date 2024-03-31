import {createAction, props} from "@ngrx/store";
import {IUser} from "../../app/models/user";

export const getAllUser = createAction('[USER] Get all Users')
export const getUserSuccess = createAction('[USER] Get all Users Success', props<{payload: IUser[]}>())
export const getUserFail = createAction('[USER] Get all Users Fail', props<{payload: any}>())


export const addUser = createAction('[USER] Add User', props<{payload: IUser}>())
export const addUserSuccess = createAction('[USER] Add User Success', props<{payload: IUser}>() )
export const addUserFail = createAction('[USER] Add User Fail', props<{payload: any}>())

export const editUser = createAction('[USER] Edit User ', props<{payload: IUser}>())
export const editUserSuccess = createAction('[USER] Edit User Success', props<{payload:IUser}>())
export const editUserFail = createAction('[USER] Edit User Fail', props<{payload: any}>())

export const deleteUser = createAction('[USER] Delete User', props<{payload: IUser}>())
export const deleteUserSuccess = createAction('[USER] Delete User Success', props<{payload: IUser}>())
export const deleteUserFail = createAction('[USER] Delete User Fail', props<{payload: any}>())

export const showDialog = createAction('[USER], Show Dialog')
export const hideDialog = createAction('[USER], Hide Dialog')
