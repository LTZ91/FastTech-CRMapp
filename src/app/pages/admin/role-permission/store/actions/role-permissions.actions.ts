import { createAction, props } from '@ngrx/store';
import {RolePermission} from "../../../../../models/role-permission";


export const getRolesPermissions = createAction('[Role_Permissions] GET ALL Roles Permission');
export const getRolesPermissionsFail = createAction('[Role_Permissions] GET ALL Roles Permission FAIL', props<{ payload: any }>());
export const getRolesPermissionsSuccess = createAction('[Role_Permissions] GET ALL Role Permission SUCCESS', props<{ payload: RolePermission[] }>());

export const addRolePermissions = createAction('[Role_Permissions] ADD Role Permission', props<{ payload: RolePermission }>());
export const addRolePermissionsFail = createAction('[Role_Permissions] ADD Role Permission FAIL', props<{ payload: any }>());
export const addRolePermissionsSuccess = createAction('[Role_Permissions] ADD Role Permission SUCCESS', props<{ payload: RolePermission }>());

export const getRolePermissionsById = createAction('[Role_Permissions] GET Role Permission BY ID', props<{ payload: number }>());
export const getRolePermissionsByIdFail = createAction('[Role_Permissions] GET Role Permission BY ID FAIL', props<{ payload: any }>());
export const getRolePermissionsByIdSuccess = createAction('[Role_Permissions] GET Role Permission BY ID SUCCESS', props<{ payload: RolePermission }>());

export const updateRolePermissions = createAction('[Role_Permissions] UPDATE Role Permission', props<{ payload: RolePermission }>());
export const updateRolePermissionsFail = createAction('[Role_Permissions] UPDATE Role Permission FAIL', props<{ payload: any }>());
export const updateRolePermissionsSuccess = createAction('[Role_Permissions] UPDATE Role Permission SUCCESS', props<{ payload: RolePermission }>());

export const deleteRolePermissions = createAction('[Role_Permissions] DELETE Role Permission', props<{ payload: RolePermission }>());
export const deleteRolePermissionsFail = createAction('[Role_Permissions] DELETE Role Permission FAIL', props<{ payload: any }>());
export const deleteRolePermissionsSuccess = createAction('[Role_Permissions] DELETE Role Permission SUCCESS', props<{ payload: RolePermission }>());

export const showAddFormRolePermissions = createAction('[Role_Permissions] SHOW ADD FORM');
export const hideAddFormRolePermissions = createAction('[Role_Permissions] HIDE ADD FORM');
