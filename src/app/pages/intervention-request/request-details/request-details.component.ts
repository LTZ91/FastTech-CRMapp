import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InterventionRequest} from "../../../models/intervention-request";
import {InterventionRequestService} from "../../../services/intervention-request.service";
import {ActivatedRoute, Router} from "@angular/router";
import {getAllInterventionsRequest} from "../../../../store/actions/intervention-request.actions";
import {select, Store} from "@ngrx/store";
import {
  selectAllInterventionRequestDelete,
  selectAllInterventionsRequest, selectInterventionRequestIsOpen, selectInterventionRequestIsSaved,
  selectInterventionsRequestUpdate
} from "../../../../store/selectors/intervention-request.selectors";
import {MatDialogRef} from "@angular/material/dialog";
import {InterventionReportService} from "../../../services/intervention-report.service";
import {InterventionRequestState} from "../../../../store/reducers/intervention-request.reducers";
import {InterventionReportState} from "../../../../store/reducers/intervention-report.reducers";
import {InterventionReport} from "../../../models/intervention-report";
import {
  selectAllInterventionReport,
  selectAllInterventionReportDelete,
  selectInterventionReportIsOpen,
  selectInterventionReportIsSaved,
  selectInterventionReportIsUpdate
} from "../../../../store/selectors/intervention-report.selectors";
import {getAllInterventionReport} from "../../../../store/actions/intervention-report.actions";
import {Observable} from "rxjs";

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.scss'
})
export class RequestDetailsComponent {


  request!: InterventionRequest;
  report!: InterventionReport;

  constructor(private interventionRequestService: InterventionRequestService,
              private interventionReportService: InterventionReportService,
              private router: Router,
              private store: Store<InterventionReportState>,
              private route: ActivatedRoute) {}

  @Input()
  interventionReportList!: InterventionReport[];
  interventionReport!: InterventionReport[] | null;

  @Output() onSelectedInterventionRequest = new EventEmitter<InterventionReport>();
  selectAllInterventionReport$ = this.store.pipe(select (selectAllInterventionReport));
  selectInterventionReportUpdate$ = this.store.pipe(select(selectInterventionReportIsUpdate));
  selectInterventionReportDelete$ = this.store.pipe(select (selectAllInterventionReportDelete));
  selectInterventionReportIsOpen$ = this.store.pipe(select (selectInterventionReportIsOpen));
  selectInterventionReportIsSaved$ = this.store.pipe(select (selectInterventionReportIsSaved));
  private dialogRef!: MatDialogRef<any>;


  ngOnInit(): void{
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


    const idParamID = this.route.snapshot.paramMap.get('id');
    const idRep = idParamID ? +idParamID : null;
    if (idRep !== null) {
      this.interventionReportService.getInterventionReportByIntRequestId(this.request).subscribe(data => {
        if (data) {
          this.report = data;
          console.log(data);
        }
      });
    } else {
      console.error('ID is null');
    }

    this.selectAllInterventionReport$.subscribe(data =>{
      if(data){
        this.interventionReport = data;
      }
    })
    this.store.dispatch(getAllInterventionReport());


  }

  send() {

  }
}
