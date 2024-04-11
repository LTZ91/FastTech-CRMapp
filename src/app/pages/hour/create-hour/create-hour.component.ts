import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {Client} from "../../../models/client";
import {Country} from "../../../models/country";
import {Language} from "../../../models/language";
import {Person} from "../../../models/person";
import {hideDialog} from "../../../../store/actions/hour.actions";
import {HourService} from "../../../services/hour.service";
import {HourState} from "../../../../store/reducers/hour.reducers";
import {selectHourIsOpen} from "../../../../store/selectors/hour.selectors";
import {Hour} from "../../../models/hour";
import {addHour, editHour} from "../../../../store/actions/hour.actions";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-hour',
  templateUrl: './create-hour.component.html',
  styleUrl: './create-hour.component.scss'
})
export class CreateHourComponent implements OnInit{
  constructor(
    private hourService: HourService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store <HourState>,
    private modalRef: MatDialogRef<any>
  ) {}

  hour !: Hour;
  clients! : Client [];
  country! : Country [];
  language! : Language [];
  person! : Person [];
  formHour!: FormGroup;
  selectClientIsOpen$ = this.store.pipe(select (selectHourIsOpen));
  // private dialogRef!: MatDialogRef<boolean>;
  isOpen !: boolean;
  ngOnInit(): void {

    if(this.hour){
      this.formHour = this.formBuilder.group({
        id: new FormControl(this.hour.id, Validators.required),
        hours: new FormControl(this.hour.hours, Validators.required),
      });
    }else {
      this.formHour = this.formBuilder.group({
        hours: new FormControl(``, Validators.required),
      });
    }


  }
  onCreate() {
    if (this.hour) {
      this.store.dispatch(editHour({payload: this.formHour.value}));
      this.store.dispatch(hideDialog());
      this.hourService.showMessageSuccess('Editado com Sucesso')
    } else {
      this.store.dispatch(addHour({payload: this.formHour.value}));
      this.hourService.showMessageSuccess('Horário Adicionado com Sucesso')
    }
    this.modalRef.close("true")

  }
  cancel() {
    this.store.dispatch(hideDialog());
  }
}
