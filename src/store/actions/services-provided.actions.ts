import {createAction, props} from "@ngrx/store";
import {ServicesProvided} from "../../app/models/services-provided";

export const getAllServices = createAction('[SERVICES-PROVIDED] Get all Services')
export const getServicesSuccess = createAction('[SERVICES-PROVIDED] Get all Services Success', props<{payload: ServicesProvided[]}>())
export const getServicesFail = createAction('[SERVICES-PROVIDED] Get all Services Fail', props<{payload: any}>())


export const addService = createAction('[SERVICES-PROVIDED] Add Service', props<{payload: ServicesProvided}>())
export const addServiceSuccess = createAction('[SERVICES-PROVIDED] Add Service Success', props<{payload: ServicesProvided}>() )
export const addServiceFail = createAction('[SERVICES-PROVIDED] Add Service Fail', props<{payload: any}>())

export const editService = createAction('[SERVICES-PROVIDED] Edit Service ', props<{payload: ServicesProvided}>())
export const editServiceSuccess = createAction('[SERVICES-PROVIDED] Edit Service Success', props<{payload:ServicesProvided}>())
export const editServiceFail = createAction('[SERVICES-PROVIDED] Edit Service Fail', props<{payload: any}>())

export const deleteService = createAction('[SERVICES-PROVIDED] Delete Service', props<{payload: ServicesProvided}>())
export const deleteServiceSuccess = createAction('[SERVICES-PROVIDED] Delete Service Success', props<{payload: ServicesProvided}>())
export const deleteServiceFail = createAction('[SERVICES-PROVIDED] Delete Service Fail', props<{payload: any}>())

export const showDialog = createAction('[SERVICES-PROVIDED], Show Dialog')
export const hideDialog = createAction('[SERVICES-PROVIDED], Hide Dialog')
