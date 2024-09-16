import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {Injectable} from "@angular/core";
import {ServicesProvidedService} from "../../app/services/services-provided.service";
import {
  addService,
  addServiceFail,
  addServiceSuccess,
  deleteService,
  deleteServiceFail,
  deleteServiceSuccess,
  editService,
  editServiceFail,
  editServiceSuccess,
  getAllServices,
  getServicesFail,
  getServicesSuccess
} from "../actions/services-provided.actions";

@Injectable()
export class ServicesProvidedEffects{
  constructor(private servicesProvidedService: ServicesProvidedService, private actions$: Actions) {


  }
  getAllServices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllServices),
      exhaustMap(() =>
        this.servicesProvidedService.readAll().pipe(
          // tap(response => console.log('Response from userService.readAll:', response)),
          map((response) => getServicesSuccess({payload: response}),
            catchError((error) => of (getServicesFail ({payload: error})))
          )
        )
      )
    ))

  addServices = createEffect(() =>
    this.actions$.pipe(
      ofType(addService),
      exhaustMap((action) =>
        this.servicesProvidedService.createServices(action.payload).pipe(
          map(services=> addServiceSuccess({payload: services})),
          catchError((error) => of (addServiceFail ({payload: error})))
        )
      )
    )
  )

  editServices = createEffect(() =>
    this.actions$.pipe(
      ofType(editService),
      exhaustMap((action) =>
        this.servicesProvidedService.edit(action.payload).pipe(
          map(services=> editServiceSuccess({payload: services})),
          catchError((error) => of (editServiceFail ({payload: error})))
        )
      )
    )
  )

  deleteService = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteService),
      exhaustMap((action) =>
        this.servicesProvidedService.delete(action.payload).pipe(
          map(services=> deleteServiceSuccess({payload: services})),
          catchError((error) => of (deleteServiceFail ({payload: error})))
        )
      )
    )
  )

}
