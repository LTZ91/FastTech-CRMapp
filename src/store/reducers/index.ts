import {IUserState, userReducers} from "./user.reducers";
import {ActionReducerMap} from "@ngrx/store";
import {clientReducers, ClientState} from "./client.reducers";
import {hourReducers, HourState} from "./hour.reducers";
import {priceReducers, PriceState} from "./price.reducers";
import {serviceReducers, ServiceState} from "./services-provided.reducers";
import {contractStatusReducers, ContractStatusState} from "./contract-status.reducers";
import {contractReducers, ContractState} from "./contract.reducers";

export interface IAppState{
    user: IUserState
    client: ClientState
    hour: HourState
    price: PriceState
    service: ServiceState
    contractStatus: ContractStatusState
    contract: ContractState
}

export const reducers: ActionReducerMap<IAppState> = {
    user: userReducers,
    client: clientReducers,
    hour: hourReducers,
    price: priceReducers,
    service: serviceReducers,
    contractStatus: contractStatusReducers,
    contract: contractReducers
}
