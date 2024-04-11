import {createAction, props} from "@ngrx/store";
import {ServicesProvided} from "../../app/models/services-provided";

export const getAllServices = createAction('[SERVICES] Get all Services')
export const getServicesSuccess = createAction('[SERVICES] Get all Services Success', props<{payload: ServicesProvided[]}>())
export const getServicesFail = createAction('[SERVICES] Get all Services Fail', props<{payload: any}>())


export const addService = createAction('[SERVICES] Add Service', props<{payload: ServicesProvided}>())
export const addServiceSuccess = createAction('[SERVICES] Add Service Success', props<{payload: ServicesProvided}>() )
export const addServiceFail = createAction('[SERVICES] Add Service Fail', props<{payload: any}>())

export const editService = createAction('[SERVICES] Edit Service ', props<{payload: ServicesProvided}>())
export const editServiceSuccess = createAction('[SERVICES] Edit Service Success', props<{payload:ServicesProvided}>())
export const editServiceFail = createAction('[SERVICES] Edit Service Fail', props<{payload: any}>())

export const deleteService = createAction('[SERVICES] Delete Service', props<{payload: ServicesProvided}>())
export const deleteServiceSuccess = createAction('[SERVICES] Delete Service Success', props<{payload: ServicesProvided}>())
export const deleteServiceFail = createAction('[SERVICES] Delete Service Fail', props<{payload: any}>())

export const showDialog = createAction('[SERVICES], Show Dialog')
export const hideDialog = createAction('[SERVICES], Hide Dialog')
