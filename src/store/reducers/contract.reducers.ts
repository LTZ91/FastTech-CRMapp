import {createReducer, on} from "@ngrx/store";
import {hideDialog, showDialog} from "../actions/contract.actions";
import {Contract} from "../../app/models/contract";
import {
  addContract,
  addContractFail,
  addContractSuccess,
  deleteContract,
  deleteContractFail,
  deleteContractSuccess,
  editContract,
  editContractFail,
  editContractSuccess,
  getAllContracts,
  getContractFail,
  getContractSuccess
} from "../actions/contract.actions";



export interface ContractState{

  contractListAll : Contract [] |null,
  contract: Contract | null,
  isUpdated: boolean,
  isDelete: boolean,
  isOpen: boolean,
  isSaved: boolean,
  contracts: Contract[] | null
}

const initialState: ContractState = {
  contractListAll: null,
  contract: null,
  isUpdated: false,
  isDelete: false,
  isOpen: false,
  isSaved: false,
  contracts: null
}

export const contractReducers = createReducer(
  initialState,
  on(getAllContracts, (state)=>{
    return{...state, contractListAll: null, contracts: null}
  }),
  on(getContractSuccess, (state, {payload}) => {
    return{...state, contractListAll:payload, contracts: payload}
  }),
  on(getContractFail, (state, {payload}) => {
    return{...state, payload}
  }),
  on(addContract, (state)=>{
    return{...state, contract: null, isSaved: false, isOpen: true}
  }),
  on(addContractSuccess, (state, {payload}) => {
    return{...state, contract: payload, isSaved: true, isOpen: false}
  }),
  on(addContractFail, (state, {payload}) => {
    return{...state, payload, isSaved: false, isOpen: false}
  }),
  on(editContract, (state, {payload}) =>{
    return{...state, contract: payload, isOpen: true}
  }),
  on(editContractSuccess, (state, {payload}) =>{
    return{...state, contract: payload, isUpdated: true, isOpen: false}
  }),
  on(editContractFail, (state, {payload}) =>{
    return{...state, payload, isUpdated: false, isOpen: false}
  }),
  on(deleteContract, (state, {payload}) =>{
    return{...state, contract: payload, isOpen: true}
  }),
  on(deleteContractSuccess, (state, {payload}) =>{
    return{...state, contract: payload, isDelete: true, isOpen: false }
  }),
  on(deleteContractFail, (state, {payload}) =>{
    return{...state,  payload, isDelete: false}
  }),
  on(showDialog, (state) =>{
    return {...state, isOpen: true}
  }),
  on(hideDialog, (state) => {
    return {...state, isOpen: false}
  })
)

export const listAll = (state : ContractState) => state.contracts;
export const contractIsUpdate = (state: ContractState) => state.isUpdated;
export const contractIsDelete = (state: ContractState) => state.isDelete;


