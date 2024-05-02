import {Component, Input, OnInit} from '@angular/core';
import {TechnicianService} from "../../../services/technician.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {TechnicianState} from "../../../../store/reducers/technician.reducers";
import {Technician} from "../../../models/technician";
import {addTechnician, deleteTechnician, hideDialog} from "../../../../store/actions/technician.actions";
import {ClientContactService} from "../../../services/client-contact.service";
import {ClientContactState} from "../../../../store/reducers/client-contact.reducers";
import {ClientContact} from "../../../models/client-contact";
import {addClientContact, deleteClientContact} from "../../../../store/actions/client-contact.actions";

@Component({
  selector: 'app-delete-client-contact',
  templateUrl: './delete-client-contact.component.html',
  styleUrl: './delete-client-contact.component.scss'
})
export class DeleteClientContactComponent implements OnInit{
  constructor(private clientContactService: ClientContactService,
              public dialog: MatDialog,
              private router: Router,
              private store: Store <ClientContactState>) { }

  @Input()
  clientContact!: ClientContact;


  ngOnInit(): void {
    console.log(this.clientContact, 'testando')
  }


  onDelete(){

    if(this.clientContact){
      this.store.dispatch(deleteClientContact({payload: this.clientContact}))
      this.store.dispatch(hideDialog())
      this.clientContactService.showMessageSuccess('Apagado com Sucesso')
    }
    else {
      this.store.dispatch(addClientContact({payload: this.clientContact}))
      this.clientContactService.showMessageFail('Contact do Cliente Criado com Sucesso')
    }

  }

  cancel() {
    this.store.dispatch(hideDialog())
    this.router.navigate(['/list-client-contact']);
  }
}
