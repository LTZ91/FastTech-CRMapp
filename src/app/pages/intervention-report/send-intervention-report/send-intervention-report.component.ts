import {Component, OnInit} from '@angular/core';
import {HourService} from "../../../services/hour.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {HourState} from "../../../../store/reducers/hour.reducers";
import {MatDialogRef} from "@angular/material/dialog";
import {Hour} from "../../../models/hour";
import {Client} from "../../../models/client";
import {Country} from "../../../models/country";
import {Language} from "../../../models/language";
import {Person} from "../../../models/person";
import {selectHourIsOpen} from "../../../../store/selectors/hour.selectors";
import {addHour, editHour, hideDialog} from "../../../../store/actions/hour.actions";
import {InterventionReportService} from "../../../services/intervention-report.service";
import {InterventionReportState} from "../../../../store/reducers/intervention-report.reducers";
import {InterventionReport} from "../../../models/intervention-report";
import {selectInterventionReportIsOpen} from "../../../../store/selectors/intervention-report.selectors";

@Component({
  selector: 'app-send-intervention-report',
  templateUrl: './send-intervention-report.component.html',
  styleUrl: './send-intervention-report.component.scss'
})
export class SendInterventionReportComponent implements OnInit{
  constructor(
    private interventionReportService: InterventionReportService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store <InterventionReportState>,
  ) {}

  interventionReports !: InterventionReport;
  interventionReport !: InterventionReport[];
  clients! : Client [];
  country! : Country [];
  language! : Language [];
  person! : Person [];
  formInterventionReport!: FormGroup;
  selectInterventionReportIsOpen$ = this.store.pipe(select (selectInterventionReportIsOpen));
  // private dialogRef!: MatDialogRef<boolean>;
  isOpen !: boolean;
  ngOnInit(): void {

    if(this.interventionReports){
      this.formInterventionReport = this.formBuilder.group({
        id: new FormControl(this.interventionReports.id, Validators.required),
        interventionReason: new FormControl(this.interventionReports.interventionReason, Validators.required),
      });
    }else {
      this.formInterventionReport = this.formBuilder.group({
        interventionReason: new FormControl(``, Validators.required),
      });
    }


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
  cancel() {
    this.formInterventionReport.reset()
  }
}
