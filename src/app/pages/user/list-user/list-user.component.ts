import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import {IUserState} from "../../../../store/reducers/user.reducers";
import {IUser} from "../../../models/user";
import {
  selectAllUsers,
  selectAllUsersDelete,
  selectUserIsOpen, selectUserIsSaved,
  selectUsersUpdate
} from "../../../../store/selectors/user.selectors";
import {getAllUser, showDialog} from "../../../../store/actions/user.actions";
import {CreateUserComponent} from "../create-user/create-user.component";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent implements OnInit{

  constructor( private userService: UserService, private router: Router,
               public dialog: MatDialog,
               private store: Store<IUserState>) { }

  userList!: IUser[];
  @Output() onSelectedUser = new EventEmitter<IUser>();
  user!: IUser[];
  selectAllUsers$ = this.store.pipe(select (selectAllUsers));
  selectUsersUpdate$ = this.store.pipe(select(selectUsersUpdate));
  selectUsersDelete$ = this.store.pipe(select (selectAllUsersDelete));
  // selectUsersIsOpen$ = this.store.pipe(select (selectUserIsOpen));
  // selectUserIsSaved$ = this.store.pipe(select (selectUserIsSaved));
  private dialogRef!: MatDialogRef<any>;

  ngOnInit(): void {
    //this.getAll();
    this.selectAllUsers$.subscribe(data =>{
      if(data){
        // console.log(data);
        this.user = data;
      }
    })
    this.store.dispatch(getAllUser());

    // this.selectUsersUpdate$.subscribe(data =>{
    //   if(data) {
    //     this.store.dispatch(getAllUser())
    //   }
    // })
    //
    // this.selectUsersDelete$.subscribe(data =>{
    //   if(data) {
    //     this.store.dispatch(getAllUser())
    //   }
    // })

    // this.selectUsersIsOpen$.subscribe(data =>{
    //   if(!data && this.dialogRef){
    //     this.dialogRef.close(data)
    //   }
    // })
    // this.selectUserIsSaved$.subscribe(data => {
    //   if(data){
    //     this.store.dispatch(getAllUser())
    //   }
    // })

  }

  getAll(){
    this.userService.readAll().subscribe(value => {
      if (value){
        this.userList = value;
      }
    })
  }



  onEdit(user: IUser){
    this.onSelectedUser.emit(user)
    this.dialogRef = this.dialog.open(CreateUserComponent);
    this.dialogRef.componentInstance.user = user

    this.store.dispatch(showDialog())
  }
  // onDelete(user: IUser){
  //   this.onSelectedUser.emit(user)
  //   this.dialogRef = this.dialog.open(UsersDeleteComponent);
  //   this.dialogRef.componentInstance.user= user
  //
  //   this.store.dispatch(showDialog())
  // }

  onSubmit() {
    this.dialogRef = this.dialog.open(CreateUserComponent);
    this.store.dispatch(showDialog())
  }

  // onStepper() {
  //   this.dialogRef = this.dialog.open(NewUserStepperComponent);
  // }
}
