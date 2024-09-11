import {createAction, props} from "@ngrx/store";
import {InterventionStatus} from "../../app/models/intervention-status";

export const getAllStatus = createAction('[STATUS] Get all Status')
export const getAllStatusSuccess = createAction('[STATUS] Get all Status Success', props<{payload: InterventionStatus[]}>())
export const getAllStatusFail = createAction('[STATUS] Get all Status Fail', props<{payload: any}>())

export const getStatusById = createAction('[STATUS] GET Status BY ID', props<{ payload: number }>());
export const getStatusByIdFail = createAction('[STATUS] GET Status BY ID FAIL', props<{ payload: any }>());
export const getStatusByIdSuccess = createAction('[STATUS] GET Status BY ID SUCCESS', props<{ payload: InterventionStatus }>());

export const showDialog = createAction('[STATUS], Show Dialog')
export const hideDialog = createAction('[STATUS], Hide Dialog')
