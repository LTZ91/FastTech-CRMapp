import {Component, Input} from '@angular/core';
import {ClientService} from "../../../services/client.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {hideDialog} from "../../../../store/actions/contract.actions";
import {ContractService} from "../../../services/contract.service";
import {ContractState} from "../../../../store/reducers/contract.reducers";
import {Contract} from "../../../models/contract";
import {addContract, deleteContract} from "../../../../store/actions/contract.actions";

@Component({
  selector: 'app-delete-contract',
  templateUrl: './delete-contract.component.html',
  styleUrl: './delete-contract.component.scss'
})
export class DeleteContractComponent {
  constructor(private contractService: ContractService,
              public dialog: MatDialog,
              private router: Router,
              private store: Store <ContractState>) { }

  @Input()
  contract!: Contract;


  ngOnInit(): void {
    console.log(this.contract, 'testando')
  }


  onDeleteContract(){

    if(this.contract){
      this.store.dispatch(deleteContract({payload: this.contract}))
      this.store.dispatch(hideDialog())
      this.contractService.showMessageSuccess('Apagado com Sucesso')
    }
    else {
      this.store.dispatch(addContract({payload: this.contract}))
      this.contractService.showMessageFail('Contracto Criado com Sucesso')
    }

  }

  cancel() {
    this.store.dispatch(hideDialog())
    this.router.navigate(['/list-contracts']);
  }

}
