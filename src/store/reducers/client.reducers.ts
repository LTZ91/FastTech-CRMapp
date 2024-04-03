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



export interface ClientState{

  clientListAll : Client [] |null,
  client: Client | null,
  isUpdated: boolean,
  isDelete: boolean,
  isOpen: boolean,
  isSaved: boolean,
  clients: Client[] | null
}

const initialState: ClientState = {
  clientListAll: null,
  client: null,
  isUpdated: false,
  isDelete: false,
  isOpen: false,
  isSaved: false,
  clients: null
}

export const clientReducers = createReducer(
  initialState,
  on(getAllClients, (state)=>{
    return{...state, clientListAll: null, clients: null}
  }),
  on(getClientSuccess, (state, {payload}) => {
    return{...state, clientListAll:payload, clients: payload}
  }),
  on(getClientFail, (state, {payload}) => {
    return{...state, payload}
  }),
  on(addClient, (state)=>{
    return{...state, client: null, isSaved: false, isOpen: true}
  }),
  on(addClientSuccess, (state, {payload}) => {
    return{...state, client: payload, isSaved: true, isOpen: false}
  }),
  on(addClientFail, (state, {payload}) => {
    return{...state, payload, isSaved: false, isOpen: false}
  }),
  on(editClient, (state, {payload}) =>{
    return{...state, user: payload, isOpen: true}
  }),
  on(editClientSuccess, (state, {payload}) =>{
    return{...state, user: payload, isUpdated: true, isOpen: false}
  }),
  on(editClientFail, (state, {payload}) =>{
    return{...state, payload, isUpdated: false, isOpen: false}
  }),
  on(deleteClient, (state, {payload}) =>{
    return{...state, user: payload, isOpen: true}
  }),
  on(deleteClientSuccess, (state, {payload}) =>{
    return{...state, user: payload, isDelete: true, isOpen: false }
  }),
  on(deleteClientFail, (state, {payload}) =>{
    return{...state,  payload, isDelete: false}
  }),
  on(showDialog, (state) =>{
    return {...state, isOpen: true}
  }),
  on(hideDialog, (state) => {
    return {...state, isOpen: false}
  })
)

export const listAll = (state : ClientState) => state.clients;
export const clientIsUpdate = (state: ClientState) => state.isUpdated;
export const clientIsDelete = (state: ClientState) => state.isDelete;


