import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {Injectable} from "@angular/core";
import {ClientService} from "../../app/services/client.service";
import {
  addClient,
  addClientFail,
  addClientSuccess, deleteClient, deleteClientFail, deleteClientSuccess, editClient, editClientFail, editClientSuccess,
  getAllClients,
  getClientFail,
  getClientSuccess
} from "../actions/client.actions";

@Injectable()
export class ClientEffects{
  constructor(private clientService: ClientService, private actions$: Actions) {


  }
  getAllClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllClients),
      exhaustMap(() =>
        this.clientService.readAll().pipe(
          // tap(response => console.log('Response from userService.readAll:', response)),
          map((response) => getClientSuccess({payload: response}),
            catchError((error) => of (getClientFail ({payload: error})))
          )
        )
      )
    ))

  addClient = createEffect(() =>
    this.actions$.pipe(
      ofType(addClient),
      exhaustMap((action) =>
        this.clientService.createClient(action.payload).pipe(
          map(client=> addClientSuccess({payload: client})),
          catchError((error) => of (addClientFail ({payload: error})))
        )
      )
    )
  )

  editClient = createEffect(() =>
    this.actions$.pipe(
      ofType(editClient),
      exhaustMap((action) =>
        this.clientService.edit(action.payload).pipe(
          map(client=> editClientSuccess({payload: client})),
          catchError((error) => of (editClientFail ({payload: error})))
        )
      )
    )
  )

  deleteClient = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteClient),
      exhaustMap((action) =>
        this.clientService.delete(action.payload).pipe(
          map(client=> deleteClientSuccess({payload: client})),
          catchError((error) => of (deleteClientFail ({payload: error})))
        )
      )
    )
  )

}
