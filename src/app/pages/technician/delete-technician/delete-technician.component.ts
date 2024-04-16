import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {hideDialog} from "../../../../store/actions/technician.actions";
import {TechnicianService} from "../../../services/technician.service";
import {TechnicianState} from "../../../../store/reducers/technician.reducers";
import {Technician} from "../../../models/technician";
import {addTechnician, deleteTechnician} from "../../../../store/actions/technician.actions";

@Component({
  selector: 'app-delete-technician',
  templateUrl: './delete-technician.component.html',
  styleUrl: './delete-technician.component.scss'
})
export class DeleteTechnicianComponent implements OnInit{
  constructor(private technicianService: TechnicianService,
              public dialog: MatDialog,
              private router: Router,
              private store: Store <TechnicianState>) { }

  @Input()
  technician!: Technician;


  ngOnInit(): void {
    console.log(this.technician, 'testando')
  }


  onDeleteTechnician(){

    if(this.technician){
      this.store.dispatch(deleteTechnician({payload: this.technician}))
      this.store.dispatch(hideDialog())
      this.technicianService.showMessageSuccess('Apagado com Sucesso')
    }
    else {
      this.store.dispatch(addTechnician({payload: this.technician}))
      this.technicianService.showMessageFail('Técnico Criado com Sucesso')
    }

  }

  cancel() {
    this.store.dispatch(hideDialog())
    this.router.navigate(['/list-technician']);
  }
}
