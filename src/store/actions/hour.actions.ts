import {createAction, props} from "@ngrx/store";
import {Hour} from "../../app/models/hour";

export const getAllHours = createAction('[HOUR] Get all Hours')
export const getHoursSuccess = createAction('[HOUR] Get all Hours Success', props<{payload: Hour[]}>())
export const getHoursFail = createAction('[HOUR] Get all Hours Fail', props<{payload: any}>())


export const addHour = createAction('[HOUR] Add Hours', props<{payload: Hour}>())
export const addHourSuccess = createAction('[HOUR] Add Hours Success', props<{payload: Hour}>() )
export const addHourFail = createAction('[HOUR] Add Hours Fail', props<{payload: any}>())

export const editHour = createAction('[HOUR] Edit Hours ', props<{payload: Hour}>())
export const editHourSuccess = createAction('[HOUR] Edit Hours Success', props<{payload:Hour}>())
export const editHourFail = createAction('[HOUR] Edit Hours Fail', props<{payload: any}>())

export const deleteHour = createAction('[HOUR] Delete Hours', props<{payload: Hour}>())
export const deleteHourSuccess = createAction('[HOUR] Delete Hours Success', props<{payload: Hour}>())
export const deleteHourFail = createAction('[HOUR] Delete Hours Fail', props<{payload: any}>())

export const showDialog = createAction('[HOUR], Show Dialog')
export const hideDialog = createAction('[HOUR], Hide Dialog')
