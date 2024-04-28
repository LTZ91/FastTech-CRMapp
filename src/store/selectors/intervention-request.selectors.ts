import {createFeatureSelector, createSelector} from "@ngrx/store";
import { listAll} from "../reducers/intervention-request.reducers";
import {
  interventionRequestIsDelete,
  interventionRequestIsUpdate,
  InterventionRequestState
} from "../reducers/intervention-request.reducers";

export const INTERVENTION_REQUEST_STATE_NAME = 'intervention-request'
export const interventionRequestState = createFeatureSelector<InterventionRequestState>(INTERVENTION_REQUEST_STATE_NAME);
export const selectAllInterventionRequest  = createSelector(
  interventionRequestState,
  listAll
)

export const selectInterventionRequestIsUpdate = createSelector(
  interventionRequestState,
  interventionRequestIsUpdate
)
export const selectAllInterventionRequestUpdate = createSelector(
  interventionRequestState,
  state => state.isUpdated
)

export  const selectInterventionRequestStateDelete = createSelector(
  interventionRequestState,
  interventionRequestIsDelete
)
export  const selectAllInterventionRequestDelete = createSelector(
  interventionRequestState,
  state => state.isDelete
)
export const selectInterventionRequestIsOpen = createSelector(
  interventionRequestState,
  state => state.isOpen
)

export const selectInterventionRequestStateIsSaved = createSelector(
  interventionRequestState,
  state => state.isSaved
)
