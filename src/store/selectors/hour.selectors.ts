import {createFeatureSelector, createSelector} from "@ngrx/store";
import { listAll} from "../reducers/hour.reducers";
import {hourIsDelete, hourIsUpdate, HourState} from "../reducers/hour.reducers";

export const CREATE_HOUR = 'hour'
export const hourState = createFeatureSelector<HourState>(CREATE_HOUR);
export const selectAllHours  = createSelector(
  hourState,
  listAll
)

export const selectHourUpdate = createSelector(
  hourState,
  hourIsUpdate
)
export const selectAllHourUpdate = createSelector(
  hourState,
  state => state.isUpdated
)

export  const selectHourDelete = createSelector(
  hourState,
  hourIsDelete
)
export  const selectAllHourDelete = createSelector(
  hourState,
  state => state.isDelete
)
export const selectHourIsOpen = createSelector(
  hourState,
  state => state.isOpen
)

export const selectHourIsSaved = createSelector(
  hourState,
  state => state.isSaved
)
