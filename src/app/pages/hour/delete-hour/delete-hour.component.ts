import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {addClient, deleteClient} from "../../../../store/actions/client.actions";
import {hideDialog} from "../../../../store/actions/user.actions";
import {HourService} from "../../../services/hour.service";
import {HourState} from "../../../../store/reducers/hour.reducers";
import {Hour} from "../../../models/hour";
import {deleteHour} from "../../../../store/actions/hour.actions";

@Component({
  selector: 'app-delete-hour',
  templateUrl: './delete-hour.component.html',
  styleUrl: './delete-hour.component.scss'
})
export class DeleteHourComponent implements OnInit{
  constructor(private hourService: HourService,
              public dialog: MatDialog,
              private router: Router,
              private store: Store <HourState>) { }

  @Input()
  hour!: Hour;


  ngOnInit(): void {
    console.log(this.hour, 'testando')
  }


  onDeleteHour(){

    if(this.hour){
      this.store.dispatch(deleteHour({payload: this.hour}))
      this.store.dispatch(hideDialog())
      this.hourService.showMessageSuccess('Apagado com Sucesso')
    }
    else {
      this.store.dispatch(addClient({payload: this.hour}))
      this.hourService.showMessageFail('Hora adicionada com Sucesso')
    }

  }

  cancel() {
    this.store.dispatch(hideDialog())
    this.router.navigate(['/list-client']);
  }

}
