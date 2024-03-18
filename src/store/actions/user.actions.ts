import {createAction, props} from "@ngrx/store";
import {IUser} from "../../app/models/user";

export const getAllUser = createAction('[CREATE USER] Get all Users')
export const getUserSuccess = createAction('[CREATE USER] Get all Users Success', props<{payload: IUser[]}>())
export const getUserFail = createAction('[CREATE USER] Get all Users Fail', props<{payload: any}>())


export const addUser = createAction('[CREATE USER] Add User', props<{payload: IUser}>())
export const addUserSuccess = createAction('[CREATE USER] Add User Success', props<{payload: IUser}>() )
export const addUserFail = createAction('[CREATE USER] Add User Fail', props<{payload: any}>())

export const editUser = createAction('[CREATE USER] Edit User ', props<{payload: IUser}>())
export const editUserSuccess = createAction('[CREATE USER] Edit User Success', props<{payload:IUser}>())
export const editUserFail = createAction('[CREATE USER] Edit User Fail', props<{payload: any}>())

export const deleteUser = createAction('[CREATE USER] Delete User', props<{payload: IUser}>())
export const deleteUserSuccess = createAction('[CREATE USER] Delete User Success', props<{payload: IUser}>())
export const deleteUserFail = createAction('[CREATE USER] Delete User Fail', props<{payload: any}>())

export const showDialog = createAction('[CREATE USER], Show Dialog')
export const hideDialog = createAction('[CREATE USER], Hide Dialog')
