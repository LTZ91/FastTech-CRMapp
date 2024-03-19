import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {IUserState} from "../../../../store/reducers/user.reducers";
import {IUser} from "../../../models/user";
import {selectUserIsOpen} from "../../../../store/selectors/user.selectors";
import {MatDialogRef} from "@angular/material/dialog";
import {addUser, editUser, hideDialog} from "../../../../store/actions/user.actions";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent implements  OnInit{

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store <IUserState>) {}

  formUser!: FormGroup;
  @Input() user !: IUser;
  selectUserIsOpen$ = this.store.pipe(select (selectUserIsOpen));
  private dialogRef!: MatDialogRef<boolean>;
  isOpen !: boolean;
  ngOnInit(): void {

    // this.selectClientsIsOpen$.subscribe(data => {
    //   if(data && this.dialogRef){
    //     this.isOpen = data;
    //     this.dialogRef.close(data);
    //   }
    // });

    if(this.user){
      this.formUser = this.formBuilder.group({
        id: new FormControl(this.user.id, Validators.required),
        email: new FormControl(this.user.email, Validators.required),
        userName: new FormControl(this.user.userName, Validators.required),
        fullName: new FormControl(this.user.fullName, Validators.required),
        phoneNumber: new FormControl(this.user.phoneNumber, Validators.required)
      });
    }else {
      this.formUser = this.formBuilder.group({
        email: new FormControl(``, Validators.required),
        userName: new FormControl(``, Validators.required),
        fullName: new FormControl(``, Validators.required),
        phoneNumber: new FormControl(``, Validators.required)

      });
    }


  }






  createUser() {
    console.log(this.formUser.value)
    this.userService.createUser(this.formUser.value).subscribe(value => {
      if (value) {
        // this.router.navigate(['/users-list'])
      }
    })
  }



  editUser() {
    if (this.user) {
      this.store.dispatch(editUser({payload: this.formUser.value}));
      this.store.dispatch(hideDialog());
      this.userService.showMessageSuccess('Editado com Sucesso')
    } else {
      this.store.dispatch(addUser({payload: this.formUser.value}));
      this.userService.showMessageSuccess('Usuário Criado com Sucesso')
    }

  }
  cancel() {
    this.store.dispatch(hideDialog());
  }

}
