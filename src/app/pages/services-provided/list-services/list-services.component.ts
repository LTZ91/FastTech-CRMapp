import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {showDialog} from "../../../../store/actions/services-provided.actions";
import {ServicesProvidedService} from "../../../services/services-provided.service";
import {ServiceState} from "../../../../store/reducers/services-provided.reducers";
import {ServicesProvided} from "../../../models/services-provided";
import {
  selectAllServiceDelete,
  selectAllServices, selectServiceIsOpen, selectServiceIsSaved,
  selectServiceUpdate
} from "../../../../store/selectors/services-provided.selectors";
import {getAllServices} from "../../../../store/actions/services-provided.actions";
import {CreateServicesComponent} from "../create-services/create-services.component";
import {DeleteServicesComponent} from "../delete-services/delete-services.component";

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrl: './list-services.component.scss'
})
export class ListServicesComponent {
  constructor( private serviceService: ServicesProvidedService, private router: Router,
               public dialog: MatDialog,
               private store: Store<ServiceState>) { }

  @Input()
  serviceList!: ServicesProvided[];
  service!: ServicesProvided[] | null;

  @Output() onSelectedService = new EventEmitter<ServicesProvided>();
  selectAllServices$ = this.store.pipe(select (selectAllServices));
  selectServiceUpdate$ = this.store.pipe(select(selectServiceUpdate));
  selectServiceDelete$ = this.store.pipe(select (selectAllServiceDelete));
  selectServiceIsOpen$ = this.store.pipe(select (selectServiceIsOpen));
  selectServiceIsSaved$ = this.store.pipe(select (selectServiceIsSaved));
  private dialogRef!: MatDialogRef<any>;

  filter = new FormControl('', { nonNullable: true });
  dataFilter!: ServicesProvided[] | null;
  service$!: Observable<ServicesProvided[] | null>;

  ngOnInit(): void {
    this.selectAllServices$.subscribe(data =>{
      if(data){
        this.service = data;
      }
    })
    this.store.dispatch(getAllServices());

    this.selectServiceUpdate$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllServices())
      }
    })

    this.selectServiceDelete$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllServices())
      }
    })

    this.selectServiceIsOpen$.subscribe(data =>{
      if(!data && this.dialogRef){
        this.dialogRef.close(data)
      }
    })
    this.selectServiceIsSaved$.subscribe(data => {
      if(data){
        this.store.dispatch(getAllServices())
      }
    })

  }

  getAll(){
    this.serviceService.readAll().subscribe(value => {
      if (value){
        this.serviceList= value;
      }
    })
  }



  onEdit(service: ServicesProvided){
    this.onSelectedService.emit(service)
    this.dialogRef = this.dialog.open(CreateServicesComponent);
    this.dialogRef.componentInstance.service = service

  }
  onDelete(service: ServicesProvided){
    this.onSelectedService.emit(service)
    this.dialogRef = this.dialog.open(DeleteServicesComponent);
    this.dialogRef.componentInstance.service= service

    this.store.dispatch(showDialog())
  }
  search(args: any) {
    const text = this.filterText.trim()
    if (text === '') {
      this.dataFilter = this.service
    }else{
      this.dataFilter= this.service!.filter(service =>
        service.description.toLowerCase().includes(text.toLowerCase())
      );
    }
    return this.dataFilter;
  }

  get filterText(){
    return this.filter.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.service){
      this.dataFilter = this.service
      this.service$ = this.filter.valueChanges.pipe(
        startWith(''),
        map((text) => this.search(text)),
      );
    }
  }
  onSubmit() {
    this.dialogRef = this.dialog.open(CreateServicesComponent);
    this.store.dispatch(showDialog())
  }
}
