import {createAction, props} from "@ngrx/store";
import {InterventionReport} from "../../app/models/intervention-report";
import {InterventionReportPdf} from "../../app/models/intervention-report-pdf";
import {InterventionRequest} from "../../app/models/intervention-request";

export const getAllInterventionReport = createAction('[INTERVENTION_REPORT] Get all Intervention Report')
export const getInterventionReportSuccess = createAction('[INTERVENTION_REPORT] Get all Intervention Report Success', props<{payload: InterventionReport[]}>())
export const getInterventionReportFail = createAction('[INTERVENTION_REPORT] Get all Intervention Report Fail', props<{payload: any}>())

export const getInterventionReportById = createAction('[INTERVENTION_REPORT] GET Interventions Report BY ID', props<{ payload: number }>());
export const getInterventionReportByIdFail = createAction('[INTERVENTION_REPORT] GET Interventions Report BY ID FAIL', props<{ payload: any }>());
export const getInterventionReportByIdSuccess = createAction('[INTERVENTION_REPORT] GET Interventions Report BY ID SUCCESS', props<{ payload: InterventionReport }>());

export const getInterventionReportByIntRequestId = createAction(
  '[INTERVENTION_REPORT] GET Interventions Report BY  IntRequestID', props<{ payload: InterventionReport }>());
export const getInterventionReportByIntRequestIdFail = createAction(
  '[INTERVENTION_REPORT] GET Interventions Report BY IntRequestID FAIL', props<{ payload: any }>());
export const getInterventionReportByIntRequestIdSuccess = createAction(
  '[INTERVENTION_REPORT] GET Interventions Report BY IntRequestID SUCCESS', props<{ payload: InterventionReport  }>());



export const getInterventionReportMailById = createAction('[INTERVENTION_REPORT] GET Interventions Report Mail BY ID', props<{ payload: number }>());
export const getInterventionReportMailByIdFail = createAction('[INTERVENTION_REPORT] GET Interventions Report Mail BY ID FAIL', props<{ payload: any }>());
export const getInterventionReportMailByIdSuccess = createAction('[INTERVENTION_REPORT] GET Interventions Report Mail BY ID SUCCESS', props<{ payload: InterventionReportPdf }>());


export const addInterventionReport = createAction('[INTERVENTION_REPORT] Add Intervention Report', props<{payload: InterventionReport}>())
export const addInterventionReportSuccess = createAction('[INTERVENTION_REPORT] Add Intervention Report Success', props<{payload: InterventionReport}>() )
export const addInterventionReportFail = createAction('[INTERVENTION_REPORT] Add Intervention Report Fail', props<{payload: any}>())

export const closeInterventionReport = createAction('[INTERVENTION_REPORT] Close Intervention Report ', props<{payload: InterventionReport}>())
export const closeInterventionReportSuccess = createAction('[INTERVENTION_REPORT] Close Intervention Report Success', props<{payload:InterventionReport}>())
export const closeInterventionReportFail = createAction('[INTERVENTION_REPORT] Close Intervention Report Fail', props<{payload: any}>())

export const cancelInterventionReport = createAction('[INTERVENTION_REPORT] Cancel Intervention Report ', props<{payload: number}>())
export const cancelInterventionReportSuccess = createAction('[INTERVENTION_REPORT] Cancel Intervention Report Success', props<{payload:InterventionReport}>())
export const cancelInterventionReportFail = createAction('[INTERVENTION_REPORT] Cancel Intervention Report Fail', props<{payload: any}>())

export const deleteInterventionReport = createAction('[INTERVENTION_REPORT] Delete Intervention Report', props<{payload: InterventionReport}>())
export const deleteInterventionReportSuccess = createAction('[INTERVENTION_REPORT] Delete Intervention Report Success', props<{payload: InterventionReport}>())
export const deleteInterventionReportFail = createAction('[INTERVENTION_REPORT] Delete Intervention Report Fail', props<{payload: any}>())

export const showDialog = createAction('[INTERVENTION_REPORT], Show Dialog')
export const hideDialog = createAction('[INTERVENTION_REPORT], Hide Dialog')
