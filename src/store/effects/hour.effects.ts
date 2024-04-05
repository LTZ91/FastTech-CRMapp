import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {Injectable} from "@angular/core";
import {HourService} from "../../app/services/hour.service";
import {
  addHour,
  addHourFail,
  addHourSuccess, deleteHour, deleteHourFail, deleteHourSuccess, editHour, editHourFail, editHourSuccess,
  getAllHours,
  getHoursFail,
  getHoursSuccess
} from "../actions/hour.actions";

@Injectable()
export class HourEffects{
  constructor(private hourService: HourService, private actions$: Actions) {


  }
  getAllHours$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllHours),
      exhaustMap(() =>
        this.hourService.readAll().pipe(
          map((response) => getHoursSuccess({payload: response}),
            catchError((error) => of (getHoursFail ({payload: error})))
          )
        )
      )
    ))

  addHour = createEffect(() =>
    this.actions$.pipe(
      ofType(addHour),
      exhaustMap((action) =>
        this.hourService.createHour(action.payload).pipe(
          map(hour=> addHourSuccess({payload: hour})),
          catchError((error) => of (addHourFail ({payload: error})))
        )
      )
    )
  )

  editHour = createEffect(() =>
    this.actions$.pipe(
      ofType(editHour),
      exhaustMap((action) =>
        this.hourService.edit(action.payload).pipe(
          map(hour=> editHourSuccess({payload: hour})),
          catchError((error) => of (editHourFail ({payload: error})))
        )
      )
    )
  )

  deleteHour = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteHour),
      exhaustMap((action) =>
        this.hourService.delete(action.payload).pipe(
          map(hour=> deleteHourSuccess({payload: hour})),
          catchError((error) => of (deleteHourFail ({payload: error})))
        )
      )
    )
  )

}
