import {createFeatureSelector, createSelector} from "@ngrx/store";
import { listAll} from "../reducers/role-permissions.reducers";
import {
  rolePermissionIsDelete,
  rolePermissionIsUpdate,
  RolePermissionState
} from "../reducers/role-permissions.reducers";

export const CREATE_ROLE_PERMISSION = 'role_permission'
export const rolePermissionState = createFeatureSelector<RolePermissionState>(CREATE_ROLE_PERMISSION);
export const selectAllRolePermission  = createSelector(
  rolePermissionState,
  listAll
)

export const selectRolePermissionsUpdate = createSelector(
  rolePermissionState,
  rolePermissionIsUpdate
)
export const selectAllRolePermissionUpdate = createSelector(
  rolePermissionState,
  state => state.isUpdated
)

export  const selectRolePermissionDelete = createSelector(
  rolePermissionState,
  rolePermissionIsDelete
)
export  const selectAllRolePermissionDelete = createSelector(
  rolePermissionState,
  state => state.isDelete
)
export const selectRolePermissionIsOpen = createSelector(
  rolePermissionState,
  state => state.isOpen
)

export const selectRolePermissionIsSaved = createSelector(
  rolePermissionState,
  state => state.isSaved
)
