import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import {FormControl} from "@angular/forms";
import { Observable} from "rxjs";
import {showDialog} from "../../../../store/actions/user.actions";
import {HourService} from "../../../services/hour.service";
import {HourState} from "../../../../store/reducers/hour.reducers";
import {Hour} from "../../../models/hour";
import {
  selectAllHourDelete,
  selectAllHours,
  selectHourIsOpen, selectHourIsSaved,
  selectHourUpdate
} from "../../../../store/selectors/hour.selectors";
import {getAllHours} from "../../../../store/actions/hour.actions";
import {CreateHourComponent} from "../create-hour/create-hour.component";
import {DeleteHourComponent} from "../delete-hour/delete-hour.component";

@Component({
  selector: 'app-list-hour',
  templateUrl: './list-hour.component.html',
  styleUrl: './list-hour.component.scss'
})
export class ListHourComponent implements OnInit{

  constructor( private hourService: HourService, private router: Router,
               public dialog: MatDialog,
               private store: Store<HourState>) { }

  @Input()
  hourList!: Hour[];
  hour!: Hour[] | null;

  @Output() onSelectedHour = new EventEmitter<Hour>();
  selectAllHours$ = this.store.pipe(select (selectAllHours));
  selectHourUpdate$ = this.store.pipe(select(selectHourUpdate));
  selectHourDelete$ = this.store.pipe(select (selectAllHourDelete));
  selectHourIsOpen$ = this.store.pipe(select (selectHourIsOpen));
  selectHourIsSaved$ = this.store.pipe(select (selectHourIsSaved));
  private dialogRef!: MatDialogRef<any>;

  filter = new FormControl('', { nonNullable: true });
  dataFilter!: Hour[] | null;
  hours$!: Observable<Hour[] | null>;

  ngOnInit(): void {
    this.selectAllHours$.subscribe(data =>{
      if(data){
        this.hour = data;
      }
    })
    this.store.dispatch(getAllHours());

    this.selectHourUpdate$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllHours())
      }
    })

    this.selectHourDelete$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllHours())
      }
    })

    this.selectHourIsOpen$.subscribe(data =>{
      if(!data && this.dialogRef){
        this.dialogRef.close(data)
      }
    })
    this.selectHourIsSaved$.subscribe(data => {
      if(data){
        this.store.dispatch(getAllHours())
      }
    })

  }

  getAll(){
    this.hourService.readAll().subscribe(value => {
      if (value){
        this.hourList= value;
      }
    })
  }



  onEdit(hour: Hour){
    this.onSelectedHour.emit(hour)
    this.dialogRef = this.dialog.open(CreateHourComponent);
    this.dialogRef.componentInstance.hour = hour

  }
  onDelete(hour: Hour){
    this.onSelectedHour .emit(hour)
    this.dialogRef = this.dialog.open(DeleteHourComponent);
    this.dialogRef.componentInstance.hour= hour

    this.store.dispatch(showDialog())
  }
  // search(args: any) {
  //   const text = this.filterText.trim()
  //   if (text === '') {
  //     this.dataFilter = this.hour
  //   }else{
  //     this.dataFilter= this.hour!.filter(hour =>
  //       hour.fiscalName.toLowerCase().includes(text.toLowerCase())
  //     );
  //   }
  //   return this.dataFilter;
  // }

  get filterText(){
    return this.filter.value;
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (this.hour){
  //     this.dataFilter = this.hour
  //     this.hours$ = this.filter.valueChanges.pipe(
  //       startWith(''),
  //       map((text) => this.search(text)),
  //     );
  //   }
  // }
  onSubmit() {
    this.dialogRef = this.dialog.open(CreateHourComponent);
    this.store.dispatch(showDialog())
  }
}
