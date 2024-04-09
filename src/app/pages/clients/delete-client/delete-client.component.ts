import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";

import { hideDialog} from "../../../../store/actions/user.actions";
import {ClientService} from "../../../services/client.service";
import {ClientState} from "../../../../store/reducers/client.reducers";
import {Client} from "../../../models/client";
import {addClient, deleteClient} from "../../../../store/actions/client.actions";

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrl: './delete-client.component.scss'
})
export class DeleteClientComponent implements OnInit{

  constructor(private clientService: ClientService,
              public dialog: MatDialog,
              private router: Router,
              private store: Store <ClientState>) { }

  @Input()
  client!: Client;


  ngOnInit(): void {
    console.log(this.client, 'testando')
  }


  onDeleteUser(){

    if(this.client){
      this.store.dispatch(deleteClient({payload: this.client}))
      this.store.dispatch(hideDialog())
      this.clientService.showMessageSuccess('Apagado com Sucesso')
    }
    else {
      this.store.dispatch(addClient({payload: this.client}))
      this.clientService.showMessageFail('Cliente Criado com Sucesso')
    }

  }

  cancel() {
    this.store.dispatch(hideDialog())
    this.router.navigate(['/list-client']);
  }

}
