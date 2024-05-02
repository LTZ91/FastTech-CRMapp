import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {hideDialog} from "../../../../store/actions/client-contact.actions";
import {ClientContactService} from "../../../services/client-contact.service";
import {ClientService} from "../../../services/client.service";
import {ClientContactState} from "../../../../store/reducers/client-contact.reducers";
import {ClientContact} from "../../../models/client-contact";
import {Client} from "../../../models/client";
import {selectClientContactIsOpen} from "../../../../store/selectors/client-contact.selectors";
import {addClientContact, editClientContact} from "../../../../store/actions/client-contact.actions";

@Component({
  selector: 'app-create-client-contact',
  templateUrl: './create-client-contact.component.html',
  styleUrl: './create-client-contact.component.scss'
})
export class CreateClientContactComponent implements OnInit{
  constructor(
    private clientContactService: ClientContactService,
    private clientService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store <ClientContactState>,
  ) {}

  clientContact !: ClientContact;
  clientContacts! : ClientContact [];
  client! : Client[];
  formClientContact!: FormGroup;
  selectClientContactIsOpen$ = this.store.pipe(select (selectClientContactIsOpen));
  // private dialogRef!: MatDialogRef<boolean>;
  isOpen !: boolean;
  ngOnInit(): void {

    this.getClient();
    if(this.clientContact){
      this.formClientContact = this.formBuilder.group({
        id: new FormControl(this.clientContact.id, Validators.required),
        fullName: new FormControl(this.clientContact.fullName, Validators.required),
        position: new FormControl(this.clientContact.position, Validators.required),
        email: new FormControl(this.clientContact.email, Validators.required),
        customerId: new FormControl(this.clientContact.customerId, Validators.required),
        phoneNumber: new FormControl(this.clientContact.phoneNumber, Validators.required),
      });
    }else {
      this.formClientContact = this.formBuilder.group({
        fullName: new FormControl(``, Validators.required),
        position: new FormControl(``, Validators.required),
        email: new FormControl(``, Validators.required),
        customerId: new FormControl(``, Validators.required),
        phoneNumber: new FormControl(``, Validators.required),
      });
    }


  }




  getClient(){
    this.clientService.readAll().subscribe(value => {
      if(value){
        this.client=value;
      }
    })
  }

  onCreate() {
    if (this.clientContact) {
      this.store.dispatch(editClientContact({payload: this.formClientContact.value}));
      this.store.dispatch(hideDialog());
      this.clientContactService.showMessageSuccess('Editado com Sucesso')
    } else {
      this.store.dispatch(addClientContact({payload: this.formClientContact.value}));
      this.clientContactService.showMessageSuccess('Técnico Criado com Sucesso')
    }
    // this.modalRef.close("true")

  }

  cancel() {
    this.formClientContact.reset();
  }
}
