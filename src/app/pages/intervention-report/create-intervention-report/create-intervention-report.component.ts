import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {InterventionRequestService} from "../../../services/intervention-request.service";
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {InterventionRequest} from "../../../models/intervention-request";
import {hideDialog} from "../../../../store/actions/client-contact.actions";
import {InterventionReportService} from "../../../services/intervention-report.service";
import {InterventionModeService} from "../../../services/intervention-mode.service";
import {InterventionStatusService} from "../../../services/intervention-status.service";
import {InterventionReportState} from "../../../../store/reducers/intervention-report.reducers";
import {InterventionMode} from "../../../models/intervention-mode";
import {selectInterventionReportIsOpen} from "../../../../store/selectors/intervention-report.selectors";
import {addInterventionReport, closeInterventionReport} from "../../../../store/actions/intervention-report.actions";
import {InterventionReport} from "../../../models/intervention-report";

@Component({
  selector: 'app-create-intervention-report',
  templateUrl: './create-intervention-report.component.html',
  styleUrl: './create-intervention-report.component.scss',

})
export class CreateInterventionReportComponent implements OnInit{
  @Input() firstFormGroup: FormGroup;
  constructor(
    private interventionReportService: InterventionReportService,
    private interventionModeService: InterventionModeService,
    private interventionRequestService: InterventionRequestService,
    private interventionStatusService: InterventionStatusService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store <InterventionReportState>,
  ) {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: [''],
    });
  }

  interventionReport !: InterventionReport;
  interventionRequest! : InterventionRequest [];
  interventionReports! : InterventionReport [];
  interventionMode! : InterventionMode[];
  formInterventionReport!: FormGroup;
  selectInterventionReportIsOpen$ = this.store.pipe(select (selectInterventionReportIsOpen));
  // private dialogRef!: MatDialogRef<boolean>;
  isOpen !: boolean;
  ngOnInit(): void {

    this.getInterventionMode();
    this.getInterventionRequest();
    if(this.interventionReport){
      this.formInterventionReport = this.formBuilder.group({
        id: new FormControl(this.interventionReport.id, Validators.required),
        interventionRequestId: new FormControl(this.interventionReport.interventionRequestId, Validators.required),
        startTime: new FormControl(this.interventionReport.startTime, Validators.required),
        endTime: new FormControl(this.interventionReport.endTime, Validators.required),
        breakTime: new FormControl(this.interventionReport.breakTime, Validators.required),
        discount: new FormControl(this.interventionReport.discount, Validators.required),
        discountReason: new FormControl(this.interventionReport.discountReason, Validators.required),
        activitiesPerformed: new FormArray([new FormControl(this.interventionReport.activitiesPerformed[5], Validators.required)]),
        pendingActivities: new FormArray([new FormControl(this.interventionReport.pendingActivities[5], Validators.required)]),
        interventionModeId: new FormControl(this.interventionReport.interventionModeId, Validators.required),

      });
    }else {
      this.formInterventionReport = this.formBuilder.group({
        interventionRequestId: new FormControl(``, Validators.required),
        startTime: new FormControl(``, Validators.required),
        endTime: new FormControl(``, Validators.required),
        breakTime: new FormControl(``, Validators.required),
        discount: new FormControl(``, Validators.required),
        discountReason: new FormControl(``, Validators.required),
        activitiesPerformed:  new FormArray([new FormControl(``, Validators.required)]),
        pendingActivities:  new FormArray([new FormControl(``, Validators.required)]),
        interventionModeId: new FormControl(``, Validators.required),

      });
    }


  }

  getInterventionMode(){
    this.interventionModeService.readAll().subscribe(value => {
      if(value){
        this.interventionMode=value;
      }
    })
  }
  getInterventionRequest(){
    this.interventionRequestService.readAll().subscribe(value => {
      if(value){
        this.interventionRequest=value;
      }
    })
  }

  onCreate() {
    if (this.interventionReport) {
      this.store.dispatch(closeInterventionReport({payload: this.formInterventionReport.value}));
      this.store.dispatch(hideDialog());
      this.interventionReportService.showMessageSuccess('Report Fechado com Sucesso')
    } else {
      this.store.dispatch(addInterventionReport({payload: this.formInterventionReport.value}));
      this.interventionReportService.showMessageSuccess('Relatório de Intervenção criado  com Sucesso')
    }
    // this.modalRef.close("true")

  }

  onSend() {
    console.log(this.formInterventionReport.value)
    this.interventionReportService.sendInterventionReport(this.formInterventionReport.value).subscribe({
      next: data => {
        if (data) {
          this.interventionReportService.showMessageSuccess(`Intervention Report send Successfully`);
        }
      },
      error: err=>{
        this.interventionReportService.showMessageFail(`Invalid`)
      }
    })

  }

  get pendingActivitiesGroup() {
    return this.formInterventionReport.get('pendingActivities') as FormArray
  }

  get activitiesPerformedGroup() {
    return this.formInterventionReport.get('activitiesPerformed') as FormArray
  }
  cancel() {
    this.formInterventionReport.reset();
  }

}
