import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InterventionRequest} from "../../../models/intervention-request";
import {
  selectAllInterventionsRequest,
  selectInterventionRequestById
} from "../../../../store/selectors/intervention-request.selectors";
import {select, Store} from "@ngrx/store";
import {InterventionRequestService} from "../../../services/intervention-request.service";
import {ClientContactService} from "../../../services/client-contact.service";
import {InterventionReportState} from "../../../../store/reducers/intervention-report.reducers";
import {InterventionRequestState} from "../../../../store/reducers/intervention-request.reducers";
import {selectAllInterventionReport} from "../../../../store/selectors/intervention-report.selectors";
import {ActivatedRoute, Router} from "@angular/router";
import {InterventionReportService} from "../../../services/intervention-report.service";
import {getInterventionRequestById} from "../../../../store/actions/intervention-request.actions";
import {getInterventionReportByIntRequestId} from "../../../../store/actions/intervention-report.actions";
import {InterventionReport} from "../../../models/intervention-report";


@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.scss'
})
export class RequestDetailsComponent implements OnInit {

  interventionRequest?: InterventionRequest | null;
  id?: number;

  request$ = this.store1.pipe(select(selectInterventionRequestById))
  report$ = this.store2.pipe(select(selectAllInterventionReport))
  report : InterventionReport [] = [];

  constructor(private interventionRequestService: InterventionRequestService,
              private interventionReportService: InterventionReportService,
              private route: ActivatedRoute,
               private store1: Store<InterventionRequestState>,
               private store2: Store<InterventionReportState>,) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(param => {
      if (param) {
        this.store1.dispatch(getInterventionRequestById ({payload : +param['id']}));
      }
    });

    this.request$.subscribe(interventionRequest => {
      if (interventionRequest) {
        this.store2.dispatch(getInterventionReportByIntRequestId ({payload: interventionRequest.id}));
      }
    });

    this.report$.subscribe(data => {
      if (data) {
        this.report = data;
      }
    })
  }



}
