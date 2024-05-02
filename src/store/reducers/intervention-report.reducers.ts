import {createReducer, on} from "@ngrx/store";
import {hideDialog, showDialog} from "../actions/intervention-report.actions";
import {InterventionReport} from "../../app/models/intervention-report";
import {
  addInterventionReport,
  addInterventionReportFail,
  addInterventionReportSuccess, deleteInterventionReport, deleteInterventionReportFail, deleteInterventionReportSuccess,
  editInterventionReport, editInterventionReportFail,
  editInterventionReportSuccess,
  getAllInterventionReport,
  getInterventionReportFail,
  getInterventionReportSuccess
} from "../actions/intervention-report.actions";



export interface InterventionReportState{

  interventionReportListAll : InterventionReport [] |null,
  interventionReport: InterventionReport | null,
  isUpdated: boolean,
  isDelete: boolean,
  isOpen: boolean,
  isSaved: boolean,
  interventionsReports: InterventionReport[] | null
}

const initialState: InterventionReportState = {
  interventionReportListAll: null,
  interventionReport: null,
  isUpdated: false,
  isDelete: false,
  isOpen: false,
  isSaved: false,
  interventionsReports: null
}

export const interventionReportReducers = createReducer(
  initialState,
  on(getAllInterventionReport, (state)=>{
    return{...state, interventionReportListAll: null, interventionsReports: null}
  }),
  on(getInterventionReportSuccess, (state, {payload}) => {
    return{...state, interventionReportListAll:payload, interventionsReports: payload}
  }),
  on(getInterventionReportFail, (state, {payload}) => {
    return{...state, payload}
  }),
  on(addInterventionReport, (state)=>{
    return{...state, interventionReport: null, isSaved: false, isOpen: true}
  }),
  on(addInterventionReportSuccess, (state, {payload}) => {
    return{...state, interventionReport: payload, isSaved: true, isOpen: false}
  }),
  on(addInterventionReportFail, (state, {payload}) => {
    return{...state, payload, isSaved: false, isOpen: false}
  }),
  on(editInterventionReport, (state, {payload}) =>{
    return{...state, interventionReport: payload, isOpen: true}
  }),
  on(editInterventionReportSuccess, (state, {payload}) =>{
    return{...state, interventionReport: payload, isUpdated: true, isOpen: false}
  }),
  on(editInterventionReportFail, (state, {payload}) =>{
    return{...state, payload, isUpdated: false, isOpen: false}
  }),
  on(deleteInterventionReport, (state, {payload}) =>{
    return{...state, interventionReport: payload, isOpen: true}
  }),
  on(deleteInterventionReportSuccess, (state, {payload}) =>{
    return{...state, interventionReport: payload, isDelete: true, isOpen: false }
  }),
  on(deleteInterventionReportFail, (state, {payload}) =>{
    return{...state,  payload, isDelete: false}
  }),
  on(showDialog, (state) =>{
    return {...state, isOpen: true}
  }),
  on(hideDialog, (state) => {
    return {...state, isOpen: false}
  })
)

export const listAll = (state : InterventionReportState) => state.interventionsReports;
export const interventionReportIsUpdate = (state: InterventionReportState) => state.isUpdated;
export const interventionReportIsDelete = (state: InterventionReportState) => state.isDelete;


