import {createAction, props} from "@ngrx/store";
import {InterventionStatus} from "../../app/models/intervention-status";

export const getAllStatus = createAction('[INTERVENTION-STATUS] Get all Status')
export const getAllStatusSuccess = createAction('[INTERVENTION-STATUS] Get all Status Success', props<{payload: InterventionStatus[]}>())
export const getAllStatusFail = createAction('[INTERVENTION-STATUS] Get all Status Fail', props<{payload: any}>())

export const getStatusById = createAction('[INTERVENTION-STATUS] GET Status BY ID', props<{ payload: number }>());
export const getStatusByIdFail = createAction('[INTERVENTION-STATUS] GET Status BY ID FAIL', props<{ payload: any }>());
export const getStatusByIdSuccess = createAction('[INTERVENTION-STATUS] GET Status BY ID SUCCESS', props<{ payload: InterventionStatus }>());

export const showDialog = createAction('[INTERVENTION-STATUS], Show Dialog')
export const hideDialog = createAction('[INTERVENTION-STATUS], Hide Dialog')
