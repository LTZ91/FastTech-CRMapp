import {createAction, props} from "@ngrx/store";
import {Client} from "../../app/models/client";

export const getAllClients = createAction('[CLIENT] Get all Clients')
export const getClientSuccess = createAction('[CLIENT] Get all Clients Success', props<{payload: Client[]}>())
export const getClientFail = createAction('[CLIENT] Get all Clients Fail', props<{payload: any}>())


export const addClient = createAction('[CLIENT] Add Client', props<{payload: Client}>())
export const addClientSuccess = createAction('[CLIENT] Add Client Success', props<{payload: Client}>() )
export const addClientFail = createAction('[CLIENT] Add Client Fail', props<{payload: any}>())

export const editClient = createAction('[CLIENT] Edit Client ', props<{payload: Client}>())
export const editClientSuccess = createAction('[CLIENT] Edit Client Success', props<{payload:Client}>())
export const editClientFail = createAction('[CLIENT] Edit Client Fail', props<{payload: any}>())

export const deleteClient = createAction('[CLIENT] Delete Client', props<{payload: Client}>())
export const deleteClientSuccess = createAction('[CLIENT] Delete Client Success', props<{payload: Client}>())
export const deleteClientFail = createAction('[CLIENT] Delete Client Fail', props<{payload: any}>())

export const showDialog = createAction('[CLIENT], Show Dialog')
export const hideDialog = createAction('[CLIENT], Hide Dialog')
