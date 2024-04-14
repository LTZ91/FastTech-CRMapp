import {createFeatureSelector, createSelector} from "@ngrx/store";
import { listAll} from "../reducers/contract-status.reducers";
import {clientIsDelete, clientIsUpdate, ClientState} from "../reducers/client.reducers";
import {ContractStatusState} from "../reducers/contract-status.reducers";

export const CREATE_CONTRACT_STATUS = 'contract-status'
export const contractStatusState = createFeatureSelector<ContractStatusState>(CREATE_CONTRACT_STATUS);
export const selectAllContractStatus  = createSelector(
  contractStatusState,
  listAll
)
