import {IUserState, userReducers} from "./user.reducers";
import {ActionReducerMap} from "@ngrx/store";
import {clientReducers, ClientState} from "./client.reducers";

export interface IAppState{
    user: IUserState
    client: ClientState
}

export const reducers: ActionReducerMap<IAppState> = {
    user: userReducers,
    client: clientReducers
}
