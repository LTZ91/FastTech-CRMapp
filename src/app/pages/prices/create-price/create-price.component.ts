import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {MatDialogRef} from "@angular/material/dialog";
import { hideDialog} from "../../../../store/actions/user.actions";
import {PriceService} from "../../../services/price.service";
import {PriceState} from "../../../../store/reducers/price.reducers";
import {Price} from "../../../models/price";
import {selectPriceIsOpen} from "../../../../store/selectors/price.selectors";
import {addPrice, editPrice} from "../../../../store/actions/price.actions";
import {Hour} from "../../../models/hour";
import {HourService} from "../../../services/hour.service";

@Component({
  selector: 'app-create-price',
  templateUrl: './create-price.component.html',
  styleUrl: './create-price.component.scss'
})
export class CreatePriceComponent {
  constructor(
    private priceService: PriceService,
    private hourService: HourService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store <PriceState>,
    private modalRef: MatDialogRef<any>) {}

  formPrice!: FormGroup;
  price !: Price;
  hour! : Hour [];
  selectUserIsOpen$ = this.store.pipe(select (selectPriceIsOpen));
  private dialogRef!: MatDialogRef<boolean>;
  isOpen !: boolean;
  ngOnInit(): void {

    this.getHours();
    if(this.price){
      this.formPrice = this.formBuilder.group({
        id: new FormControl(this.price.id, Validators.required),
        value: new FormControl(this.price.value, Validators.required),
        hourId: new FormControl(this.price.hourId, Validators.required),

      });
    }else {
      this.formPrice = this.formBuilder.group({
        value: new FormControl(``, Validators.required),
        hourId: new FormControl(``, Validators.required),

      });
    }


  }

  getHours(){
    this.hourService.readAll().subscribe(value => {
      if(value){
        this.hour=value;
      }
    })
  }




  createPrice() {
    if (this.price) {
      this.store.dispatch(editPrice({payload: this.formPrice.value}));
      this.store.dispatch(hideDialog());
      this.priceService.showMessageSuccess('Actualizado com Sucesso')
    } else {
      this.store.dispatch(addPrice({payload: this.formPrice.value}));
      this.priceService.showMessageSuccess('Preço Criado com Sucesso')
    }
    this.modalRef.close("true")

  }
  cancel() {
    this.store.dispatch(hideDialog());
  }
}
