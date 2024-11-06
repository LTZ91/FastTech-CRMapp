import {Component, Input, input, OnInit} from '@angular/core';
import {InterventionRequestService} from "../../services/intervention-request.service";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {InterventionRequestState} from "../../../store/reducers/intervention-request.reducers";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../models/user";
import {InterventionRequest} from "../../models/intervention-request";

@Component({
  selector: 'app-allocate-intervention-request',
  templateUrl: './allocate-intervention-request.component.html',
  styleUrl: './allocate-intervention-request.component.scss'
})
export class AllocateInterventionRequestComponent implements OnInit{

  constructor(private interventionRequestService: InterventionRequestService,
              private userService: UserService,
              private router: Router,
              public dialog: MatDialog,
              private store: Store<InterventionRequestState>,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) {
  }

  interventionRequest !: InterventionRequest;
  technician! : IUser[];
  formInterventionRequest!: FormGroup;

  @Input()
  user! : IUser[];

  ngOnInit(): void {
    if(this.interventionRequest){
      this.formInterventionRequest = this.formBuilder.group({
        id: new FormControl(``, Validators.required),
        technician: new FormControl(``, Validators.required),
      })
    }

    this.getUser()

  }

  getUser() {
    this.userService.readAll().subscribe(technicians => {
      this.technician = technicians;
    });
  }

}
