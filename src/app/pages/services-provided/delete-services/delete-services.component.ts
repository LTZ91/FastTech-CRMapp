import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {hideDialog} from "../../../../store/actions/services-provided.actions";
import {ServicesProvidedService} from "../../../services/services-provided.service";
import {ServiceState} from "../../../../store/reducers/services-provided.reducers";
import {ServicesProvided} from "../../../models/services-provided";
import {addService, deleteService} from "../../../../store/actions/services-provided.actions";

@Component({
  selector: 'app-delete-services',
  templateUrl: './delete-services.component.html',
  styleUrl: './delete-services.component.scss'
})
export class DeleteServicesComponent implements OnInit{
  constructor(private serviceService: ServicesProvidedService,
              public dialog: MatDialog,
              private router: Router,
              private store: Store <ServiceState>) { }

  @Input()
  service!: ServicesProvided;


  ngOnInit(): void {
    console.log(this.service, 'testando')
  }


  onDeleteService(){

    if(this.service){
      this.store.dispatch(deleteService({payload: this.service}))
      this.store.dispatch(hideDialog())
      this.serviceService.showMessageSuccess('Apagado com Sucesso')
    }
    else {
      this.store.dispatch(addService({payload: this.service}))
      this.serviceService.showMessageFail('Serviço criado com Sucesso')
    }

  }

  cancel() {
    this.store.dispatch(hideDialog())
    this.router.navigate(['/list-services']);
  }
}
