import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {Injectable} from "@angular/core";
import {InterventionRequestService} from "../../app/services/intervention-request.service";
import {
  addInterventionRequest,
  addInterventionRequestFail,
  addInterventionRequestSuccess,
  deleteInterventionRequest,
  deleteInterventionRequestFail,
  deleteInterventionRequestSuccess,
  editInterventionRequest,
  editInterventionRequestFail,
  editInterventionRequestSuccess,
  getAllInterventionsRequest,
  getInterventionRequestById,
  getInterventionRequestByIdFail,
  getInterventionRequestByIdSuccess,
  getInterventionsRequestFail,
  getInterventionsRequestSuccess
} from "../actions/intervention-request.actions";


@Injectable()
export class InterventionRequestEffects{
  constructor(private interventionRequestService: InterventionRequestService, private actions$: Actions) {


  }
  getAllInterventionsRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllInterventionsRequest),
      exhaustMap(() =>
        this.interventionRequestService.readAll().pipe(
          // tap(response => console.log('Response from userService.readAll:', response)),
          map((response) => getInterventionsRequestSuccess({payload: response}),
            catchError((error) => of (getInterventionsRequestFail ({payload: error})))
          )
        )
      )
    ))

  getInterventionRequestById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getInterventionRequestById),
      exhaustMap((action) =>
        this.interventionRequestService.getInterventionRequestById(action.payload).pipe(
          map((response) => getInterventionRequestByIdSuccess({ payload: response })),
          catchError((error) => of(getInterventionRequestByIdFail({ payload: error })))
        )
      )
    )
  );
  addInterventionsRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(addInterventionRequest),
      exhaustMap((action) =>
        this.interventionRequestService.createInterventionRequest(action.payload).pipe(
          map(request=> addInterventionRequestSuccess({payload: request})),
          catchError((error) => of (addInterventionRequestFail ({payload: error})))
        )
      )
    )
  )

  editInterventionRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(editInterventionRequest),
      exhaustMap((action) =>
        this.interventionRequestService.edit(action.payload).pipe(
          map(request=> editInterventionRequestSuccess({payload: request})),
          catchError((error) => of (editInterventionRequestFail ({payload: error})))
        )
      )
    )
  )

  deleteInterventionRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteInterventionRequest),
      exhaustMap((action) =>
        this.interventionRequestService.delete(action.payload).pipe(
          map(request=> deleteInterventionRequestSuccess({payload: request})),
          catchError((error) => of (deleteInterventionRequestFail ({payload: error})))
        )
      )
    )
  )

}
