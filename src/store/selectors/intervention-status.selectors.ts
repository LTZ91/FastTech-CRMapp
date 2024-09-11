import {createFeatureSelector, createSelector} from "@ngrx/store";
import {
  listAll
} from "../reducers/intervention-status.reducers";
import {
  interventionStatusIsDelete,
  interventionStatusIsUpdate,
  InterventionStatusState
} from "../reducers/intervention-status.reducers";

export const INTERVENTION_STATUS_STATE_NAME = 'interventionStatus'
export const interventionStatusState = createFeatureSelector<InterventionStatusState>(INTERVENTION_STATUS_STATE_NAME);
export const selectAllInterventionsStatus  = createSelector(
  interventionStatusState,
  listAll
)

export const selectInterventionsStatusUpdate = createSelector(
  interventionStatusState,
  interventionStatusIsUpdate
)
export const selectAllInterventionsStatusUpdate = createSelector(
  interventionStatusState,
  state => state.isUpdated
)

export  const selectInterventionStatusDelete = createSelector(
  interventionStatusState,
  interventionStatusIsDelete
)
export  const selectAllInterventionStatusDelete = createSelector(
  interventionStatusState,
  state => state.isDelete
)
export const selectInterventionStatusIsOpen = createSelector(
  interventionStatusState,
  state => state.isOpen
)

export const selectInterventionStatusIsSaved = createSelector(
  interventionStatusState,
  state => state.isSaved
)

export const selectInterventionStatusById = createSelector(
  interventionStatusState,
  state => state.selectedInterventionStatus
);
