import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {Injectable} from "@angular/core";
import {RolePermissionService} from "../../../../../services/role-permission.service";
import {
  addRolePermissions,
  addRolePermissionsFail,
  addRolePermissionsSuccess,
  deleteRolePermissions, deleteRolePermissionsFail,
  deleteRolePermissionsSuccess, getRolePermissionsById, getRolePermissionsByIdFail, getRolePermissionsByIdSuccess,
  getRolesPermissions,
  getRolesPermissionsFail,
  getRolesPermissionsSuccess,
  updateRolePermissions,
  updateRolePermissionsFail,
  updateRolePermissionsSuccess
} from "../actions/role-permissions.actions";

@Injectable()
export class RolePermissionsEffects{
  constructor(private rolePermissionService: RolePermissionService, private actions$: Actions) {


  }
  getAllRolePermission$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRolesPermissions),
      exhaustMap(() =>
        this.rolePermissionService.readAll().pipe(
          map((response) => getRolesPermissionsSuccess({payload: response}),
            catchError((error) => of (getRolesPermissionsFail ({payload: error})))
          )
        )
      )
    ))

  getRolePermissionById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRolePermissionsById),
      exhaustMap((action) =>
        this.rolePermissionService.getRolePermissionById(action.payload).pipe(
          map((response) => getRolePermissionsByIdSuccess({ payload: response })),
          catchError((error) => of(getRolePermissionsByIdFail({ payload: error })))
        )
      )
    )
  );

  addRolePermission = createEffect(() =>
    this.actions$.pipe(
      ofType(addRolePermissions),
      exhaustMap((action) =>
        this.rolePermissionService.createRolePermission(action.payload).pipe(
          map(role=> addRolePermissionsSuccess({payload: role})),
          catchError((error) => of (addRolePermissionsFail ({payload: error})))
        )
      )
    )
  )

  editRolePermission = createEffect(() =>
    this.actions$.pipe(
      ofType(updateRolePermissions),
      exhaustMap((action) =>
        this.rolePermissionService.edit(action.payload).pipe(
          map(role=> updateRolePermissionsSuccess({payload: role})),
          catchError((error) => of (updateRolePermissionsFail ({payload: error})))
        )
      )
    )
  )

  deleteRolePermission = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteRolePermissions),
      exhaustMap((action) =>
        this.rolePermissionService.delete(action.payload).pipe(
          map(role=> deleteRolePermissionsSuccess({payload: role})),
          catchError((error) => of (deleteRolePermissionsFail ({payload: error})))
        )
      )
    )
  )

}
