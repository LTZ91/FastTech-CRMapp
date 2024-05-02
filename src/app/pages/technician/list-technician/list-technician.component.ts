import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {ClientService} from "../../../services/client.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {showDialog} from "../../../../store/actions/user.actions";
import {TechnicianService} from "../../../services/technician.service";
import {TechnicianState} from "../../../../store/reducers/technician.reducers";
import {Technician} from "../../../models/technician";
import {
  selectAllTechnicianDelete,
  selectAllTechnicians, selectTechnicianIsOpen, selectTechnicianIsSaved,
  selectTechnicianUpdate
} from "../../../../store/selectors/technician.selectors";
import {getAllTechnicians} from "../../../../store/actions/technician.actions";
import {CreateTechnicianComponent} from "../create-technician/create-technician.component";
import {DeleteTechnicianComponent} from "../delete-technician/delete-technician.component";

@Component({
  selector: 'app-list-technician',
  templateUrl: './list-technician.component.html',
  styleUrl: './list-technician.component.scss'
})
export class ListTechnicianComponent {
  constructor( private technicianService: TechnicianService, private router: Router,
               public dialog: MatDialog,
               private store: Store<TechnicianState>) { }

  @Input()
  technicianList!: Technician[];
  technician!: Technician[] | null;

  @Output() onSelectedTechnician = new EventEmitter<Technician>();
  selectAllTechnicians$ = this.store.pipe(select (selectAllTechnicians));
  selectTechnicianUpdate$ = this.store.pipe(select(selectTechnicianUpdate));
  selectTechnicianDelete$ = this.store.pipe(select (selectAllTechnicianDelete));
  selectTechnicianIsOpen$ = this.store.pipe(select (selectTechnicianIsOpen));
  selectTechnicianIsSaved$ = this.store.pipe(select (selectTechnicianIsSaved));
  private dialogRef!: MatDialogRef<any>;

  filter = new FormControl('', { nonNullable: true });
  dataFilter!: Technician[] | null;
  technician$!: Observable<Technician[] | null>;

  ngOnInit(): void {
    this.selectAllTechnicians$.subscribe(data =>{
      if(data){
        this.technician = data;
      }
    })
    this.store.dispatch(getAllTechnicians());

    this.selectTechnicianUpdate$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllTechnicians())
      }
    })

    this.selectTechnicianDelete$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllTechnicians())
      }
    })

    this.selectTechnicianIsOpen$.subscribe(data =>{
      if(!data && this.dialogRef){
        this.dialogRef.close(data)
      }
    })
    this.selectTechnicianIsSaved$.subscribe(data => {
      if(data){
        this.store.dispatch(getAllTechnicians())
      }
    })

  }

  getAll(){
    this.technicianService.readAll().subscribe(value => {
      if (value){
        this.technicianList= value;
      }
    })
  }



  onEdit(technician: Technician){
    this.onSelectedTechnician.emit(technician)
    this.dialogRef = this.dialog.open(CreateTechnicianComponent);
    this.dialogRef.componentInstance.technician = technician

  }
  onDelete(technician: Technician){
    this.onSelectedTechnician.emit(technician)
    this.dialogRef = this.dialog.open(DeleteTechnicianComponent);
    this.dialogRef.componentInstance.technician= technician

    this.store.dispatch(showDialog())
  }
  search(args: any) {
    const text = this.filterText.trim()
    if (text === '') {
      this.dataFilter = this.technician
    }else{
      this.dataFilter= this.technician!.filter(technician =>
        technician.position.toLowerCase().includes(text.toLowerCase())
      );
    }
    return this.dataFilter;
  }

  get filterText(){
    return this.filter.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.technician){
      this.dataFilter = this.technician
      this.technician$ = this.filter.valueChanges.pipe(
        startWith(''),
        map((text) => this.search(text)),
      );
    }
  }
  onSubmit() {
    this.dialogRef = this.dialog.open(CreateTechnicianComponent);
    this.store.dispatch(showDialog())
  }
}
