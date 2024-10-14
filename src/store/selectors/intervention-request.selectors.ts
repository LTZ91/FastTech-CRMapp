import {createFeatureSelector, createSelector} from "@ngrx/store";
import {
  interventionRequestIsDelete,
  interventionRequestIsUpdate,
  listAll
} from "../reducers/intervention-request.reducers";
import {InterventionRequestState} from "../reducers/intervention-request.reducers";

export const INTERVENTION_REQUEST_STATE_NAME = 'interventionRequest'
export const interventionRequestState = createFeatureSelector<InterventionRequestState>(INTERVENTION_REQUEST_STATE_NAME);
export const selectAllInterventionsRequest  = createSelector(
  interventionRequestState,
  listAll
)

export const selectAllInterventionsRequestClosed  = createSelector(
  interventionRequestState,
  listAll
)

export const selectAllInterventionsRequestOpen  = createSelector(
  interventionRequestState,
  listAll
)

export const selectAllInterventionsRequestAwaiting  = createSelector(
  interventionRequestState,
  listAll
)

export const selectAllInterventionsRequestInProgress  = createSelector(
  interventionRequestState,
  listAll
)

export const selectInterventionsRequestUpdate = createSelector(
  interventionRequestState,
  interventionRequestIsUpdate
)
export const selectAllInterventionRequestUpdate = createSelector(
  interventionRequestState,
  state => state.isUpdated
)

export  const selectInterventionRequestDelete = createSelector(
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

export const selectInterventionRequestIsSaved = createSelector(
  interventionRequestState,
  state => state.isSaved
)

export const selectInterventionRequestById = createSelector(
  interventionRequestState,
  state => state.interventionRequest
);
