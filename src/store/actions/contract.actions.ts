import {createAction, props} from "@ngrx/store";
import {Contract} from "../../app/models/contract";

export const getAllContracts = createAction('[CONTRACT] Get all Contracts')
export const getContractSuccess = createAction('[CONTRACT] Get all Contracts Success', props<{payload: Contract[]}>())
export const getContractFail = createAction('[CONTRACT] Get all Contracts Fail', props<{payload: any}>())


export const addContract = createAction('[CONTRACT] Add Contract', props<{payload: Contract}>())
export const addContractSuccess = createAction('[CONTRACT] Add Contract Success', props<{payload: Contract}>() )
export const addContractFail = createAction('[CONTRACT] Add Contract Fail', props<{payload: any}>())

export const editContract = createAction('[CONTRACT] Edit Contract ', props<{payload: Contract}>())
export const editContractSuccess = createAction('[CONTRACT] Edit Contract Success', props<{payload:Contract}>())
export const editContractFail = createAction('[CONTRACT] Edit Contract Fail', props<{payload: any}>())

export const deleteContract = createAction('[CONTRACT] Delete Contract', props<{payload: Contract}>())
export const deleteContractSuccess = createAction('[CONTRACT] Delete Contract Success', props<{payload: Contract}>())
export const deleteContractFail = createAction('[CONTRACT] Delete Contract Fail', props<{payload: any}>())

export const showDialog = createAction('[CONTRACT], Show Dialog')
export const hideDialog = createAction('[CONTRACT], Hide Dialog')
