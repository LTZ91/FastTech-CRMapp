import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import { hideDialog} from "../../../../store/actions/user.actions";
import {ClientService} from "../../../services/client.service";
import {Client} from "../../../models/client";
import {ClientState} from "../../../../store/reducers/client.reducers";
import {addClient, editClient} from "../../../../store/actions/client.actions";
import {selectClientIsOpen} from "../../../../store/selectors/client.selectors";
import {Country} from "../../../models/country";
import {Language} from "../../../models/language";
import {Person} from "../../../models/person";

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.scss'
})
export class CreateClientComponent implements OnInit{

  constructor(
    private clientService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store <ClientState>,
    ) {}

   client !: Client;
  clients! : Client [];
  country! : Country [];
  language! : Language [];
  person! : Person [];
  formClient!: FormGroup;
  selectClientIsOpen$ = this.store.pipe(select (selectClientIsOpen));
  // private dialogRef!: MatDialogRef<boolean>;
  isOpen !: boolean;
  ngOnInit(): void {

    this.getCountries();
    if(this.client){
      this.formClient = this.formBuilder.group({
        id: new FormControl(this.client.id, Validators.required),
        reference: new FormControl(this.client.reference, Validators.required),
        fiscalName: new FormControl(this.client.fiscalName, Validators.required),
        commercialName: new FormControl(this.client.commercialName, Validators.required),
        taxNumber: new FormControl(this.client.taxNumber, Validators.required),
        personId: new FormControl(this.client.personId, Validators.required),
        countryId: new FormControl(this.client.countryId, Validators.required),
        languageId: new FormControl(this.client.languageId, Validators.required),
      });
    }else {
      this.formClient = this.formBuilder.group({
        reference: new FormControl(``, Validators.required),
        fiscalName: new FormControl(``, Validators.required),
        commercialName: new FormControl(``, Validators.required),
        taxNumber: new FormControl(``, Validators.required),
        personId: new FormControl(``, Validators.required),
        countryId: new FormControl(``, Validators.required),
        languageId: new FormControl(``, Validators.required),

      });
    }


  }


  getCountries(){
    this.clientService.readAllCountries().subscribe(value => {
      if(value){
        this.country=value;
      }
    })
  }



  onCreate() {
    if (this.client) {
      this.store.dispatch(editClient({payload: this.formClient.value}));
      this.store.dispatch(hideDialog());
      this.clientService.showMessageSuccess('Editado com Sucesso')
    } else {
      this.store.dispatch(addClient({payload: this.formClient.value}));
      this.clientService.showMessageSuccess('Usuário Criado com Sucesso')
    }
    // this.modalRef.close("true")

  }
  cancel() {
    this.store.dispatch(hideDialog());
  }
}
