import {createFeatureSelector, createSelector} from "@ngrx/store";
import { listAll} from "../reducers/client-contact.reducers";
import {clientContactIsDelete, clientContactIsUpdate, ClientContactState} from "../reducers/client-contact.reducers";

export const CREATE_CLIENT_CONTACT = 'client-contact'
export const clientContactState = createFeatureSelector<ClientContactState>(CREATE_CLIENT_CONTACT);
export const selectAllClientsContact  = createSelector(
  clientContactState,
  listAll
)

export const selectClientContactsUpdate = createSelector(
  clientContactState,
  clientContactIsUpdate
)
export const selectAllClientContactUpdate = createSelector(
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
