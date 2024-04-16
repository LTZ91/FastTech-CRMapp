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
import {Technician} from "../../app/models/technician";
import {
  addTechnician, addTechnicianFail,
  addTechnicianSuccess, deleteTechnician, deleteTechniciansFail, deleteTechnicianSuccess, editTechnicianFail,
  getAllTechnicians,
  getTechnicianFail,
  getTechnicianSuccess
} from "../actions/technician.actions";



export interface TechnicianState{

  technicianListAll : Technician [] |null,
  technician: Technician | null,
  isUpdated: boolean,
  isDelete: boolean,
  isOpen: boolean,
  isSaved: boolean,
  technicians: Technician[] | null
}

const initialState: TechnicianState = {
  technicianListAll: null,
  technician: null,
  isUpdated: false,
  isDelete: false,
  isOpen: false,
  isSaved: false,
  technicians: null
}

export const technicianReducers = createReducer(
  initialState,
  on(getAllTechnicians, (state)=>{
    return{...state, technicianListAll: null, technicians: null}
  }),
  on(getTechnicianSuccess, (state, {payload}) => {
    return{...state, technicianListAll:payload, technicians: payload}
  }),
  on(getTechnicianFail, (state, {payload}) => {
    return{...state, payload}
  }),
  on(addTechnician, (state)=>{
    return{...state, technician: null, isSaved: false, isOpen: true}
  }),
  on(addTechnicianSuccess, (state, {payload}) => {
    return{...state, technician: payload, isSaved: true, isOpen: false}
  }),
  on(addTechnicianFail, (state, {payload}) => {
    return{...state, payload, isSaved: false, isOpen: false}
  }),
  on(editClient, (state, {payload}) =>{
    return{...state, client: payload, isOpen: true}
  }),
  on(editClientSuccess, (state, {payload}) =>{
    return{...state, client: payload, isUpdated: true, isOpen: false}
  }),
  on(editTechnicianFail, (state, {payload}) =>{
    return{...state, payload, isUpdated: false, isOpen: false}
  }),
  on(deleteTechnician, (state, {payload}) =>{
    return{...state, technician: payload, isOpen: true}
  }),
  on(deleteTechnicianSuccess, (state, {payload}) =>{
    return{...state, technician: payload, isDelete: true, isOpen: false }
  }),
  on(deleteTechniciansFail, (state, {payload}) =>{
    return{...state,  payload, isDelete: false}
  }),
  on(showDialog, (state) =>{
    return {...state, isOpen: true}
  }),
  on(hideDialog, (state) => {
    return {...state, isOpen: false}
  })
)

export const listAll = (state : TechnicianState) => state.technicians;
export const technicianIsUpdate = (state: TechnicianState) => state.isUpdated;
export const technicianIsDelete = (state: TechnicianState) => state.isDelete;


