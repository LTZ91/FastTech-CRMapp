import {createFeatureSelector, createSelector} from "@ngrx/store";
import { listAll} from "../reducers/price.reducers";
import {priceIsDelete, priceIsUpdate, PriceState} from "../reducers/price.reducers";

export const CREATE_PRICE = 'price'
export const priceState = createFeatureSelector<PriceState>(CREATE_PRICE);
export const selectAllPrices  = createSelector(
  priceState,
  listAll
)

export const selectPriceUpdate = createSelector(
  priceState,
  priceIsUpdate
)
export const selectAllPriceUpdate = createSelector(
  priceState,
  state => state.isUpdated
)

export  const selectPriceDelete = createSelector(
  priceState,
  priceIsDelete
)
export  const selectAllPriceDelete = createSelector(
  priceState,
  state => state.isDelete
)
export const selectPriceIsOpen = createSelector(
  priceState,
  state => state.isOpen
)

export const selectPriceIsSaved = createSelector(
  priceState,
  state => state.isSaved
)
