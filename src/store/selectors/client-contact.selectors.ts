import {createFeatureSelector, createSelector} from "@ngrx/store";
import { listAll} from "../reducers/client-contact.reducers";
import {clientContactIsDelete, clientContactIsUpdate, ClientContactState} from "../reducers/client-contact.reducers";

export const CLIENT_CONTACT_STATE_NAME = 'clientContact'
export const clientContactState = createFeatureSelector<ClientContactState>(CLIENT_CONTACT_STATE_NAME);
export const selectAllClientsContacts  = createSelector(
  clientContactState,
  listAll
)

export const selectClientContactUpdate = createSelector(
  clientContactState,
  clientContactIsUpdate
)
export const selectAllClientsContactsUpdate = createSelector(
  clientContactState,
  state => state.isUpdated
)

export  const selectClientContactDelete = createSelector(
  clientContactState,
  clientContactIsDelete
)
export  const selectAllClientContactDelete = createSelector(
  clientContactState,
  state => state.isDelete
)
export const selectClientContactIsOpen = createSelector(
  clientContactState,
  state => state.isOpen
)

export const selectClientContactIsSaved = createSelector(
  clientContactState,
  state => state.isSaved
)
