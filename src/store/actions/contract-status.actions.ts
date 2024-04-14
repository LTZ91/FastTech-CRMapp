import {createAction, props} from "@ngrx/store";
import {ContractStatus} from "../../app/models/contract-status";

export const getAllContractStatus = createAction('[CONTRACT_STATUS] Get all Contract Status')
export const getContractStatusSuccess = createAction('[CONTRACT_STATUS] Get all Contract Status Success', props<{payload: ContractStatus[]}>())
export const getContractStatusFail = createAction('[CONTRACT_STATUS] Get all Contract Status Fail', props<{payload: any}>())

