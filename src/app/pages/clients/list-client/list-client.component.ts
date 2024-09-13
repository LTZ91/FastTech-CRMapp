import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import { showDialog} from "../../../../store/actions/client.actions";
import {ClientService} from "../../../services/client.service";
import {ClientState} from "../../../../store/reducers/client.reducers";
import {Client} from "../../../models/client";
import {
  selectAllClientDelete,
  selectAllClients, selectClientIsOpen, selectClientIsSaved,
  selectClientsUpdate
} from "../../../../store/selectors/client.selectors";
import {getAllClients} from "../../../../store/actions/client.actions";
import {CreateClientComponent} from "../create-client/create-client.component";
import {DeleteClientComponent} from "../delete-client/delete-client.component";

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.scss'
})
export class ListClientComponent implements OnInit{

  constructor( private clientService: ClientService, private router: Router,
               public dialog: MatDialog,
               private store: Store<ClientState>) { }

  @Input()
  clientList!: Client[];
  client!: Client[] | null;

  @Output() onSelectedClient = new EventEmitter<Client>();
  selectAllClients$ = this.store.pipe(select (selectAllClients));
  selectClientUpdate$ = this.store.pipe(select(selectClientsUpdate));
  selectClientDelete$ = this.store.pipe(select (selectAllClientDelete));
  selectClientIsOpen$ = this.store.pipe(select (selectClientIsOpen));
  selectClientIsSaved$ = this.store.pipe(select (selectClientIsSaved));
  private dialogRef!: MatDialogRef<any>;

  filter = new FormControl('', { nonNullable: true });
  dataFilter!: Client[] | null;
  client$!: Observable<Client[] | null>;

  ngOnInit(): void {

    this.selectAllClients$.subscribe(data =>{
      if(data){
        this.client = data;
      }
    })
    this.store.dispatch(getAllClients());

    this.selectClientUpdate$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllClients())
      }
    })

    this.selectClientDelete$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllClients())
      }
    })

    this.selectClientIsOpen$.subscribe(data =>{
      if(!data && this.dialogRef){
        this.dialogRef.close(data)
      }
    })
    this.selectClientIsSaved$.subscribe(data => {
      if(data){
        this.store.dispatch(getAllClients())
      }
    })

  }

  getAll(){
    this.clientService.readAll().subscribe(value => {
      if (value){
        this.clientList= value;
      }
    })
  }



  onEdit(client: Client){
    this.onSelectedClient.emit(client)
    this.dialogRef = this.dialog.open(CreateClientComponent);
    this.dialogRef.componentInstance.client = client

  }
  onDelete(client: Client){
    this.onSelectedClient.emit(client)
    this.dialogRef = this.dialog.open(DeleteClientComponent);
    this.dialogRef.componentInstance.client= client

    this.store.dispatch(showDialog())
  }
  search(args: any) {
    const text = this.filterText.trim()
    if (text === '') {
      this.dataFilter = this.client
    }else{
      this.dataFilter= this.client!.filter(client =>
        client.fiscalName.toLowerCase().includes(text.toLowerCase())
      );
    }
    return this.dataFilter;
  }

  get filterText(){
    return this.filter.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.client){
      this.dataFilter = this.client
      this.client$ = this.filter.valueChanges.pipe(
        startWith(''),
        map((text) => this.search(text)),
      );
    }
  }
  onSubmit() {
    this.dialogRef = this.dialog.open(CreateClientComponent);
    this.store.dispatch(showDialog())
  }


  onCreateClient() {

  }
}
