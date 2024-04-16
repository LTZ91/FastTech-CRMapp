import {createFeatureSelector, createSelector} from "@ngrx/store";
import { listAll} from "../reducers/technician.reducers";
import {
  technicianIsDelete,
  technicianIsUpdate,
  TechnicianState
} from "../reducers/technician.reducers";

export const CREATE_TECHNICIAN = 'technician'
export const technicianState = createFeatureSelector<TechnicianState>(CREATE_TECHNICIAN);
export const selectAllTechnicians  = createSelector(
  technicianState,
  // state => state.
  listAll
)

export const selectTechnicianUpdate = createSelector(
  technicianState,
  technicianIsUpdate
)
export const selectAllTechnicianUpdate = createSelector(
  technicianState,
  state => state.isUpdated
)

export  const selectTechnicianDelete = createSelector(
  technicianState,
  technicianIsDelete
)
export  const selectAllTechnicianDelete = createSelector(
  technicianState,
  state => state.isDelete
)
export const selectTechnicianIsOpen = createSelector(
  technicianState,
  state => state.isOpen
)

export const selectTechnicianIsSaved = createSelector(
  technicianState,
  state => state.isSaved
)
