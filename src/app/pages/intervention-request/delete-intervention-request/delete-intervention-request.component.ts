import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {hideDialog} from "../../../../store/actions/intervention-request.actions";
import {InterventionRequestService} from "../../../services/intervention-request.service";
import {InterventionRequestState} from "../../../../store/reducers/intervention-request.reducers";
import {InterventionRequest} from "../../../models/intervention-request";
import {
  addInterventionRequest,
  deleteInterventionRequest
} from "../../../../store/actions/intervention-request.actions";

@Component({
  selector: 'app-delete-intervention-request',
  templateUrl: './delete-intervention-request.component.html',
  styleUrl: './delete-intervention-request.component.scss'
})
export class DeleteInterventionRequestComponent implements OnInit{
  constructor(private interventionRequestService: InterventionRequestService,
              public dialog: MatDialog,
              private router: Router,
              private store: Store <InterventionRequestState>) { }

  @Input()
  intervention!: InterventionRequest;


  ngOnInit(): void {
    console.log(this.intervention, 'testando')
  }


  onDeleteInterventionRequest(){

    if(this.intervention){
      this.store.dispatch(deleteInterventionRequest({payload: this.intervention}))
      this.store.dispatch(hideDialog())
      this.interventionRequestService.showMessageSuccess('Apagado com Sucesso')
    }
    else {
      this.store.dispatch(addInterventionRequest({payload: this.intervention}))
      this.interventionRequestService.showMessageFail('Ticket Aberto com Sucesso')
    }

  }

  cancel() {
    this.store.dispatch(hideDialog())
    this.router.navigate(['/list-intervention-request']);
  }
}
