import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {Injectable} from "@angular/core";
import {TechnicianService} from "../../app/services/technician.service";
import {
  addTechnician,
  addTechnicianFail,
  addTechnicianSuccess,
  deleteTechnician, deleteTechniciansFail,
  deleteTechnicianSuccess,
  editTechnician,
  editTechnicianFail,
  editTechnicianSuccess,
  getAllTechnicians,
  getTechnicianFail,
  getTechnicianSuccess
} from "../actions/technician.actions";

@Injectable()
export class TechnicianEffects{
  constructor(private technicianService: TechnicianService, private actions$: Actions) {


  }
  getAllTechnicians$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllTechnicians),
      exhaustMap(() =>
        this.technicianService.readAll().pipe(
          // tap(response => console.log('Response from userService.readAll:', response)),
          map((response) => getTechnicianSuccess({payload: response}),
            catchError((error) => of (getTechnicianFail ({payload: error})))
          )
        )
      )
    ))

  addTechnician = createEffect(() =>
    this.actions$.pipe(
      ofType(addTechnician),
      exhaustMap((action) =>
        this.technicianService.createTechnician(action.payload).pipe(
          map(technician=> addTechnicianSuccess({payload: technician})),
          catchError((error) => of (addTechnicianFail ({payload: error})))
        )
      )
    )
  )

  editTechnician = createEffect(() =>
    this.actions$.pipe(
      ofType(editTechnician),
      exhaustMap((action) =>
        this.technicianService.edit(action.payload).pipe(
          map(technician=> editTechnicianSuccess({payload: technician})),
          catchError((error) => of (editTechnicianFail ({payload: error})))
        )
      )
    )
  )

  deleteTechnician = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTechnician),
      exhaustMap((action) =>
        this.technicianService.delete(action.payload).pipe(
          map(technician=> deleteTechnicianSuccess({payload: technician})),
          catchError((error) => of (deleteTechniciansFail ({payload: error})))
        )
      )
    )
  )

}
