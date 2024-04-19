import {Component, OnInit} from '@angular/core';
import {ServicesProvidedService} from "../../../services/services-provided.service";
import {PriceService} from "../../../services/price.service";
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {ServicesProvided} from "../../../models/services-provided";
import {Price} from "../../../models/price";
import { hideDialog} from "../../../../store/actions/contract.actions";
import {ContractService} from "../../../services/contract.service";
import {HourService} from "../../../services/hour.service";
import {ContractState} from "../../../../store/reducers/contract.reducers";
import {Contract} from "../../../models/contract";
import {Hour} from "../../../models/hour";
import {selectContractIsOpen} from "../../../../store/selectors/contract.selectors";
import {Client} from "../../../models/client";
import {addContract, editContract} from "../../../../store/actions/contract.actions";
import {ContractStatus} from "../../../models/contract-status";
import {ContractStatusService} from "../../../services/contract-status.service";
import {ClientService} from "../../../services/client.service";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrl: './create-contract.component.scss'
})
export class CreateContractComponent implements OnInit{
  constructor(
    private contractService: ContractService,
    private serviceService: ServicesProvidedService,
    private priceService: PriceService,
    private clientService: ClientService,
    private contractStatusService: ContractStatusService,
    private hourService: HourService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store <ContractState>,
  ) {}

  contract !: Contract;
  contracts! : Contract [];
  price! : Price [];
  hour! : Hour[];
  client! : Client[];
  service!: ServicesProvided[];
  status! : ContractStatus[];
  formContract!: FormGroup;
  selectContractIsOpen$ = this.store.pipe(select (selectContractIsOpen));
  // private dialogRef!: MatDialogRef<boolean>;
  isOpen !: boolean;
  ngOnInit(): void {

    this.getStatus();
    this.getClient();
    this.getService();
    if(this.contract){
      this.formContract = this.formBuilder.group({
        id: new FormControl(this.contract.id, Validators.required),
        customerId: new FormControl(this.contract.customerId, Validators.required),
        serviceId: new FormControl(this.contract.serviceId, Validators.required),
        startDate: new FormControl(this.contract.startDate, Validators.required),
        endDate: new FormControl(this.contract.endDate, Validators.required),
        statusId: new FormControl(this.contract.statusId, Validators.required),
        terms:  new FormArray([new FormControl(this.contract.terms[5], Validators.required)]),
        conditions:  new FormArray([new FormControl(this.contract.conditions[5], Validators.required)]),

      });
    }else {
      this.formContract = this.formBuilder.group({
        customerId: new FormControl(``, Validators.required),
        serviceId: new FormControl(``, Validators.required),
        startDate: new FormControl(``, Validators.required),
        endDate: new FormControl(``, Validators.required),
        statusId: new FormControl(``, Validators.required),
        terms:  new FormArray([new FormControl(``, Validators.required)]),
        conditions:  new FormArray([new FormControl(``, Validators.required)]),

      });
    }


  }




  getStatus(){
    this.contractStatusService.readAll().subscribe(value => {
      if(value){
        this.status=value;
      }
    })
  }

  getClient(){
    this.clientService.readAll().subscribe(value => {
      if(value){
        this.client=value;
      }
    })
  }

  getService(){
    this.serviceService.readAll().subscribe(value => {
      if(value){
        this.service=value;
      }
    })
  }



  onCreate() {
    if (this.contract) {
      this.store.dispatch(editContract({payload: this.formContract.value}));
      this.store.dispatch(hideDialog());
      this.contractService.showMessageSuccess('Editado com Sucesso')
    } else {
      this.store.dispatch(addContract({payload: this.formContract.value}));
      this.contractService.showMessageSuccess('Contracto Criado com Sucesso')
    }
    // this.modalRef.close("true")

  }

  get conditionsGroup() {
    return this.formContract.get('conditions') as FormArray
  }

  get termsGroup() {
    return this.formContract.get('terms') as FormArray
  }
  cancel() {
    this.store.dispatch(hideDialog());
  }
}
