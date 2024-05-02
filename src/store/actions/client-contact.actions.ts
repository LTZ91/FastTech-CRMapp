import {createAction, props} from "@ngrx/store";
import {ClientContact} from "../../app/models/client-contact";

export const getAllClientsContacts = createAction('[CLIENT_CONTACT] Get all Client Contacts')
export const getClientsContactsSuccess = createAction('[CLIENT_CONTACT] Get all Clients Contacts Success', props<{payload: ClientContact[]}>())
export const getClientsContactsFail = createAction('[CLIENT_CONTACT] Get all Clients Contacts Fail', props<{payload: any}>())


export const addClientContact = createAction('[CLIENT_CONTACT] Add Client Contact', props<{payload: ClientContact}>())
export const addClientContactSuccess = createAction('[CLIENT_CONTACT] Add Client Contact Success', props<{payload: ClientContact}>() )
export const addClientContactFail = createAction('[CLIENT_CONTACT] Add Client Contact Fail', props<{payload: any}>())

export const editClientContact = createAction('[CLIENT_CONTACT] Edit Client Contact ', props<{payload: ClientContact}>())
export const editClientContactSuccess = createAction('[CLIENT_CONTACT] Edit Client Contact Success', props<{payload:ClientContact}>())
export const editClientContactFail = createAction('[CLIENT_CONTACT] Edit Client Contact Fail', props<{payload: any}>())

export const deleteClientContact = createAction('[CLIENT_CONTACT] Delete Client Contact', props<{payload: ClientContact}>())
export const deleteClientContactSuccess = createAction('[CLIENT_CONTACT] Delete Client Contact Success', props<{payload: ClientContact}>())
export const deleteClientContactFail = createAction('[CLIENT_CONTACT] Delete Client Contact Fail', props<{payload: any}>())

export const showDialog = createAction('[CLIENT_CONTACT], Show Dialog')
export const hideDialog = createAction('[CLIENT_CONTACT], Hide Dialog')
