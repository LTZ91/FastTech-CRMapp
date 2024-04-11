import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../services/client.service";
import {CountryService} from "../../../services/country.service";
import {PersonService} from "../../../services/person.service";
import {LanguageService} from "../../../services/language.service";
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {ClientState} from "../../../../store/reducers/client.reducers";
import {Client} from "../../../models/client";
import {Country} from "../../../models/country";
import {Language} from "../../../models/language";
import {Person} from "../../../models/person";
import {selectClientIsOpen} from "../../../../store/selectors/client.selectors";
import {addClient, editClient} from "../../../../store/actions/client.actions";
import {hideDialog} from "../../../../store/actions/user.actions";
import {ServicesProvidedService} from "../../../services/services-provided.service";
import {PriceService} from "../../../services/price.service";
import {HourService} from "../../../services/hour.service";
import {ServiceState} from "../../../../store/reducers/services-provided.reducers";
import {ServicesProvided} from "../../../models/services-provided";
import {Price} from "../../../models/price";
import {Hour} from "../../../models/hour";
import {selectServiceIsOpen} from "../../../../store/selectors/services-provided.selectors";
import {addService, editService} from "../../../../store/actions/services-provided.actions";

@Component({
  selector: 'app-create-services',
  templateUrl: './create-services.component.html',
  styleUrl: './create-services.component.scss'
})
export class CreateServicesComponent implements  OnInit{
  constructor(
    private serviceService: ServicesProvidedService,
    private priceService: PriceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store <ServiceState>,
  ) {}

  service !: ServicesProvided;
  services! : ServicesProvided [];
  price! : Price [];
  formService!: FormGroup;
  selectServiceIsOpen$ = this.store.pipe(select (selectServiceIsOpen));
  // private dialogRef!: MatDialogRef<boolean>;
  isOpen !: boolean;
  ngOnInit(): void {

    this.getPrice();
    if(this.service){
      this.formService = this.formBuilder.group({
        id: new FormControl(this.service.id, Validators.required),
        description: new FormControl(this.service.description, Validators.required),
        priceId: new FormControl(this.service.price, Validators.required),
        // hourId: new FormControl(this.service.hour, Validators.required),
        conditions:  new FormArray([new FormControl(this.service.conditions[0], Validators.required),
          new FormControl(this.service.conditions[1], Validators.required)]),
      });
    }else {
      this.formService = this.formBuilder.group({
        description: new FormControl(``, Validators.required),
        priceId: new FormControl(``, Validators.required),
        // hourId: new FormControl(``, Validators.required),
        conditions: new FormArray([new FormControl(``, Validators.required),
          new FormControl(``, Validators.required)]),
      });
    }


  }




  getPrice(){
    this.priceService.readAll().subscribe(value => {
      if(value){
        this.price=value;
      }
    })
  }



  onCreate() {
    if (this.service) {
      this.store.dispatch(editService({payload: this.formService.value}));
      this.store.dispatch(hideDialog());
      this.serviceService.showMessageSuccess('Editado com Sucesso')
    } else {
      this.store.dispatch(addService({payload: this.formService.value}));
      this.serviceService.showMessageSuccess('Cliente Criado com Sucesso')
    }
    // this.modalRef.close("true")

  }

  get conditionsGroup() {
    return this.formService.get('conditions') as FormArray
  }
  cancel() {
    this.store.dispatch(hideDialog());
  }
}
