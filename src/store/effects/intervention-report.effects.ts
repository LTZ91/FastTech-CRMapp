import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {Injectable} from "@angular/core";
import {InterventionReportService} from "../../app/services/intervention-report.service";
import {
  addInterventionReport,
  addInterventionReportFail,
  addInterventionReportSuccess,
  cancelInterventionReport,
  cancelInterventionReportFail,
  cancelInterventionReportSuccess,
  closeInterventionReport,
  closeInterventionReportFail,
  closeInterventionReportSuccess,
  deleteInterventionReport,
  deleteInterventionReportFail,
  deleteInterventionReportSuccess,
  getAllInterventionReport,
  getInterventionReportByIntRequestId,
  getInterventionReportByIntRequestIdFail,
  getInterventionReportByIntRequestIdSuccess,
  getInterventionReportFail,
  getInterventionReportMailById,
  getInterventionReportMailByIdFail,
  getInterventionReportMailByIdSuccess,
  getInterventionReportSuccess
} from "../actions/intervention-report.actions";


@Injectable()
export class InterventionReportEffects{
  constructor(private interventionReportService: InterventionReportService, private actions$: Actions) {


  }
  getAllInterventionsReports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllInterventionReport),
      exhaustMap(() =>
        this.interventionReportService.readAll().pipe(
          map((response) => getInterventionReportSuccess({payload: response}),
            catchError((error) => of (getInterventionReportFail ({payload: error})))
          )
        )
      )
    ))

  getInterventionReportMailById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getInterventionReportMailById),
      exhaustMap((action) =>
        this.interventionReportService.sendInterventionReport(action.payload).pipe(
          map((response) => getInterventionReportMailByIdSuccess({ payload: response })),
          catchError((error) => of(getInterventionReportMailByIdFail({ payload: error })))
        )
      )
    )
  )

  getInterventionReportByIntRequestId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getInterventionReportByIntRequestId),
      exhaustMap((action) =>
        this.interventionReportService.getInterventionReportByIntRequestId(action.payload).pipe(
          map((response) => getInterventionReportByIntRequestIdSuccess({ payload: response })),
          catchError((error) => of(getInterventionReportByIntRequestIdFail({ payload: error })))
        )
      )
    )
  );
  addInterventionReport = createEffect(() =>
    this.actions$.pipe(
      ofType(addInterventionReport),
      exhaustMap((action) =>
        this.interventionReportService.createInterventionReport(action.payload).pipe(
          map(intReport=> addInterventionReportSuccess({payload: intReport})),
          catchError((error) => of (addInterventionReportFail ({payload: error})))
        )
      )
    )
  )

  closeInterventionReport = createEffect(() =>
    this.actions$.pipe(
      ofType(closeInterventionReport),
      exhaustMap((action) =>
        this.interventionReportService.edit(action.payload).pipe(
          map(intReport=> closeInterventionReportSuccess({payload: intReport})),
          catchError((error) => of (closeInterventionReportFail ({payload: error})))
        )
      )
    )
  )

  cancelInterventionReport = createEffect(() =>
    this.actions$.pipe(
      ofType(cancelInterventionReport),
      exhaustMap((action) =>
        this.interventionReportService.cancel(action.payload).pipe(
          map(intReport=> cancelInterventionReportSuccess({payload: intReport})),
          catchError((error) => of (cancelInterventionReportFail ({payload: error})))
        )
      )
    )
  )
  deleteInterventionReport = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteInterventionReport),
      exhaustMap((action) =>
        this.interventionReportService.delete(action.payload).pipe(
          map(intReport=> deleteInterventionReportSuccess({payload: intReport})),
          catchError((error) => of (deleteInterventionReportFail ({payload: error})))
        )
      )
    )
  )

}
