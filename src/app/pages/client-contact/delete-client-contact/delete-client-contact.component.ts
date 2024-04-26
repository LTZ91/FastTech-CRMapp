import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {hideDialog} from "../../../../store/actions/client-contact.actions";
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


  onDeleteContact(){

    if(this.clientContact){
      this.store.dispatch(deleteClientContact({payload: this.clientContact}))
      this.store.dispatch(hideDialog())
      this.clientContactService.showMessageSuccess('Apagado com Sucesso')
    }
    else {
      this.store.dispatch(addClientContact({payload: this.clientContact}))
      this.clientContactService.showMessageFail('Cliente Criado com Sucesso')
    }

  }

  cancel() {
    this.store.dispatch(hideDialog())
    this.router.navigate(['/list-contach']);
  }

}
