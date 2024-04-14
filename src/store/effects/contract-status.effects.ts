import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {Injectable} from "@angular/core";
import {ContractStatusService} from "../../app/services/contract-status.service";
import {
  getAllContractStatus,
  getContractStatusFail,
  getContractStatusSuccess
} from "../actions/contract-status.actions";

@Injectable()
export class ContractStatusEffects{
  constructor(private contractStatusService: ContractStatusService, private actions$: Actions) {


  }
  getAllContractStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllContractStatus),
      exhaustMap(() =>
        this.contractStatusService.readAll().pipe(
          map((response) => getContractStatusSuccess({payload: response}),
            catchError((error) => of (getContractStatusFail ({payload: error})))
          )
        )
      )
    ))

}
