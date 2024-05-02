import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {showDialog} from "../../../../store/actions/client-contact.actions";
import {ClientContactService} from "../../../services/client-contact.service";
import {ClientContactState} from "../../../../store/reducers/client-contact.reducers";
import {ClientContact} from "../../../models/client-contact";
import {
  selectAllClientContactDelete,
  selectAllClientsContacts, selectClientContactIsOpen, selectClientContactIsSaved,
  selectClientContactUpdate
} from "../../../../store/selectors/client-contact.selectors";
import {getAllClientsContacts} from "../../../../store/actions/client-contact.actions";
import {CreateClientContactComponent} from "../create-client-contact/create-client-contact.component";
import {DeleteClientContactComponent} from "../delete-client-contact/delete-client-contact.component";

@Component({
  selector: 'app-list-client-contact',
  templateUrl: './list-client-contact.component.html',
  styleUrl: './list-client-contact.component.scss'
})
export class ListClientContactComponent  implements OnInit{
  constructor( private clientContactService: ClientContactService, private router: Router,
               public dialog: MatDialog,
               private store: Store<ClientContactState>) { }

  @Input()
  clientContactList!: ClientContact[];
  clientContact!: ClientContact[] | null;

  @Output() onSelectedClientContact = new EventEmitter<ClientContact>();
  selectAllClientContacts$ = this.store.pipe(select (selectAllClientsContacts));
  // selectClientContactUpdate$ = this.store.pipe(select(selectClientContactUpdate));
  // selectClientContactDelete$ = this.store.pipe(select (selectAllClientContactDelete));
  // selectClientContactIsOpen$ = this.store.pipe(select (selectClientContactIsOpen));
  // selectClientContactIsSaved$ = this.store.pipe(select (selectClientContactIsSaved));
  private dialogRef!: MatDialogRef<any>;

  filter = new FormControl('', { nonNullable: true });
  dataFilter!: ClientContact[] | null;
  clientContact$!: Observable<ClientContact[] | null>;

  ngOnInit(): void {
    this.selectAllClientContacts$.subscribe(data =>{
      if(data){
        this.clientContact = data;
      }
    })
    this.store.dispatch(getAllClientsContacts());

    // this.selectClientContactUpdate$.subscribe(data =>{
    //   if(data) {
    //     this.store.dispatch(getAllClientsContacts())
    //   }
    // })
    //
    // this.selectClientContactDelete$.subscribe(data =>{
    //   if(data) {
    //     this.store.dispatch(getAllClientsContacts())
    //   }
    // })
    //
    // this.selectClientContactIsOpen$.subscribe(data =>{
    //   if(!data && this.dialogRef){
    //     this.dialogRef.close(data)
    //   }
    // })
    // this.selectClientContactIsSaved$.subscribe(data => {
    //   if(data){
    //     this.store.dispatch(getAllClientsContacts())
    //   }
    // })

  }

  getAll(){
    this.clientContactService.readAll().subscribe(value => {
      if (value){
        console.log(value);
        // this.clientContactList= value;
      }
    })
  }



  onEdit(clientContact: ClientContact){
    this.onSelectedClientContact.emit(clientContact)
    this.dialogRef = this.dialog.open(CreateClientContactComponent);
    this.dialogRef.componentInstance.clientContact = clientContact

  }
  onDelete(clientContact: ClientContact){
    this.onSelectedClientContact.emit(clientContact)
    this.dialogRef = this.dialog.open(DeleteClientContactComponent);
    this.dialogRef.componentInstance.clientContact= clientContact

    this.store.dispatch(showDialog())
  }
  search(args: any) {
    const text = this.filterText.trim()
    if (text === '') {
      this.dataFilter = this.clientContact
    }else{
      this.dataFilter= this.clientContact!.filter(clientContact =>
        clientContact.fullName.toLowerCase().includes(text.toLowerCase())
      );
    }
    return this.dataFilter;
  }

  get filterText(){
    return this.filter.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.clientContact){
      this.dataFilter = this.clientContact
      this.clientContact$ = this.filter.valueChanges.pipe(
        startWith(''),
        map((text) => this.search(text)),
      );
    }
  }
  onSubmit() {
    this.dialogRef = this.dialog.open(CreateClientContactComponent);
    this.store.dispatch(showDialog())
  }
}
