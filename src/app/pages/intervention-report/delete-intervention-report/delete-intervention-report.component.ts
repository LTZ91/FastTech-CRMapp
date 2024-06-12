import {Component, Input, OnInit} from '@angular/core';
import {PriceService} from "../../../services/price.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {PriceState} from "../../../../store/reducers/price.reducers";
import {Price} from "../../../models/price";
import {addPrice, deletePrice, hideDialog} from "../../../../store/actions/price.actions";
import {InterventionReportService} from "../../../services/intervention-report.service";
import {InterventionReportState} from "../../../../store/reducers/intervention-report.reducers";
import {InterventionReport} from "../../../models/intervention-report";
import {
  addInterventionReport,
  closeInterventionReport,
  deleteInterventionReport
} from "../../../../store/actions/intervention-report.actions";

@Component({
  selector: 'app-delete-intervention-report',
  templateUrl: './delete-intervention-report.component.html',
  styleUrl: './delete-intervention-report.component.scss'
})
export class DeleteInterventionReportComponent implements  OnInit{
  constructor(private interventionReportService: InterventionReportService,
              public dialog: MatDialog,
              private router: Router,
              private store: Store <InterventionReportState>) { }

  @Input()
  interventionReport!: InterventionReport;


  ngOnInit(): void {
    console.log(this.interventionReport, 'testando')
  }


  onDelete(){

    if(this.interventionReport){
      this.store.dispatch(closeInterventionReport({payload: this.interventionReport}))
      this.store.dispatch(hideDialog())
      this.interventionReportService.showMessageSuccess('Fechado com Sucesso')
    }
    else {
      this.store.dispatch(addInterventionReport({payload: this.interventionReport}))
      this.interventionReportService.showMessageFail('Intervention Report criado com Sucesso')
    }

  }

  cancel() {
    this.store.dispatch(hideDialog())
    this.router.navigate(['/list-intervention-report']);
  }
}
