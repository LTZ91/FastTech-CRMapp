import {createFeatureSelector, createSelector} from "@ngrx/store";
import {InterventionReportState, listAll} from "../reducers/intervention-report.reducers";
import {interventionReportIsDelete, interventionReportIsUpdate} from "../reducers/intervention-report.reducers";

export const INTERVENTION_REPORT_STATE_NAME = 'intervention-report'
export const interventionReportState = createFeatureSelector<InterventionReportState>(INTERVENTION_REPORT_STATE_NAME);
export const selectAllInterventionReport  = createSelector(
  interventionReportState,
  listAll
)

export const selectInterventionReportIsUpdate = createSelector(
  interventionReportState,
  interventionReportIsUpdate
)
export const selectAllInterventionReportUpdate = createSelector(
  interventionReportState,
  state => state.isUpdated
)

export  const selectInterventionReportStateDelete = createSelector(
  interventionReportState,
  interventionReportIsDelete
)
export  const selectAllInterventionReportDelete = createSelector(
  interventionReportState,
  state => state.isDelete
)
export const selectInterventionReportIsOpen = createSelector(
  interventionReportState,
  state => state.isOpen
)

export const selectInterventionReportStateIsSaved = createSelector(
  interventionReportState,
  state => state.isSaved
)
