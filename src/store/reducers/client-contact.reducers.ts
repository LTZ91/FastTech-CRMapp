import {createReducer, on} from "@ngrx/store";
import {hideDialog, showDialog} from "../actions/client-contact.actions";
import {ClientContact} from "../../app/models/client-contact";
import {
  addClientContact,
  addClientContactFail,
  addClientContactSuccess, deleteClientContact, deleteClientContactFail, deleteClientContactSuccess,
  editClientContact,
  editClientContactFail,
  editClientContactSuccess,
  getAllClientsContacts,
  getClientsContactsFail,
  getClientsContactsSuccess
} from "../actions/client-contact.actions";



export interface ClientContactState{

  clientContactListAll : ClientContact [] |null,
  clientContact: ClientContact | null,
  isUpdated: boolean,
  isDelete: boolean,
  isOpen: boolean,
  isSaved: boolean,
  clientsContacts: ClientContact[] | null
}

const initialState: ClientContactState = {
  clientContactListAll: null,
  clientContact: null,
  isUpdated: false,
  isDelete: false,
  isOpen: false,
  isSaved: false,
  clientsContacts: null
}

export const clientContactReducers = createReducer(
  initialState,
  on(getAllClientsContacts, (state)=>{
    return{...state, clientContactListAll: null, clientsContacts: null}
  }),
  on(getClientsContactsSuccess, (state, {payload}) => {
    return{...state, clientContactListAll:payload, clientsContacts: payload}
  }),
  on(getClientsContactsFail, (state, {payload}) => {
    return{...state, payload}
  }),
  on(addClientContact, (state)=>{
    return{...state, clientContact: null, isSaved: false, isOpen: true}
  }),
  on(addClientContactSuccess, (state, {payload}) => {
    return{...state, clientContact: payload, isSaved: true, isOpen: false}
  }),
  on(addClientContactFail, (state, {payload}) => {
    return{...state, payload, isSaved: false, isOpen: false}
  }),
  on(editClientContact, (state, {payload}) =>{
    return{...state, clientContact: payload, isOpen: true}
  }),
  on(editClientContactSuccess, (state, {payload}) =>{
    return{...state, clientContact: payload, isUpdated: true, isOpen: false}
  }),
  on(editClientContactFail, (state, {payload}) =>{
    return{...state, payload, isUpdated: false, isOpen: false}
  }),
  on(deleteClientContact, (state, {payload}) =>{
    return{...state, clientContact: payload, isOpen: true}
  }),
  on(deleteClientContactSuccess, (state, {payload}) =>{
    return{...state, clientContact: payload, isDelete: true, isOpen: false }
  }),
  on(deleteClientContactFail, (state, {payload}) =>{
    return{...state,  payload, isDelete: false}
  }),
  on(showDialog, (state) =>{
    return {...state, isOpen: true}
  }),
  on(hideDialog, (state) => {
    return {...state, isOpen: false}
  })
)

export const listAll = (state : ClientContactState) => state.clientsContacts;
export const clientContactIsUpdate = (state: ClientContactState) => state.isUpdated;
export const clientContactIsDelete = (state: ClientContactState) => state.isDelete;


