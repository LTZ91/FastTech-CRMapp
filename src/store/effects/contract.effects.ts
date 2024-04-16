import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {Injectable} from "@angular/core";
import {ContractService} from "../../app/services/contract.service";
import {
  addContract,
  addContractFail,
  addContractSuccess,
  deleteContract,
  deleteContractFail,
  deleteContractSuccess,
  editContract,
  editContractFail,
  editContractSuccess,
  getAllContracts,
  getContractFail,
  getContractSuccess
} from "../actions/contract.actions";

@Injectable()
export class ContractEffects{
  constructor(private contractService: ContractService, private actions$: Actions) {


  }
  getAllContracts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllContracts),
      exhaustMap(() =>
        this.contractService.readAll().pipe(
          // tap(response => console.log('Response from userService.readAll:', response)),
          map((response) => getContractSuccess({payload: response}),
            catchError((error) => of (getContractFail ({payload: error})))
          )
        )
      )
    ))

  addContract = createEffect(() =>
    this.actions$.pipe(
      ofType(addContract),
      exhaustMap((action) =>
        this.contractService.createContract(action.payload).pipe(
          map(contract=> addContractSuccess({payload: contract})),
          catchError((error) => of (addContractFail ({payload: error})))
        )
      )
    )
  )

  editContract = createEffect(() =>
    this.actions$.pipe(
      ofType(editContract),
      exhaustMap((action) =>
        this.contractService.edit(action.payload).pipe(
          map(contract=> editContractSuccess({payload: contract})),
          catchError((error) => of (editContractFail ({payload: error})))
        )
      )
    )
  )

  deleteContract = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteContract),
      exhaustMap((action) =>
        this.contractService.delete(action.payload).pipe(
          map(contract=> deleteContractSuccess({payload: contract})),
          catchError((error) => of (deleteContractFail ({payload: error})))
        )
      )
    )
  )

}
