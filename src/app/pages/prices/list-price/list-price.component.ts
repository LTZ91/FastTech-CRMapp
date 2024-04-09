import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import {FormControl} from "@angular/forms";
import { Observable} from "rxjs";
import { showDialog} from "../../../../store/actions/user.actions";
import {PriceService} from "../../../services/price.service";
import {PriceState} from "../../../../store/reducers/price.reducers";
import {Price} from "../../../models/price";
import {
  selectAllPriceDelete,
  selectAllPrices,
  selectPriceIsOpen, selectPriceIsSaved,
  selectPriceUpdate
} from "../../../../store/selectors/price.selectors";
import {getAllPrices} from "../../../../store/actions/price.actions";
import {DeletePriceComponent} from "../delete-price/delete-price.component";
import {CreatePriceComponent} from "../create-price/create-price.component";

@Component({
  selector: 'app-list-price',
  templateUrl: './list-price.component.html',
  styleUrl: './list-price.component.scss'
})
export class ListPriceComponent implements OnInit{
  constructor( private priceService: PriceService, private router: Router,
               public dialog: MatDialog,
               private store: Store<PriceState>) { }

  @Input()
  priceList!: Price[];
  price!: Price[] | null;

  @Output() onSelectedPrice = new EventEmitter<Price>();
  selectAllPrices$ = this.store.pipe(select (selectAllPrices));
  selectPriceUpdate$ = this.store.pipe(select(selectPriceUpdate));
  selectPriceDelete$ = this.store.pipe(select (selectAllPriceDelete));
  selectPriceIsOpen$ = this.store.pipe(select (selectPriceIsOpen));
  selectPriceIsSaved$ = this.store.pipe(select (selectPriceIsSaved));
  private dialogRef!: MatDialogRef<any>;

  filter = new FormControl('', { nonNullable: true });
  dataFilter!: Price[] | null;
  price$!: Observable<Price[] | null>;

  ngOnInit(): void {
    this.selectAllPrices$.subscribe(data =>{
      if(data){
        this.price = data;
      }
    })
    this.store.dispatch(getAllPrices());

    this.selectPriceUpdate$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllPrices())
      }
    })

    this.selectPriceDelete$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllPrices())
      }
    })

    this.selectPriceIsOpen$.subscribe(data =>{
      if(!data && this.dialogRef){
        this.dialogRef.close(data)
      }
    })
    this.selectPriceIsSaved$.subscribe(data => {
      if(data){
        this.store.dispatch(getAllPrices())
      }
    })

  }

  getAll(){
    this.priceService.readAll().subscribe(value => {
      if (value){
        this.priceList = value;
      }
    })
  }



  onEdit(price: Price){
    this.onSelectedPrice.emit(price)
    this.dialogRef = this.dialog.open(CreatePriceComponent);
    this.dialogRef.componentInstance.price = price

  }
  onDelete(price: Price){
    this.onSelectedPrice.emit(price)
    this.dialogRef = this.dialog.open(DeletePriceComponent);
    this.dialogRef.componentInstance.price= price

    this.store.dispatch(showDialog())
  }
  // search(args: any) {
  //   const text = this.filterText.trim()
  //   if (text === '') {
  //     this.dataFilter = this.price
  //   }else{
  //     this.dataFilter= this.price!.filter(prices =>
  //       prices.userName.toLowerCase().includes(text.toLowerCase())
  //     );
  //   }
  //   return this.dataFilter;
  // }

  // get filterText(){
  //   return this.filter.value;
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (this.price){
  //     this.dataFilter = this.user
  //     this.price$ = this.filter.valueChanges.pipe(
  //       startWith(''),
  //       map((text) => this.search(text)),
  //     );
  //   }
  // }

  onSubmit() {
    this.dialogRef = this.dialog.open(CreatePriceComponent);
    this.store.dispatch(showDialog())
  }
}
