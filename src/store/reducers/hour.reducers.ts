import {createReducer, on} from "@ngrx/store";
import {hideDialog, showDialog} from "../actions/client.actions";
import {Hour} from "../../app/models/hour";
import {
  addHour,
  addHourFail,
  addHourSuccess, deleteHour, deleteHourFail, deleteHourSuccess, editHour, editHourFail, editHourSuccess,
  getAllHours,
  getHoursFail,
  getHoursSuccess
} from "../actions/hour.actions";



export interface HourState{

  hourListAll : Hour [] |null,
  hour: Hour | null,
  isUpdated: boolean,
  isDelete: boolean,
  isOpen: boolean,
  isSaved: boolean,
  hours: Hour[] | null
}

const initialState: HourState = {
  hourListAll: null,
  hour: null,
  isUpdated: false,
  isDelete: false,
  isOpen: false,
  isSaved: false,
  hours: null
}

export const hourReducers = createReducer(
  initialState,
  on(getAllHours, (state)=>{
    return{...state, hourListAll: null, hours: null}
  }),
  on(getHoursSuccess, (state, {payload}) => {
    return{...state, hourListAll:payload, hours: payload}
  }),
  on(getHoursFail, (state, {payload}) => {
    return{...state, payload}
  }),
  on(addHour, (state)=>{
    return{...state, hour: null, isSaved: false, isOpen: true}
  }),
  on(addHourSuccess, (state, {payload}) => {
    return{...state, hour: payload, isSaved: true, isOpen: false}
  }),
  on(addHourFail, (state, {payload}) => {
    return{...state, payload, isSaved: false, isOpen: false}
  }),
  on(editHour, (state, {payload}) =>{
    return{...state, hour: payload, isOpen: true}
  }),
  on(editHourSuccess, (state, {payload}) =>{
    return{...state, hour: payload, isUpdated: true, isOpen: false}
  }),
  on(editHourFail, (state, {payload}) =>{
    return{...state, payload, isUpdated: false, isOpen: false}
  }),
  on(deleteHour, (state, {payload}) =>{
    return{...state, hour: payload, isOpen: true}
  }),
  on(deleteHourSuccess, (state, {payload}) =>{
    return{...state, hour: payload, isDelete: true, isOpen: false }
  }),
  on(deleteHourFail, (state, {payload}) =>{
    return{...state,  payload, isDelete: false}
  }),
  on(showDialog, (state) =>{
    return {...state, isOpen: true}
  }),
  on(hideDialog, (state) => {
    return {...state, isOpen: false}
  })
)

export const listAll = (state : HourState) => state.hours;
export const hourIsUpdate = (state: HourState) => state.isUpdated;
export const hourIsDelete = (state: HourState) => state.isDelete;


