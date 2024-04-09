import {IUserState, userReducers} from "./user.reducers";
import {ActionReducerMap} from "@ngrx/store";
import {clientReducers, ClientState} from "./client.reducers";
import {hourReducers, HourState} from "./hour.reducers";
import {priceReducers, PriceState} from "./price.reducers";

export interface IAppState{
    user: IUserState
    client: ClientState
    hour: HourState
    price: PriceState
}

export const reducers: ActionReducerMap<IAppState> = {
    user: userReducers,
    client: clientReducers,
    hour: hourReducers,
    price: priceReducers
}
