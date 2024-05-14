import {createReducer, on} from "@ngrx/store";
import {RolePermission} from "../../../../../models/role-permission";
import {
  addRolePermissions,
  addRolePermissionsFail,
  addRolePermissionsSuccess,
  deleteRolePermissions, deleteRolePermissionsFail,
  deleteRolePermissionsSuccess,
  getRolePermissionsById,
  getRolePermissionsByIdFail,
  getRolePermissionsByIdSuccess,
  getRolesPermissions,
  getRolesPermissionsFail,
  getRolesPermissionsSuccess, hideAddFormRolePermissions, showAddFormRolePermissions,
  updateRolePermissions,
  updateRolePermissionsFail,
  updateRolePermissionsSuccess
} from "../actions/role-permissions.actions";



export interface RolePermissionState{

  rolePermissionListAll : RolePermission [] |null,
  rolePermission: RolePermission | null,
  selectedRolePermission: RolePermission | null,
  isUpdated: boolean,
  isDelete: boolean,
  isOpen: boolean,
  isSaved: boolean,
  rolePermissions: RolePermission[] | null
}

const initialState: RolePermissionState = {
  rolePermissionListAll: null,
  rolePermission: null,
  selectedRolePermission: null,
  isUpdated: false,
  isDelete: false,
  isOpen: false,
  isSaved: false,
  rolePermissions: null
}

export const rolePermissionReducers = createReducer(
  initialState,
  on(getRolesPermissions, (state)=>{
    return{...state, rolePermissionListAll: null, rolePermissions: null}
  }),
  on(getRolesPermissionsSuccess, (state, {payload}) => {
    return{...state, rolePermissionListAll:payload, rolePermissions: payload}
  }),
  on(getRolesPermissionsFail, (state, {payload}) => {
    return{...state, payload}
  }),
  on(getRolePermissionsById, (state) => {
    return { ...state, selectedRolePermission: null };
  }),
  on(getRolePermissionsByIdSuccess, (state, { payload }) => {
    return { ...state, selectedRolePermission: payload };
  }),
  on(getRolePermissionsByIdFail, (state, { payload }) => {
    return { ...state, error: payload };
  }),
  on(addRolePermissions, (state)=>{
    return{...state, rolePermission: null, isSaved: false, isOpen: true}
  }),
  on(addRolePermissionsSuccess, (state, {payload}) => {
    return{...state, rolePermission: payload, isSaved: true, isOpen: false}
  }),
  on(addRolePermissionsFail, (state, {payload}) => {
    return{...state, payload, isSaved: false, isOpen: false}
  }),
  on(updateRolePermissions, (state, {payload}) =>{
    return{...state, rolePermission: payload, isOpen: true}
  }),
  on(updateRolePermissionsSuccess, (state, {payload}) =>{
    return{...state, rolePermission: payload, isUpdated: true, isOpen: false}
  }),
  on(updateRolePermissionsFail, (state, {payload}) =>{
    return{...state, payload, isUpdated: false, isOpen: false}
  }),
  on(deleteRolePermissions, (state, {payload}) =>{
    return{...state, rolePermission: payload, isOpen: true}
  }),
  on(deleteRolePermissionsSuccess, (state, {payload}) =>{
    return{...state, rolePermission: payload, isDelete: true, isOpen: false }
  }),
  on(deleteRolePermissionsFail, (state, {payload}) =>{
    return{...state,  payload, isDelete: false}
  }),
  on(showAddFormRolePermissions, (state) =>{
    return {...state, isOpen: true}
  }),
  on(hideAddFormRolePermissions, (state) => {
    return {...state, isOpen: false}
  })
)

export const listAll = (state : RolePermissionState) => state.rolePermissions;
export const rolePermissionIsUpdate = (state: RolePermissionState) => state.isUpdated;
export const rolePermissionIsDelete = (state: RolePermissionState) => state.isDelete;


