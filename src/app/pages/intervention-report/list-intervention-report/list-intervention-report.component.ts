import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import { showDialog} from "../../../../store/actions/intervention-report.actions";
import {InterventionReportService} from "../../../services/intervention-report.service";
import {InterventionReportState} from "../../../../store/reducers/intervention-report.reducers";
import {InterventionReport} from "../../../models/intervention-report";
import {
  selectAllInterventionReport,
  selectAllInterventionReportDelete,
  selectInterventionReportIsOpen,
  selectInterventionReportIsSaved,
  selectInterventionReportIsUpdate,

} from "../../../../store/selectors/intervention-report.selectors";
import {getAllInterventionReport} from "../../../../store/actions/intervention-report.actions";
import {CreateInterventionReportComponent} from "../create-intervention-report/create-intervention-report.component";
import {DeleteInterventionReportComponent} from "../delete-intervention-report/delete-intervention-report.component";

@Component({
  selector: 'app-list-intervention-report',
  templateUrl: './list-intervention-report.component.html',
  styleUrl: './list-intervention-report.component.scss'
})
export class ListInterventionReportComponent implements OnInit{
  constructor( private interventionReportService: InterventionReportService, private router: Router,
               public dialog: MatDialog,
               private store: Store<InterventionReportState>) { }

  @Input()
  interventionReportList!: InterventionReport[];
  interventionReport!: InterventionReport[] | null;

  @Output() onSelectedInterventionReport = new EventEmitter<InterventionReport>();
  selectAllInterventionReport$ = this.store.pipe(select (selectAllInterventionReport));
  selectInterventionReportUpdate$ = this.store.pipe(select(selectInterventionReportIsUpdate));
  selectInterventionReportDelete$ = this.store.pipe(select (selectAllInterventionReportDelete));
  selectInterventionReportIsOpen$ = this.store.pipe(select (selectInterventionReportIsOpen));
  selectInterventionReportIsSaved$ = this.store.pipe(select (selectInterventionReportIsSaved));
  private dialogRef!: MatDialogRef<any>;

  filter = new FormControl('', { nonNullable: true });
  dataFilter!: InterventionReport[] | null;
  interventionReport$!: Observable<InterventionReport[] | null>;

  ngOnInit(): void {
    this.selectAllInterventionReport$.subscribe(data =>{
      if(data){
        this.interventionReport = data;
      }
    })
    this.store.dispatch(getAllInterventionReport());

    this.selectInterventionReportUpdate$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllInterventionReport())
      }
    })

    this.selectInterventionReportDelete$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllInterventionReport())
      }
    })

    this.selectInterventionReportIsOpen$.subscribe(data =>{
      if(!data && this.dialogRef){
        this.dialogRef.close(data)
      }
    })
    this.selectInterventionReportIsSaved$.subscribe(data => {
      if(data){
        this.store.dispatch(getAllInterventionReport())
      }
    })

  }

  getAll(){
    this.interventionReportService.readAll().subscribe(value => {
      if (value){
        this.interventionReportList= value;
      }
    })
  }



  onEdit(interventionReport: InterventionReport){
    this.onSelectedInterventionReport.emit(interventionReport)
    this.dialogRef = this.dialog.open(CreateInterventionReportComponent);
    this.dialogRef.componentInstance.interventionReport = interventionReport

  }
  onDelete(interventionReport: InterventionReport){
    this.onSelectedInterventionReport.emit(interventionReport)
    this.dialogRef = this.dialog.open(DeleteInterventionReportComponent);
    this.dialogRef.componentInstance.interventionReport= interventionReport

    this.store.dispatch(showDialog())
  }
  search(args: any) {
    const text = this.filterText.trim()
    if (text === '') {
      this.dataFilter = this.interventionReport
    }else{
      this.dataFilter= this.interventionReport!.filter(interventionReport =>
        interventionReport.customerContact.toLowerCase().includes(text.toLowerCase())
      );
    }
    return this.dataFilter;
  }

  get filterText(){
    return this.filter.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.interventionReport){
      this.dataFilter = this.interventionReport
      this.interventionReport$ = this.filter.valueChanges.pipe(
        startWith(''),
        map((text) => this.search(text)),
      );
    }
  }
  onSubmit() {
    this.dialogRef = this.dialog.open(CreateInterventionReportComponent);
    this.store.dispatch(showDialog())
  }
}
