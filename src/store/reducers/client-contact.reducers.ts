import {createReducer, on} from "@ngrx/store";
import {
  addClientContact,
  addClientContactFail,
  addClientContactSuccess, deleteClientContact, deleteClientContactSuccess,
  editClientContact,
  editClientContactFail,
  editClientContactSuccess,
  getAllClientsContacts,
  getClientsContactsFail,
  getClientsContactsSuccess,
  hideDialog,
  showDialog
} from "../actions/client-contact.actions";
import {ClientContact} from "../../app/models/client-contact";




export interface ClientContactState{

  clientContactListAll : ClientContact [] |null,
  clientContact: ClientContact | null,
  isUpdated: boolean,
  isDelete: boolean,
  isOpen: boolean,
  isSaved: boolean,
  clientContacts: ClientContact[]| null
}

const initialState: ClientContactState = {
  clientContactListAll: null,
  clientContact: null,
  isUpdated: false,
  isDelete: false,
  isOpen: false,
  isSaved: false,
  clientContacts: null
}

export const clientContactReducers = createReducer(
  initialState,
  on(getAllClientsContacts, (state)=>{
    return{...state, clientContactListAll: null, clientContacts: null}
  }),
  on(getClientsContactsSuccess, (state, {payload}) => {
    return{...state, clientContactListAll:payload, clientContacts: payload}
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
  on(deleteClientContact, (state, {payload}) =>{
    return{...state,  payload, isDelete: false}
  }),
  on(showDialog, (state) =>{
    return {...state, isOpen: true}
  }),
  on(hideDialog, (state) => {
    return {...state, isOpen: false}
  })
)

export const listAll = (state : ClientContactState) => state.clientContacts;
export const clientContactIsUpdate = (state: ClientContactState) => state.isUpdated;
export const clientContactIsDelete = (state: ClientContactState) => state.isDelete;


