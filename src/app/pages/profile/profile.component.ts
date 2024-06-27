import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import {IUserState} from "../../../store/reducers/user.reducers";
import {IUser} from "../../models/user";
import {
  selectAllUsers,
  selectAllUsersDelete,
  selectUserIsOpen, selectUserIsSaved,
  selectUsersUpdate
} from "../../../store/selectors/user.selectors";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {getAllUser, showDialog} from "../../../store/actions/user.actions";
import {CreateUserComponent} from "../user/create-user/create-user.component";
import {DeleteUserComponent} from "../user/delete-user/delete-user.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
   constructor(private userService: UserService, private router: Router,
               public dialog: MatDialog,
               private store: Store<IUserState>) { }

  @Input()
  user!: IUser;

  @Output() onSelectedUser = new EventEmitter<IUser>();
  selectAllUsers$ = this.store.pipe(select (selectAllUsers));
  selectUserUpdate$ = this.store.pipe(select(selectUsersUpdate));
  selectUserDelete$ = this.store.pipe(select (selectAllUsersDelete));
  selectUserIsOpen$ = this.store.pipe(select (selectUserIsOpen));
  selectUserIsSaved$ = this.store.pipe(select (selectUserIsSaved));
  private dialogRef!: MatDialogRef<any>;

  filter = new FormControl('', { nonNullable: true });
  dataFilter!: IUser[] | null;
  user$!: Observable<IUser[] | null>;

  ngOnInit(): void {
    this.onSelectedUser.subscribe(data =>{
      if(data){
        this.user = data;
      }
    })
    this.store.dispatch(getAllUser());

    this.selectUserUpdate$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllUser())
      }
    })

    this.selectUserDelete$.subscribe(data =>{
      if(data) {
        this.store.dispatch(getAllUser())
      }
    })

    this.selectUserIsOpen$.subscribe(data =>{
      if(!data && this.dialogRef){
        this.dialogRef.close(data)
      }
    })
    this.selectUserIsSaved$.subscribe(data => {
      if(data){
        this.store.dispatch(getAllUser())
      }
    })

  }





  onEdit(user: IUser){
    this.onSelectedUser.emit(user)
    this.dialogRef = this.dialog.open(CreateUserComponent);
    this.dialogRef.componentInstance.user = user

  }
  onDelete(user: IUser){
    this.onSelectedUser.emit(user)
    this.dialogRef = this.dialog.open(DeleteUserComponent);
    this.dialogRef.componentInstance.user= user

    this.store.dispatch(showDialog())
  }


  get filterText(){
    return this.filter.value;
  }


}
