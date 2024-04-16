import {Component, OnInit} from '@angular/core';
import {ContractService} from "../../../services/contract.service";
import {ServicesProvidedService} from "../../../services/services-provided.service";
import {PriceService} from "../../../services/price.service";
import {ClientService} from "../../../services/client.service";
import {ContractStatusService} from "../../../services/contract-status.service";
import {HourService} from "../../../services/hour.service";
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {ContractState} from "../../../../store/reducers/contract.reducers";
import {Contract} from "../../../models/contract";
import {Price} from "../../../models/price";
import {Hour} from "../../../models/hour";
import {Client} from "../../../models/client";
import {ServicesProvided} from "../../../models/services-provided";
import {ContractStatus} from "../../../models/contract-status";
import {selectContractIsOpen} from "../../../../store/selectors/contract.selectors";
import {addContract, editContract, hideDialog} from "../../../../store/actions/contract.actions";
import {TechnicianService} from "../../../services/technician.service";
import {TechnicianState} from "../../../../store/reducers/technician.reducers";
import {Technician} from "../../../models/technician";
import {selectTechnicianIsOpen} from "../../../../store/selectors/technician.selectors";
import {PositionService} from "../../../services/position.service";
import {Position} from "../../../models/position";
import {addTechnician, editTechnician} from "../../../../store/actions/technician.actions";

@Component({
  selector: 'app-create-technician',
  templateUrl: './create-technician.component.html',
  styleUrl: './create-technician.component.scss'
})
export class CreateTechnicianComponent implements OnInit{
  constructor(
    private technicianService: TechnicianService,
    private positionService: PositionService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store <TechnicianState>,
  ) {}

  technician !: Technician;
  technicians! : Technician [];
  position! : Position[];
  formTechnician!: FormGroup;
  selectContractIsOpen$ = this.store.pipe(select (selectTechnicianIsOpen));
  // private dialogRef!: MatDialogRef<boolean>;
  isOpen !: boolean;
  ngOnInit(): void {

    this.getPosition();
    if(this.technician){
      this.formTechnician = this.formBuilder.group({
        id: new FormControl(this.technician.id, Validators.required),
        identificationNumber: new FormControl(this.technician.identificationNumber, Validators.required),
        taxNumber: new FormControl(this.technician.taxNumber, Validators.required),
        hiringDate: new FormControl(this.technician.hiringDate, Validators.required),
        positionId: new FormControl(this.technician.positionId, Validators.required),
      });
    }else {
      this.formTechnician = this.formBuilder.group({
        identificationNumber: new FormControl(``, Validators.required),
        taxNumber: new FormControl(``, Validators.required),
        hiringDate: new FormControl(``, Validators.required),
        positionId: new FormControl(``, Validators.required),
      });
    }


  }




  getPosition(){
    this.positionService.readAll().subscribe(value => {
      if(value){
        this.position=value;
      }
    })
  }

  onCreate() {
    if (this.technician) {
      this.store.dispatch(editTechnician({payload: this.formTechnician.value}));
      this.store.dispatch(hideDialog());
      this.technicianService.showMessageSuccess('Editado com Sucesso')
    } else {
      this.store.dispatch(addTechnician({payload: this.formTechnician.value}));
      this.technicianService.showMessageSuccess('Técnico Criado com Sucesso')
    }
    // this.modalRef.close("true")

  }

  cancel() {
    this.store.dispatch(hideDialog());
  }
}
