import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {showDialog} from "../../../../store/actions/contract.actions";
import {ContractService} from "../../../services/contract.service";
import {ContractState} from "../../../../store/reducers/contract.reducers";
import {Contract} from "../../../models/contract";
import {
  selectAllContractDelete,
  selectAllContracts, selectContractIsOpen, selectContractIsSaved,
  selectContractsUpdate
} from "../../../../store/selectors/contract.selectors";
import {getAllContracts} from "../../../../store/actions/contract.actions";
import {CreateContractComponent} from "../create-contract/create-contract.component";
import {DeleteContractComponent} from "../delete-contract/delete-contract.component";

@Component({
  selector: 'app-list-contracts',
  templateUrl: './list-contracts.component.html',
  styleUrl: './list-contracts.component.scss'
})
export class ListContractsComponent {
  constructor( private contractService: ContractService, private router: Router,
               public dialog: MatDialog,
               private store: Store<ContractState>) { }

  @Input()
  contractList!: Contract[];
  contract!: Contract[] | null;

  @Output() onSelectedContract = new EventEmitter<Contract>();
  selectAllContracts$ = this.store.pipe(select (selectAllContracts));
  selectContractUpdate$ = this.store.pipe(select(selectContractsUpdate));
  selectContractDelete$ = this.store.pipe(select (selectAllContractDelete));
  selectContractIsOpen$ = this.store.pipe(select (selectContractIsOpen));
  selectContractIsSaved$ = this.store.pipe(select (selectContractIsSaved));
  private dialogRef!: MatDialogRef<any>;

  filter = new FormControl('', { nonNullable: true });
  dataFilter!: Contract[] | null;
  contract$!: Observable<Contract[] | null>;

  ngOnInit(): void {
    this.selectAllContracts$.subscribe(data =>{
      if(data){
        this.contract = data;
      }
    })
    this.store.dispatch(getAllContracts());

    this.selectContractUpdate$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllContracts())
      }
    })

    this.selectContractDelete$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllContracts())
      }
    })

    this.selectContractIsOpen$.subscribe(data =>{
      if(!data && this.dialogRef){
        this.dialogRef.close(data)
      }
    })
    this.selectContractIsSaved$.subscribe(data => {
      if(data){
        this.store.dispatch(getAllContracts())
      }
    })

  }

  getAll(){
    this.contractService.readAll().subscribe(value => {
      if (value){
        this.contractList= value;
      }
    })
  }



  onEdit(contract: Contract){
    this.onSelectedContract.emit(contract)
    this.dialogRef = this.dialog.open(CreateContractComponent);
    this.dialogRef.componentInstance.contract = contract

  }
  onDelete(contract: Contract){
    this.onSelectedContract.emit(contract)
    this.dialogRef = this.dialog.open(DeleteContractComponent);
    this.dialogRef.componentInstance.contract= contract

    this.store.dispatch(showDialog())
  }
  search(args: any) {
    const text = this.filterText.trim()
    if (text === '') {
      this.dataFilter = this.contract
    }else{
      this.dataFilter= this.contract!.filter(contract =>
        contract.customer.toLowerCase().includes(text.toLowerCase())
      );
    }
    return this.dataFilter;
  }

  get filterText(){
    return this.filter.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.contract){
      this.dataFilter = this.contract
      this.contract$ = this.filter.valueChanges.pipe(
        startWith(''),
        map((text) => this.search(text)),
      );
    }
  }
  onSubmit() {
    this.dialogRef = this.dialog.open(CreateContractComponent);
    this.store.dispatch(showDialog())
  }
}
