import {createReducer, on} from "@ngrx/store";
import {hideDialog, showDialog} from "../actions/price.actions";
import {Price} from "../../app/models/price";
import {
  addPrice,
  addPriceFail,
  addPriceSuccess, deletePrice, deletePriceFail, deletePriceSuccess, editPrice, editPriceFail, editPriceSuccess,
  getAllPrices,
  getPriceFail,
  getPriceSuccess
} from "../actions/price.actions";



export interface PriceState{

  priceListAll : Price [] |null,
  price: Price | null,
  isUpdated: boolean,
  isDelete: boolean,
  isOpen: boolean,
  isSaved: boolean,
  prices: Price[] | null
}

const initialState: PriceState = {
  priceListAll: null,
  price: null,
  isUpdated: false,
  isDelete: false,
  isOpen: false,
  isSaved: false,
  prices: null
}

export const priceReducers = createReducer(
  initialState,
  on(getAllPrices, (state)=>{
    return{...state, priceListAll: null, prices: null}
  }),
  on(getPriceSuccess, (state, {payload}) => {
    return{...state, priceListAll:payload, prices: payload}
  }),
  on(getPriceFail, (state, {payload}) => {
    return{...state, payload}
  }),
  on(addPrice, (state)=>{
    return{...state, price: null, isSaved: false, isOpen: true}
  }),
  on(addPriceSuccess, (state, {payload}) => {
    return{...state, price: payload, isSaved: true, isOpen: false}
  }),
  on(addPriceFail, (state, {payload}) => {
    return{...state, payload, isSaved: false, isOpen: false}
  }),
  on(editPrice, (state, {payload}) =>{
    return{...state, price: payload, isOpen: true}
  }),
  on(editPriceSuccess, (state, {payload}) =>{
    return{...state, price: payload, isUpdated: true, isOpen: false}
  }),
  on(editPriceFail, (state, {payload}) =>{
    return{...state, payload, isUpdated: false, isOpen: false}
  }),
  on(deletePrice, (state, {payload}) =>{
    return{...state, price: payload, isOpen: true}
  }),
  on(deletePriceSuccess, (state, {payload}) =>{
    return{...state, price: payload, isDelete: true, isOpen: false }
  }),
  on(deletePriceFail, (state, {payload}) =>{
    return{...state,  payload, isDelete: false}
  }),
  on(showDialog, (state) =>{
    return {...state, isOpen: true}
  }),
  on(hideDialog, (state) => {
    return {...state, isOpen: false}
  })
)

export const listAll = (state : PriceState) => state.prices;
export const priceIsUpdate = (state: PriceState) => state.isUpdated;
export const priceIsDelete = (state: PriceState) => state.isDelete;


