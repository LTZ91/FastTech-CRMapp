import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {Injectable} from "@angular/core";
import {InterventionReportService} from "../../app/services/intervention-report.service";
import {
  addInterventionReport,
  addInterventionReportFail,
  addInterventionReportSuccess, deleteInterventionReport, deleteInterventionReportFail, deleteInterventionReportSuccess,
  editInterventionReport, editInterventionReportFail,
  editInterventionReportSuccess,
  getAllInterventionReport,
  getInterventionReportFail,
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

  editInterventionReport = createEffect(() =>
    this.actions$.pipe(
      ofType(editInterventionReport),
      exhaustMap((action) =>
        this.interventionReportService.edit(action.payload).pipe(
          map(intReport=> editInterventionReportSuccess({payload: intReport})),
          catchError((error) => of (editInterventionReportFail ({payload: error})))
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
