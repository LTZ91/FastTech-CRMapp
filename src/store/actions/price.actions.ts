import {createAction, props} from "@ngrx/store";
import {Price} from "../../app/models/price";

export const getAllPrices = createAction('[PRICE] Get all Prices')
export const getPriceSuccess = createAction('[PRICE] Get all Prices Success', props<{payload: Price[]}>())
export const getPriceFail = createAction('[PRICE] Get all Prices Fail', props<{payload: any}>())


export const addPrice = createAction('[PRICE] Add Price', props<{payload: Price}>())
export const addPriceSuccess = createAction('[PRICE] Add Price Success', props<{payload: Price}>() )
export const addPriceFail = createAction('[PRICE] Add Price Fail', props<{payload: any}>())

export const editPrice = createAction('[PRICE] Edit Price ', props<{payload: Price}>())
export const editPriceSuccess = createAction('[PRICE] Edit Price Success', props<{payload:Price}>())
export const editPriceFail = createAction('[PRICE] Edit Price Fail', props<{payload: any}>())

export const deletePrice = createAction('[PRICE] Delete Price', props<{payload: Price}>())
export const deletePriceSuccess = createAction('[PRICE] Delete Price Success', props<{payload: Price}>())
export const deletePriceFail = createAction('[PRICE] Delete Price Fail', props<{payload: any}>())

export const showDialog = createAction('[PRICE], Show Dialog')
export const hideDialog = createAction('[PRICE], Hide Dialog')
