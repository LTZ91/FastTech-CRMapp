import {Component, Input} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {IUserState} from "../../../../store/reducers/user.reducers";
import {IUser} from "../../../models/user";
import {addUser, deleteUser, hideDialog} from "../../../../store/actions/user.actions";
import {PriceService} from "../../../services/price.service";
import {PriceState} from "../../../../store/reducers/price.reducers";
import {Price} from "../../../models/price";
import {addPrice, deletePrice} from "../../../../store/actions/price.actions";

@Component({
  selector: 'app-delete-price',
  templateUrl: './delete-price.component.html',
  styleUrl: './delete-price.component.scss'
})
export class DeletePriceComponent {
  constructor(private priceService: PriceService,
              public dialog: MatDialog,
              private router: Router,
              private store: Store <PriceState>) { }

  @Input()
  price!: Price;


  ngOnInit(): void {
    console.log(this.price, 'testando')
  }


  onDeletePrice(){

    if(this.price){
      this.store.dispatch(deletePrice({payload: this.price}))
      this.store.dispatch(hideDialog())
      this.priceService.showMessageSuccess('Apagado com Sucesso')
    }
    else {
      this.store.dispatch(addPrice({payload: this.price}))
      this.priceService.showMessageFail('Preço Criado com Sucesso')
    }

  }

  cancel() {
    this.store.dispatch(hideDialog())
    this.router.navigate(['/list-price']);
  }
}
