import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of, tap} from "rxjs";
import {Injectable} from "@angular/core";
import {ClientContactService} from "../../app/services/client-contact.service";
import {
  addClientContact,
  addClientContactFail,
  addClientContactSuccess,
  deleteClientContact, deleteClientContactFail,
  deleteClientContactSuccess,
  editClientContact,
  editClientContactFail,
  editClientContactSuccess,
  getAllClientsContacts,
  getClientsContactsFail,
  getClientsContactsSuccess
} from "../actions/client-contact.actions";


@Injectable()
export class ClientContactEffects{
  constructor(private clientContactService: ClientContactService, private actions$: Actions) {


  }
  getAllClientContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllClientsContacts),
      exhaustMap(() =>
        this.clientContactService.readAll().pipe(
          map((response) => {
            console.log('Response from server:', response);
            return getClientsContactsSuccess({payload: response});
          }),
          catchError((error) => {
            console.error('Error while fetching client contacts:', error);
            return of(getClientsContactsFail({payload: error}));
          })
        )
      )
    )
  );

  addClientContact = createEffect(() =>
    this.actions$.pipe(
      ofType(addClientContact),
      exhaustMap((action) =>
        this.clientContactService.createContactClient(action.payload).pipe(
          map(contact=> addClientContactSuccess({payload: contact})),
          catchError((error) => of (addClientContactFail ({payload: error})))
        )
      )
    )
  )

  editClientContact = createEffect(() =>
    this.actions$.pipe(
      ofType(editClientContact),
      exhaustMap((action) =>
        this.clientContactService.edit(action.payload).pipe(
          map(contact=> editClientContactSuccess({payload: contact})),
          catchError((error) => of (editClientContactFail ({payload: error})))
        )
      )
    )
  )

  deleteClientContact = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteClientContact),
      exhaustMap((action) =>
        this.clientContactService.delete(action.payload).pipe(
          map(contact=> deleteClientContactSuccess({payload: contact})),
          catchError((error) => of (deleteClientContactFail ({payload: error})))
        )
      )
    )
  )

}
