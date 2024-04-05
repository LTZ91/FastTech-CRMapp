import {IUserState, userReducers} from "./user.reducers";
import {ActionReducerMap} from "@ngrx/store";
import {clientReducers, ClientState} from "./client.reducers";
import {hourReducers, HourState} from "./hour.reducers";

export interface IAppState{
    user: IUserState
    client: ClientState
    hour: HourState
}

export const reducers: ActionReducerMap<IAppState> = {
    user: userReducers,
    client: clientReducers,
    hour: hourReducers
}
