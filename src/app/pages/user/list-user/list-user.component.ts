import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
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
import {DeleteUserComponent} from "../delete-user/delete-user.component";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent implements OnInit, OnChanges{

  constructor( private userService: UserService, private router: Router,
               public dialog: MatDialog,
               private store: Store<IUserState>) { }

  @Input()
  userList!: IUser[];
  user!: IUser[] | null;

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
    this.selectAllUsers$.subscribe(data =>{
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

  getAll(){
    this.userService.readAll().subscribe(value => {
      if (value){
        this.userList= value;
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
  search(args: any) {
    const text = this.filterText.trim()
    if (text === '') {
      this.dataFilter = this.user
    }else{
      this.dataFilter= this.user!.filter(user =>
        user.userName.toLowerCase().includes(text.toLowerCase())
      );
    }
    return this.dataFilter;
  }

  get filterText(){
    return this.filter.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.user){
      this.dataFilter = this.user
      this.user$ = this.filter.valueChanges.pipe(
        startWith(''),
        map((text) => this.search(text)),
      );
    }
  }
  onSubmit() {
    this.dialogRef = this.dialog.open(CreateUserComponent);
    this.store.dispatch(showDialog())
  }
}
