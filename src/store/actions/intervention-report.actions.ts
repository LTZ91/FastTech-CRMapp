import {createAction, props} from "@ngrx/store";
import {InterventionReport} from "../../app/models/intervention-report";

export const getAllInterventionReport = createAction('[INTERVENTION_REPORT] Get all Intervention Report')
export const getInterventionReportSuccess = createAction('[INTERVENTION_REPORT] Get all Intervention Report Success', props<{payload: InterventionReport[]}>())
export const getInterventionReportFail = createAction('[INTERVENTION_REPORT] Get all Intervention Report Fail', props<{payload: any}>())

export const getInterventionReportById = createAction('[INTERVENTION_REPORT] GET Interventions Report BY ID', props<{ payload: number }>());
export const getInterventionReportByIdFail = createAction('[INTERVENTION_REPORT] GET Interventions Report BY ID FAIL', props<{ payload: any }>());
export const getInterventionReportByIdSuccess = createAction('[INTERVENTION_REPORT] GET Interventions Report BY ID SUCCESS', props<{ payload: InterventionReport }>());

export const addInterventionReport = createAction('[INTERVENTION_REPORT] Add Intervention Report', props<{payload: InterventionReport}>())
export const addInterventionReportSuccess = createAction('[INTERVENTION_REPORT] Add Intervention Report Success', props<{payload: InterventionReport}>() )
export const addInterventionReportFail = createAction('[INTERVENTION_REPORT] Add Intervention Report Fail', props<{payload: any}>())

export const closeInterventionReport = createAction('[INTERVENTION_REPORT] Edit Intervention Report ', props<{payload: InterventionReport}>())
export const closeInterventionReportSuccess = createAction('[INTERVENTION_REPORT] Edit Intervention Report Success', props<{payload:InterventionReport}>())
export const closeInterventionReportFail = createAction('[INTERVENTION_REPORT] Edit Intervention Report Fail', props<{payload: any}>())

export const deleteInterventionReport = createAction('[INTERVENTION_REPORT] Delete Intervention Report', props<{payload: InterventionReport}>())
export const deleteInterventionReportSuccess = createAction('[INTERVENTION_REPORT] Delete Intervention Report Success', props<{payload: InterventionReport}>())
export const deleteInterventionReportFail = createAction('[INTERVENTION_REPORT] Delete Intervention Report Fail', props<{payload: any}>())

export const showDialog = createAction('[INTERVENTION_REPORT], Show Dialog')
export const hideDialog = createAction('[INTERVENTION_REPORT], Hide Dialog')
