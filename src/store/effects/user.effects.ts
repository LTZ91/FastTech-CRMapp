import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  addUser, addUserFail,
  addUserSuccess,
  deleteUser, deleteUserFail, deleteUserSuccess,
  editUser, editUserFail, editUserSuccess,
  getAllUser,
  getUserFail,
  getUserSuccess
} from "../actions/user.actions";
import {catchError, exhaustMap, map, of, tap} from "rxjs";
import {Injectable} from "@angular/core";
import {UserService} from "../../app/services/user.service";

@Injectable()
export class UserEffects{
  constructor(private userService: UserService, private actions$: Actions) {


  }
  getAllUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllUser),
      exhaustMap(() =>
        this.userService.readAll().pipe(
          map((response) => getUserSuccess({payload: response}),
            catchError((error) => of (getUserFail ({payload: error})))
          )
        )
      )
    ))

  addUser = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      exhaustMap((action) =>
        this.userService.createUser(action.payload).pipe(
          map(user=> addUserSuccess({payload: user})),
          catchError((error) => of (addUserFail ({payload: error})))
        )
      )
    )
  )

  editUser = createEffect(() =>
    this.actions$.pipe(
      ofType(editUser),
      exhaustMap((action) =>
        this.userService.edit(action.payload).pipe(
          map(user=> editUserSuccess({payload: user})),
          catchError((error) => of (editUserFail ({payload: error})))
        )
      )
    )
  )

  deleteUser = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      exhaustMap((action) =>
        this.userService.deleteUser(action.payload).pipe(
          map(user=> deleteUserSuccess({payload: user})),
          catchError((error) => of (deleteUserFail ({payload: error})))
        )
      )
    )
  )

}
