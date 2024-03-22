import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {IUserState} from "../../../../store/reducers/user.reducers";
import {Router} from "@angular/router";
import {IUser} from "../../../models/user";
import {addUser, deleteUser, hideDialog} from "../../../../store/actions/user.actions";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.scss'
})
export class DeleteUserComponent implements OnInit{
  constructor(private userService: UserService,
              public dialog: MatDialog,
              private router: Router,
              private store: Store <IUserState>) { }

  @Input()
  user!: IUser;


  ngOnInit(): void {
    console.log(this.user, 'testando')
  }


  onDeleteUser(){

    if(this.user){
      this.store.dispatch(deleteUser({payload: this.user}))
      this.store.dispatch(hideDialog())
      this.userService.showMessageSuccess('Apagado com Sucesso')
    }
    else {
      this.store.dispatch(addUser({payload: this.user}))
      this.userService.showMessageFail('Usuário Criado com Sucesso')
    }

  }

  cancel() {
    this.store.dispatch(hideDialog())
    this.router.navigate(['/users-list']);
  }

}
