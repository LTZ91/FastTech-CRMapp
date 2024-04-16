import {createAction, props} from "@ngrx/store";
import {Technician} from "../../app/models/technician";

export const getAllTechnicians = createAction('[TECHNICIAN] Get all Technicians')
export const getTechnicianSuccess = createAction('[TECHNICIAN] Get all Technicians Success', props<{payload: Technician[]}>())
export const getTechnicianFail = createAction('[TECHNICIAN] Get all Technicians Fail', props<{payload: any}>())


export const addTechnician = createAction('[TECHNICIAN] Add Technician', props<{payload: Technician}>())
export const addTechnicianSuccess = createAction('[TECHNICIAN] Add Technician Success', props<{payload: Technician}>() )
export const addTechnicianFail = createAction('[TECHNICIAN] Add Technician Fail', props<{payload: any}>())

export const editTechnician = createAction('[TECHNICIAN] Edit Technician ', props<{payload: Technician}>())
export const editTechnicianSuccess = createAction('[TECHNICIAN] Edit Technician Success', props<{payload:Technician}>())
export const editTechnicianFail = createAction('[TECHNICIAN] Edit Technician Fail', props<{payload: any}>())

export const deleteTechnician = createAction('[TECHNICIAN] Delete Technician', props<{payload: Technician}>())
export const deleteTechnicianSuccess = createAction('[TECHNICIAN] Delete Technician Success', props<{payload: Technician}>())
export const deleteTechniciansFail = createAction('[TECHNICIAN] Delete Technician Fail', props<{payload: any}>())

export const showDialog = createAction('[TECHNICIAN], Show Dialog')
export const hideDialog = createAction('[TECHNICIAN], Hide Dialog')
