import {createFeatureSelector, createSelector} from "@ngrx/store";
import { listAll} from "../reducers/services-provided.reducers";
import {serviceIsDelete, serviceIsUpdate, ServiceState} from "../reducers/services-provided.reducers";

export const CREATE_SERVICES = 'service'
export const serviceState = createFeatureSelector<ServiceState>(CREATE_SERVICES);
export const selectAllServices  = createSelector(
  serviceState,
  listAll
)

export const selectServiceUpdate = createSelector(
  serviceState,
  serviceIsUpdate
)
export const selectAllClientUpdate = createSelector(
  serviceState,
  state => state.isUpdated
)

export  const selectServiceDelete = createSelector(
  serviceState,
  serviceIsDelete
)
export  const selectAllServiceDelete = createSelector(
  serviceState,
  state => state.isDelete
)
export const selectServiceIsOpen = createSelector(
  serviceState,
  state => state.isOpen
)

export const selectServiceIsSaved = createSelector(
  serviceState,
  state => state.isSaved
)
