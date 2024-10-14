import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {hideDialog} from "../../../../store/actions/intervention-request.actions";
import {InterventionRequestService} from "../../../services/intervention-request.service";
import {TechnicianService} from "../../../services/technician.service";
import {InterventionRequestState} from "../../../../store/reducers/intervention-request.reducers";
import {InterventionRequest} from "../../../models/intervention-request";
import {Technician} from "../../../models/technician";
import {selectInterventionRequestIsOpen} from "../../../../store/selectors/intervention-request.selectors";
import {addInterventionRequest, editInterventionRequest} from "../../../../store/actions/intervention-request.actions";
import {ClientContact} from "../../../models/client-contact";
import {ClientContactService} from "../../../services/client-contact.service";
import {PriorityService} from "../../../services/priority.service";
import {Priority} from "../../../models/priority";
import {ClassificationService} from "../../../services/classification.service";
import {Client} from "../../../models/client";
import {ClientService} from "../../../services/client.service";
import {PeriodService} from "../../../services/period.service";
import {Period} from "../../../models/period";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-intervention-request',
  templateUrl: './create-intervention-request.component.html',
  styleUrl: './create-intervention-request.component.scss'
})
export class CreateInterventionRequestComponent implements OnInit{
  // @Input() secondFormGroup: FormGroup;
  constructor(
    private interventionRequestService: InterventionRequestService,
    private clientContactService: ClientContactService,
    private clientService: ClientService,
    private priorityService: PriorityService,
    private periodService: PeriodService,
    private classificationService: ClassificationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store <InterventionRequestState>,
  )
  {
    // this.secondFormGroup = this.formBuilder.group({
    //   secondCtrl: [''],
    // });
  }

  interventionRequest !: InterventionRequest;
  interventionsRequests! : InterventionRequest [];
  technician! : Technician[];
  clientContact! : ClientContact[];
  client! : Client[];
  priority! : Priority[];
  period! : Period[];
  classification! : Priority[];
  formInterventionRequest!: FormGroup;
  selectInterventionRequestIsOpen$ = this.store.pipe(select (selectInterventionRequestIsOpen));
  // private dialogRef!: MatDialogRef<boolean>;
  isOpen !: boolean;
  ngOnInit(): void {

    this.getClientContact();
    this.getPriority();
    this.getPeriod();
    this.getClient();
    this.getClassification();
    if(this.interventionRequest){
      this.formInterventionRequest = this.formBuilder.group({
        id: new FormControl(this.interventionRequest.id, Validators.required),
        customerContactId: new FormControl(this.interventionRequest.customerContactId, Validators.required),
        priorityId: new FormControl(this.interventionRequest.priorityId, Validators.required),
        interventionClassificationId: new FormControl(this.interventionRequest.interventionClassificationId, Validators.required),
        dateRequest: new FormControl(this.interventionRequest.dateRequest, Validators.required),
        expectedDateTEnd: new FormControl(this.interventionRequest.expectedDateTEnd, Validators.required),
        interventionReason: new FormArray([new FormControl(this.interventionRequest.interventionReason[5], Validators.required)]),
        periodId: new FormControl(this.interventionRequest.periodId, Validators.required),
        emailToSendReport: new FormControl(this.interventionRequest.emailToSendReport, Validators.required),

      });
    }else {
      this.formInterventionRequest = this.formBuilder.group({
        customerContactId: new FormControl(``, Validators.required),
        priorityId: new FormControl(``, Validators.required),
        interventionClassificationId: new FormControl(``, Validators.required),
        dateRequest: new FormControl(``, Validators.required),
        expectedDateTEnd: new FormControl(``, Validators.required),
        interventionReason:  new FormArray([new FormControl(``, Validators.required)]),
        periodId: new FormControl(``, Validators.required),
        emailToSendReport: new FormControl(``, Validators.required),

      });
    }


  }

  get interventionReason() {
    return this.formInterventionRequest.get('interventionReason') as FormArray
  }

  getClientContact(){
    this.clientContactService.readAll().subscribe(value => {
      if(value){
        this.clientContact=value;
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

  getClassification(){
    this.classificationService.readAll().subscribe(value => {
      if(value){
        this.classification=value;
      }
    })
  }

  getPriority(){
    this.priorityService.readAll().subscribe(value => {
      if(value){
        this.priority=value;
      }
    })
  }
  getPeriod(){
    this.periodService.readAll().subscribe(value => {
      if(value){
        this.period=value;
      }
    })
  }
  onCreate() {
    if (this.interventionRequest) {
      this.store.dispatch(editInterventionRequest({payload: this.formInterventionRequest.value}));
      this.store.dispatch(hideDialog());
      this.interventionRequestService.showMessageSuccess('Editado com Sucesso')
    } else {
      this.store.dispatch(addInterventionRequest({payload: this.formInterventionRequest.value}));
      this.interventionRequestService.showMessageSuccess('Ticket aberto  com Sucesso')
    }


  }

  get interventionReasonGroup() {
    return this.formInterventionRequest.get('interventionReason') as FormArray
  }
  cancel() {
    this.formInterventionRequest.reset();
    // this.store.dispatch(hideDialog());
  }
}
