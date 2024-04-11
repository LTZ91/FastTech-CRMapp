import {createFeatureSelector, createSelector} from "@ngrx/store";
import { listAll} from "../reducers/client.reducers";
import {clientIsDelete, clientIsUpdate, ClientState} from "../reducers/client.reducers";

export const CREATE_CLIENT = 'client'
export const clientState = createFeatureSelector<ClientState>(CREATE_CLIENT);
export const selectAllClients  = createSelector(
  clientState,
  // state => state.
  listAll
)

export const selectClientsUpdate = createSelector(
  clientState,
  clientIsUpdate
)
export const selectAllClientUpdate = createSelector(
  clientState,
  state => state.isUpdated
)

export  const selectClientDelete = createSelector(
  clientState,
  clientIsDelete
)
export  const selectAllClientDelete = createSelector(
  clientState,
  state => state.isDelete
)
export const selectClientIsOpen = createSelector(
  clientState,
  state => state.isOpen
)

export const selectClientIsSaved = createSelector(
  clientState,
  state => state.isSaved
)
