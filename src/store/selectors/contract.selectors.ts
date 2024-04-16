import {createFeatureSelector, createSelector} from "@ngrx/store";
import { listAll} from "../reducers/contract.reducers";
import {contractIsDelete, contractIsUpdate, ContractState} from "../reducers/contract.reducers";

export const CREATE_CONTRACT = 'contract'
export const contractState = createFeatureSelector<ContractState>(CREATE_CONTRACT);
export const selectAllContracts  = createSelector(
  contractState,
  listAll
)

export const selectContractsUpdate = createSelector(
  contractState,
  contractIsUpdate
)
export const selectAllContractUpdate = createSelector(
  contractState,
  state => state.isUpdated
)

export  const selectContractDelete = createSelector(
  contractState,
  contractIsDelete
)
export  const selectAllContractDelete = createSelector(
  contractState,
  state => state.isDelete
)
export const selectContractIsOpen = createSelector(
  contractState,
  state => state.isOpen
)

export const selectContractIsSaved = createSelector(
  contractState,
  state => state.isSaved
)
