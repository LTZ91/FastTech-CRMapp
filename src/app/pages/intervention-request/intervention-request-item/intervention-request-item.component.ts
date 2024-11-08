import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InterventionRequest} from "../../../models/intervention-request";
import {InterventionReport} from "../../../models/intervention-report";
import { FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {InterventionRequestService} from "../../../services/intervention-request.service";
import {InterventionReportService} from "../../../services/intervention-report.service";
import {InterventionModeService} from "../../../services/intervention-mode.service";
import {ActivatedRoute, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {InterventionRequestState} from "../../../../store/reducers/intervention-request.reducers";
import {UserService} from "../../../services/user.service";
import {
  selectSelectedRequest
} from "../../../../store/selectors/intervention-request.selectors";
import {IUser} from "../../../models/user";
import {ClassificationService} from "../../../services/classification.service";



@Component({
  selector: 'app-intervention-request-item',
  templateUrl: './intervention-request-item.component.html',
  styleUrl: './intervention-request-item.component.scss'
})
export class InterventionRequestItemComponent implements OnInit {
  request!: InterventionRequest;
  report!: InterventionReport;
  interventionRequest! : InterventionRequest[];
  formInterventionRequest!: FormGroup;
  requestId! : number ;
  technicians: any[] = [];  // Lista de técnicos para seleção

  constructor(private interventionRequestService: InterventionRequestService,
              private interventionReportService: InterventionReportService,
              private userService: UserService,
              private interventionModeService: InterventionModeService,
              private classificationService: ClassificationService,
              private router: Router,
              public dialog: MatDialog,
              private store: Store<InterventionRequestState>,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: [''],
    });
  }

  @Input()
  interventionReportList!: InterventionReport[];
  interventionReport!: InterventionReport[] | null;
  firstFormGroup: FormGroup;
  intervention? : InterventionRequest | null ;
  user! : IUser[];

  @Output() onSelectedInterventionRequest = new EventEmitter<InterventionReport>();
  selectInterventionRequest$ = this.store.pipe(select (selectSelectedRequest));
  private dialogRef!: MatDialogRef<any>;


  ngOnInit(): void {


    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;

    if (id !== null) {
      this.interventionRequestService.getInterventionRequestById(id).subscribe(data => {
        if (data) {
          console.log(this.selectInterventionRequest$)
          this.request = data;
          console.log(data);
        }
      })

    } else {
      console.error('ID is null');
    }


  }



  //
  // alocar() {
  //   console.log(this.formInterventionRequest.value);
  //   // this.store.dispatch(allocateInterventionRequest({payload: this.formInterventionRequest.value}));
  //   this.interventionRequestService.showMessageSuccess('Ticket alocado  com Sucesso')
  // }

}
