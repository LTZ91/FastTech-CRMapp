import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InterventionRequest} from "../../../models/intervention-request";
import {InterventionReport} from "../../../models/intervention-report";
import {FormBuilder, FormGroup} from "@angular/forms";
import {InterventionMode} from "../../../models/intervention-mode";
import {InterventionRequestService} from "../../../services/intervention-request.service";
import {InterventionReportService} from "../../../services/intervention-report.service";
import {InterventionModeService} from "../../../services/intervention-mode.service";
import {ActivatedRoute, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {InterventionReportState} from "../../../../store/reducers/intervention-report.reducers";
import {
  selectAllInterventionReport,
  selectAllInterventionReportDelete,
  selectInterventionReportIsOpen,
  selectInterventionReportIsSaved,
  selectIntReportByIntRequestId
} from "../../../../store/selectors/intervention-report.selectors";
import {MatDialogRef} from "@angular/material/dialog";
import {InterventionRequestState} from "../../../../store/reducers/intervention-request.reducers";

@Component({
  selector: 'app-intervention-request-item',
  templateUrl: './intervention-request-item.component.html',
  styleUrl: './intervention-request-item.component.scss'
})
export class InterventionRequestItemComponent implements OnInit {
  request!: InterventionRequest;
  report!: InterventionReport;
  formInterventionReport!: FormGroup;
  interventionMode! : InterventionMode[];
  interventionRequest! : InterventionRequest[];


  constructor(private interventionRequestService: InterventionRequestService,
              private interventionReportService: InterventionReportService,
              private interventionModeService: InterventionModeService,

              private router: Router,
              private store: Store<InterventionRequestState>,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: [''],
    });
  }

  @Input()
  interventionReportList!: InterventionReport[];
  interventionReport!: InterventionReport[] | null;
  firstFormGroup: FormGroup;

  @Output() onSelectedInterventionRequest = new EventEmitter<InterventionReport>();
  selectAllInterventionReport$ = this.store.pipe(select (selectAllInterventionReport));
  selectIntReportByIntRequestId$ = this.store.pipe(select(selectIntReportByIntRequestId));
  selectInterventionReportDelete$ = this.store.pipe(select (selectAllInterventionReportDelete));
  selectInterventionReportIsOpen$ = this.store.pipe(select (selectInterventionReportIsOpen));
  selectInterventionReportIsSaved$ = this.store.pipe(select (selectInterventionReportIsSaved));
  private dialogRef!: MatDialogRef<any>;


  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;

    if (id !== null) {
      this.interventionRequestService.getInterventionRequestById(id).subscribe(data => {
        if (data) {
          this.request = data;
          console.log(data);
        }
      })
    } else {
      console.error('ID is null');
    }



  }

  send() {

  }

  onEdit() {

  }



}
