import {createReducer, on} from "@ngrx/store";
import {Client} from "../../app/models/client";
import {
  addClient,
  addClientFail,
  addClientSuccess, deleteClient, deleteClientFail, deleteClientSuccess, editClient, editClientFail, editClientSuccess,
  getAllClients,
  getClientFail,
  getClientSuccess
} from "../actions/client.actions";
import {hideDialog, showDialog} from "../actions/client.actions";
import {ContractStatus} from "../../app/models/contract-status";
import {
  getAllContractStatus,
  getContractStatusFail,
  getContractStatusSuccess
} from "../actions/contract-status.actions";



export interface ContractStatusState{

  contractStatusListAll : ContractStatus [] |null,
  contractStatus: ContractStatus | null,
  isUpdated: boolean,
  isDelete: boolean,
  isOpen: boolean,
  isSaved: boolean,
  contractStatuses: ContractStatus[] | null
}

const initialState: ContractStatusState = {
  contractStatusListAll: null,
  contractStatus: null,
  isUpdated: false,
  isDelete: false,
  isOpen: false,
  isSaved: false,
  contractStatuses: null
}

export const contractStatusReducers = createReducer(
  initialState,
  on(getAllContractStatus, (state)=>{
    return{...state, contractStatusListAll: null, contractStatuses: null}
  }),
  on(getContractStatusSuccess, (state, {payload}) => {
    return{...state, contractStatusListAll:payload, contractStatuses: payload}
  }),
  on(getContractStatusFail, (state, {payload}) => {
    return{...state, payload}
  }),

)

export const listAll = (state : ContractStatusState) => state.contractStatuses;



