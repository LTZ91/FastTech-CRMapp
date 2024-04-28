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
  getAllInterventionRequest,
  getInterventionRequestFail,
  getInterventionRequestSuccess
} from "../actions/intervention-request.actions";

@Injectable()
export class InterventionRequestEffects{
  constructor(private interventionRequestService: InterventionRequestService, private actions$: Actions) {


  }
  getAllInterventionsRequests$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllInterventionRequest),
      exhaustMap(() =>
        this.interventionRequestService.readAll().pipe(
          map((response) => getInterventionRequestSuccess({payload: response}),
            catchError((error) => of (getInterventionRequestFail ({payload: error})))
          )
        )
      )
    ))

  addInterventionRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(addInterventionRequest),
      exhaustMap((action) =>
        this.interventionRequestService.createInterventionRequest(action.payload).pipe(
          map(intRequest=> addInterventionRequestSuccess({payload: intRequest})),
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
          map(intRequest=> editInterventionRequestSuccess({payload: intRequest})),
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
          map(intRequest=> deleteInterventionRequestSuccess({payload: intRequest})),
          catchError((error) => of (deleteInterventionRequestFail ({payload: error})))
        )
      )
    )
  )

}
