import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {getAllInterventionsRequest, showDialog} from "../../../../store/actions/intervention-request.actions";
import {InterventionRequestService} from "../../../services/intervention-request.service";
import {InterventionRequestState} from "../../../../store/reducers/intervention-request.reducers";
import {InterventionRequest} from "../../../models/intervention-request";
import {
  selectAllInterventionRequestDelete,
  selectAllInterventionsRequest, selectInterventionRequestIsOpen, selectInterventionRequestIsSaved,
  selectInterventionsRequestUpdate
} from "../../../../store/selectors/intervention-request.selectors";
import {CreateInterventionRequestComponent} from "../create-intervention-request/create-intervention-request.component";
import {DeleteInterventionRequestComponent} from "../delete-intervention-request/delete-intervention-request.component";
@Component({
  selector: 'app-list-intervention-request',
  templateUrl: './list-intervention-request.component.html',
  styleUrl: './list-intervention-request.component.scss'
})
export class ListInterventionRequestComponent implements OnInit{

  constructor( private interventionRequestService: InterventionRequestService,
               private router: Router,
               public dialog: MatDialog,
               private store: Store<InterventionRequestState>) { }

  @Input()
  interventionRequestList!: InterventionRequest[];
  interventionRequest!: InterventionRequest[] | null;

  @Output() onSelectedInterventionRequest = new EventEmitter<InterventionRequest>();
  selectAllInterventionRequest$ = this.store.pipe(select (selectAllInterventionsRequest));
  selectInterventionRequestUpdate$ = this.store.pipe(select(selectInterventionsRequestUpdate));
  selectInterventionRequestDelete$ = this.store.pipe(select (selectAllInterventionRequestDelete));
  selectInterventionRequestIsOpen$ = this.store.pipe(select (selectInterventionRequestIsOpen));
  selectInterventionRequestIsSaved$ = this.store.pipe(select (selectInterventionRequestIsSaved));
  private dialogRef!: MatDialogRef<any>;

  filter = new FormControl('', { nonNullable: true });
  dataFilter!: InterventionRequest[] | null;
  interventionRequest$!: Observable<InterventionRequest[] | null>;

  ngOnInit(): void {
    this.selectAllInterventionRequest$.subscribe(data =>{
      if(data){
        this.interventionRequest = data;
      }
    })
    this.store.dispatch(getAllInterventionsRequest());

    this.selectInterventionRequestUpdate$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllInterventionsRequest())
      }
    })

    this.selectInterventionRequestDelete$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllInterventionsRequest())
      }
    })

    this.selectInterventionRequestIsOpen$.subscribe(data =>{
      if(!data && this.dialogRef){
        this.dialogRef.close(data)
      }
    })
    this.selectInterventionRequestIsSaved$.subscribe(data => {
      if(data){
        this.store.dispatch(getAllInterventionsRequest())
      }
    })

  }

  getAll(){
    this.interventionRequestService.readAll().subscribe(value => {
      if (value){
        this.interventionRequestList= value;
      }
    })
  }



  onEdit(interventionRequest: InterventionRequest){
    this.onSelectedInterventionRequest.emit(interventionRequest)
    this.dialogRef = this.dialog.open(CreateInterventionRequestComponent);
    this.dialogRef.componentInstance.interventionRequest = interventionRequest

  }
  onDelete(interventionRequest: InterventionRequest){
    this.onSelectedInterventionRequest.emit(interventionRequest)
    this.dialogRef = this.dialog.open(DeleteInterventionRequestComponent);
    this.dialogRef.componentInstance.interventionRequest= interventionRequest

    this.store.dispatch(showDialog())
  }
  search(args: any) {
    const text = this.filterText.trim()
    if (text === '') {
      this.dataFilter = this.interventionRequest
    }else{
      this.dataFilter= this.interventionRequest!.filter(interventionRequest =>
        interventionRequest.status.toLowerCase().includes(text.toLowerCase())
      );
    }
    return this.dataFilter;
  }

  get filterText(){
    return this.filter.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.interventionRequest){
      this.dataFilter = this.interventionRequest
      this.interventionRequest$ = this.filter.valueChanges.pipe(
        startWith(''),
        map((text) => this.search(text)),
      );
    }
  }
  onSubmit() {
    this.dialogRef = this.dialog.open(CreateInterventionRequestComponent);
    this.store.dispatch(showDialog())
  }

  requestDetails(request: InterventionRequest) {
    console.log(request)
    this.router.navigateByUrl(`/request-details/${request.id}`)
  }
}
