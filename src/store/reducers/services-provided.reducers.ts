import {createReducer, on} from "@ngrx/store";
import {hideDialog, showDialog} from "../actions/services-provided.actions";
import {ServicesProvided} from "../../app/models/services-provided";
import {
  addService,
  addServiceFail,
  addServiceSuccess,
  deleteService,
  deleteServiceFail,
  deleteServiceSuccess,
  editService,
  editServiceFail,
  editServiceSuccess,
  getAllServices,
  getServicesFail,
  getServicesSuccess
} from "../actions/services-provided.actions";



export interface ServiceState{

  serviceListAll : ServicesProvided [] |null,
  service: ServicesProvided | null,
  isUpdated: boolean,
  isDelete: boolean,
  isOpen: boolean,
  isSaved: boolean,
  services: ServicesProvided[] | null
}

const initialState: ServiceState = {
  serviceListAll: null,
  service: null,
  isUpdated: false,
  isDelete: false,
  isOpen: false,
  isSaved: false,
  services: null
}

export const serviceReducers = createReducer(
  initialState,
  on(getAllServices, (state)=>{
    return{...state, serviceListAll: null, services: null}
  }),
  on(getServicesSuccess, (state, {payload}) => {
    return{...state, serviceListAll:payload, services: payload}
  }),
  on(getServicesFail, (state, {payload}) => {
    return{...state, payload}
  }),
  on(addService, (state)=>{
    return{...state, service: null, isSaved: false, isOpen: true}
  }),
  on(addServiceSuccess, (state, {payload}) => {
    return{...state, service: payload, isSaved: true, isOpen: false}
  }),
  on(addServiceFail, (state, {payload}) => {
    return{...state, payload, isSaved: false, isOpen: false}
  }),
  on(editService, (state, {payload}) =>{
    return{...state, service: payload, isOpen: true}
  }),
  on(editServiceSuccess, (state, {payload}) =>{
    return{...state, service: payload, isUpdated: true, isOpen: false}
  }),
  on(editServiceFail, (state, {payload}) =>{
    return{...state, payload, isUpdated: false, isOpen: false}
  }),
  on(deleteService, (state, {payload}) =>{
    return{...state, service: payload, isOpen: true}
  }),
  on(deleteServiceSuccess, (state, {payload}) =>{
    return{...state, service: payload, isDelete: true, isOpen: false }
  }),
  on(deleteServiceFail, (state, {payload}) =>{
    return{...state,  payload, isDelete: false}
  }),
  on(showDialog, (state) =>{
    return {...state, isOpen: true}
  }),
  on(hideDialog, (state) => {
    return {...state, isOpen: false}
  })
)

export const listAll = (state : ServiceState) => state.services;
export const serviceIsUpdate = (state: ServiceState) => state.isUpdated;
export const serviceIsDelete = (state: ServiceState) => state.isDelete;


