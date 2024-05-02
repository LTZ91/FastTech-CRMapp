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
import {InterventionRequest} from "../../app/models/intervention-request";
import {
  addInterventionRequest,
  addInterventionRequestFail,
  addInterventionRequestSuccess,
  deleteInterventionRequest,
  deleteInterventionRequestFail,
  deleteInterventionRequestSuccess,
  editInterventionRequest,
  editInterventionRequestFail,
  editInterventionRequestSuccess,
  getAllInterventionsRequest,
  getInterventionsRequestFail,
  getInterventionsRequestSuccess
} from "../actions/intervention-request.actions";



export interface InterventionRequestState{

  interventionRequestListAll : InterventionRequest [] |null,
  interventionRequest: InterventionRequest | null,
  isUpdated: boolean,
  isDelete: boolean,
  isOpen: boolean,
  isSaved: boolean,
  interventionsRequests: InterventionRequest[] | null
}

const initialState: InterventionRequestState = {
  interventionRequestListAll: null,
  interventionRequest: null,
  isUpdated: false,
  isDelete: false,
  isOpen: false,
  isSaved: false,
  interventionsRequests: null
}

export const interventionRequestReducers = createReducer(
  initialState,
  on(getAllInterventionsRequest, (state)=>{
    return{...state, interventionRequestListAll: null, interventionsRequests: null}
  }),
  on(getInterventionsRequestSuccess, (state, {payload}) => {
    return{...state, interventionRequestListAll:payload, interventionsRequests: payload}
  }),
  on(getInterventionsRequestFail, (state, {payload}) => {
    return{...state, payload}
  }),
  on(addInterventionRequest, (state)=>{
    return{...state, interventionRequest: null, isSaved: false, isOpen: true}
  }),
  on(addInterventionRequestSuccess, (state, {payload}) => {
    return{...state, interventionRequest: payload, isSaved: true, isOpen: false}
  }),
  on(addInterventionRequestFail, (state, {payload}) => {
    return{...state, payload, isSaved: false, isOpen: false}
  }),
  on(editInterventionRequest, (state, {payload}) =>{
    return{...state, interventionRequest: payload, isOpen: true}
  }),
  on(editInterventionRequestSuccess, (state, {payload}) =>{
    return{...state, interventionRequest: payload, isUpdated: true, isOpen: false}
  }),
  on(editInterventionRequestFail, (state, {payload}) =>{
    return{...state, payload, isUpdated: false, isOpen: false}
  }),
  on(deleteInterventionRequest, (state, {payload}) =>{
    return{...state, interventionRequest: payload, isOpen: true}
  }),
  on(deleteInterventionRequestSuccess, (state, {payload}) =>{
    return{...state, interventionRequest: payload, isDelete: true, isOpen: false }
  }),
  on(deleteInterventionRequestFail, (state, {payload}) =>{
    return{...state,  payload, isDelete: false}
  }),
  on(showDialog, (state) =>{
    return {...state, isOpen: true}
  }),
  on(hideDialog, (state) => {
    return {...state, isOpen: false}
  })
)

export const listAll = (state : InterventionRequestState) => state.interventionsRequests;
export const interventionRequestIsUpdate = (state: InterventionRequestState) => state.isUpdated;
export const interventionRequestIsDelete = (state: InterventionRequestState) => state.isDelete;


