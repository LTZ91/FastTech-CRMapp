import {createAction, props} from "@ngrx/store";
import {InterventionRequest} from "../../app/models/intervention-request";

export const getAllInterventionRequest = createAction('[INTERVENTION_REQUEST] Get all Intervention Request')
export const getInterventionRequestSuccess = createAction('[INTERVENTION_REQUEST] Get all Intervention Request Success', props<{payload: InterventionRequest[]}>())
export const getInterventionRequestFail = createAction('[INTERVENTION_REQUEST] Get all Intervention Request Fail', props<{payload: any}>())


export const addInterventionRequest = createAction('[INTERVENTION_REQUEST] Add Intervention Request', props<{payload: InterventionRequest}>())
export const addInterventionRequestSuccess = createAction('[INTERVENTION_REQUEST] Add Intervention Request Success', props<{payload: InterventionRequest}>() )
export const addInterventionRequestFail = createAction('[INTERVENTION_REQUEST] Add Intervention Request Fail', props<{payload: any}>())

export const editInterventionRequest = createAction('[INTERVENTION_REQUEST] Edit Intervention Request ', props<{payload: InterventionRequest}>())
export const editInterventionRequestSuccess = createAction('[INTERVENTION_REQUEST] Edit Intervention Request Success', props<{payload:InterventionRequest}>())
export const editInterventionRequestFail = createAction('[INTERVENTION_REQUEST] Edit Intervention Request Fail', props<{payload: any}>())

export const deleteInterventionRequest = createAction('[INTERVENTION_REQUEST] Delete Intervention Request', props<{payload: InterventionRequest}>())
export const deleteInterventionRequestSuccess = createAction('[INTERVENTION_REQUEST] Delete Intervention Request Success', props<{payload: InterventionRequest}>())
export const deleteInterventionRequestFail = createAction('[INTERVENTION_REQUEST] Delete Intervention Request Fail', props<{payload: any}>())

export const showDialog = createAction('[INTERVENTION_REQUEST], Show Dialog')
export const hideDialog = createAction('[INTERVENTION_REQUEST], Hide Dialog')
