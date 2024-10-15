import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import { hideDialog} from "../../../../store/actions/client.actions";
import {ClientService} from "../../../services/client.service";
import {Client} from "../../../models/client";
import {ClientState} from "../../../../store/reducers/client.reducers";
import {addClient, editClient} from "../../../../store/actions/client.actions";
import {selectClientIsOpen} from "../../../../store/selectors/client.selectors";
import {Country} from "../../../models/country";
import {Person} from "../../../models/person";
import {CountryService} from "../../../services/country.service";
import {PersonService} from "../../../services/person.service";

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.scss'
})
export class CreateClientComponent implements OnInit{

  constructor(
    private clientService: ClientService,
    private countryService: CountryService,
    private personService: PersonService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store <ClientState>,
    ) {}

   client !: Client;
  clients! : Client [];
  country! : Country [];
  person! : Person [];
  formClient!: FormGroup;
  selectClientIsOpen$ = this.store.pipe(select (selectClientIsOpen));
  // private dialogRef!: MatDialogRef<boolean>;
  isOpen !: boolean;
  ngOnInit(): void {

    this.getCountries();
    this.getPerson();
    if(this.client){
      this.formClient = this.formBuilder.group({
        id: new FormControl(this.client.id, Validators.required),
        reference: new FormControl(this.client.reference, Validators.required),
        commercialName: new FormControl(this.client.commercialName, Validators.required),
        personId: new FormControl(this.client.personId, Validators.required),
        countryId: new FormControl(this.client.countryId, Validators.required),
        observation: new FormControl(this.client.observation, Validators.required),
      });
    }else {
      this.formClient = this.formBuilder.group({
        reference: new FormControl(``, Validators.required),
        commercialName: new FormControl(``, Validators.required),
        personId: new FormControl(``, Validators.required),
        countryId: new FormControl(``, Validators.required),
        observation: new FormControl(``, Validators.required),
      });
    }


  }


  getCountries(){
    this.countryService.readAllCountries().subscribe(value => {
      if(value){
        this.country=value;
      }
    })
  }

  getPerson(){
    this.personService.readAllPersons().subscribe(value => {
      if(value){
        this.person=value;
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
      this.clientService.showMessageSuccess('Cliente Criado com Sucesso')
    }
    // this.modalRef.close("true")

  }
  cancel() {
    this.store.dispatch(hideDialog());
  }
}
