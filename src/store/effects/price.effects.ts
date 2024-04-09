import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  addUser, addUserFail,
  addUserSuccess,
  deleteUser, deleteUserFail, deleteUserSuccess,
  editUser, editUserFail, editUserSuccess,
  getAllUser,
  getUserFail,
  getUserSuccess
} from "../actions/user.actions";
import {catchError, exhaustMap, map, of, tap} from "rxjs";
import {Injectable} from "@angular/core";
import {PriceService} from "../../app/services/price.service";
import {
  addPrice,
  addPriceFail,
  addPriceSuccess, deletePrice, deletePriceFail, deletePriceSuccess, editPrice, editPriceFail, editPriceSuccess,
  getAllPrices,
  getPriceFail,
  getPriceSuccess
} from "../actions/price.actions";

@Injectable()
export class PriceEffects{
  constructor(private priceService: PriceService, private actions$: Actions) {


  }
  getAllPrice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllPrices),
      exhaustMap(() =>
        this.priceService.readAll().pipe(
          map((response) => getPriceSuccess({payload: response}),
            catchError((error) => of (getPriceFail ({payload: error})))
          )
        )
      )
    ))

  addPrice = createEffect(() =>
    this.actions$.pipe(
      ofType(addPrice),
      exhaustMap((action) =>
        this.priceService.createPrice(action.payload).pipe(
          map(price=> addPriceSuccess({payload: price})),
          catchError((error) => of (addPriceFail ({payload: error})))
        )
      )
    )
  )

  editPrice = createEffect(() =>
    this.actions$.pipe(
      ofType(editPrice),
      exhaustMap((action) =>
        this.priceService.edit(action.payload).pipe(
          map(price=> editPriceSuccess({payload: price})),
          catchError((error) => of (editPriceFail ({payload: error})))
        )
      )
    )
  )

  deletePrice = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePrice),
      exhaustMap((action) =>
        this.priceService.delete(action.payload).pipe(
          map(price=> deletePriceSuccess({payload: price})),
          catchError((error) => of (deletePriceFail ({payload: error})))
        )
      )
    )
  )

}
