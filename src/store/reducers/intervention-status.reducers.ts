import {createReducer, on} from "@ngrx/store";
import {InterventionStatus} from "../../app/models/intervention-status";
import {
  getAllStatus,
  getAllStatusFail,
  getAllStatusSuccess,
  getStatusById, getStatusByIdFail, getStatusByIdSuccess
} from "../actions/intervention-status.actions";
import {hideDialog, showDialog} from "../actions/intervention-status.actions";

export interface InterventionStatusState{

  interventionStatusListAll : InterventionStatus [] |null,
  selectedInterventionStatus: InterventionStatus | null,
  isUpdated: boolean,
  isDelete: boolean,
  isOpen: boolean,
  isSaved: boolean,
  interventionsStatuses: InterventionStatus[] | null
}

const initialState: InterventionStatusState = {
  interventionStatusListAll: null,
  selectedInterventionStatus: null,
  isUpdated: false,
  isDelete: false,
  isOpen: false,
  isSaved: false,
  interventionsStatuses: null
}

export const interventionStatusReducers = createReducer(
  initialState,
  on(getAllStatus, (state)=>{
    return{...state, interventionStatusListAll: null, interventionsStatuses: null}
  }),
  on(getAllStatusSuccess, (state, {payload}) => {
    return{...state, interventionStatusListAll:payload, interventionsStatuses: payload}
  }),
  on(getAllStatusFail, (state, {payload}) => {
    return{...state, payload}
  }),
  on(getStatusById, (state) => {
    return { ...state, selectedInterventionStatus: null };
  }),
  on(getStatusByIdSuccess, (state, { payload }) => {
    return { ...state, selectedInterventionStatus: payload };
  }),
  on(getStatusByIdFail, (state, { payload }) => {
    return { ...state, error: payload };
  }),
  on(showDialog, (state) =>{
    return {...state, isOpen: true}
  }),
  on(hideDialog, (state) => {
    return {...state, isOpen: false}
  })
)

export const listAll = (state : InterventionStatusState) => state.interventionsStatuses;
export const interventionStatusIsUpdate = (state: InterventionStatusState) => state.isUpdated;
export const interventionStatusIsDelete = (state: InterventionStatusState) => state.isDelete;
