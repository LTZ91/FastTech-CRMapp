import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {InterventionStatusService} from "../../app/services/intervention-status.service";
import {
  getAllStatus,
  getAllStatusFail,
  getAllStatusSuccess,
  getStatusById, getStatusByIdFail, getStatusByIdSuccess
} from "../actions/intervention-status.actions";

@Injectable()
export class InterventionStatusEffects {
  constructor(private interventionStatusService: InterventionStatusService, private actions$: Actions) {


  }

  getAllStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllStatus),
      exhaustMap(() =>
        this.interventionStatusService.readAll().pipe(
          // tap(response => console.log('Response from userService.readAll:', response)),
          map((response) => getAllStatusSuccess({payload: response}),
            catchError((error) => of(getAllStatusFail({payload: error})))
          )
        )
      )
    ))

  getStatusById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStatusById),
      exhaustMap((action) =>
        this.interventionStatusService.getInterventionStatusById(action.payload).pipe(
          map((response) => getStatusByIdSuccess({payload: response})),
          catchError((error) => of(getStatusByIdFail({payload: error})))
        )
      )
    )
  );
}
