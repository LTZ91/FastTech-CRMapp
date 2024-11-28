import {Component, Input, input, OnInit} from '@angular/core';
import {InterventionRequestService} from "../../services/intervention-request.service";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import {InterventionRequestState} from "../../../store/reducers/intervention-request.reducers";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../models/user";
import {InterventionRequest} from "../../models/intervention-request";
import {selectSelectedRequest} from "../../../store/selectors/intervention-request.selectors";
import {allocateInterventionRequest} from "../../../store/actions/intervention-request.actions";

@Component({
  selector: 'app-allocate-intervention-request',
  templateUrl: './allocate-intervention-request.component.html',
  styleUrl: './allocate-intervention-request.component.scss'
})
export class AllocateInterventionRequestComponent implements OnInit{

  request!: InterventionRequest | null;
  isTicketAllocated = false;

  selectedRequest$ = this.store.pipe(select(selectSelectedRequest))


  constructor(private interventionRequestService: InterventionRequestService,
              private userService: UserService,
              private router: Router,
              public  dialog: MatDialog,
              private store: Store<InterventionRequestState>,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) {
  }

  interventionRequest !: InterventionRequest;
  technician! : IUser[];
  formInterventionRequest!: FormGroup;
  // formService!: FormGroup;
  @Input()
  user! : IUser[];

  @Input()
  requestId! : number ;

  ngOnInit(): void {



    this.selectedRequest$.subscribe(
      {next : (request) =>
          {
            if (request){
              this.requestId = request.id;
              this.request = request;
            }

        }

      }
    )

    if(this.requestId){
      this.formInterventionRequest = new FormGroup({
        id: new FormControl(this.requestId),
        technician: new FormControl(``, Validators.required),
      })
    }

    this.getUser()

    const savedState = localStorage.getItem('isTicketAllocated');
    this.isTicketAllocated = savedState === 'true';
  }

  getUser() {
    this.userService.readAll().subscribe(technicians => {
      if (technicians){
        console.log(technicians)
        this.technician = technicians;
      }

    });
  }



  cancel() {
    this.router.navigateByUrl('/intervention-request-details');
  }

  protected readonly onsubmit = onsubmit;

  onSubmit() {
    const { id, userId } = this.formInterventionRequest.value;
    console.log(this.formInterventionRequest.value);
    this.store.dispatch(allocateInterventionRequest({ id, userId : this.formInterventionRequest.value}));
    this.interventionRequestService.showMessageSuccess('Ticket alocado com Sucesso');

    // this.isTicketAllocated = true;
    // localStorage.setItem('isTicketAllocated', 'true');
  }
}
