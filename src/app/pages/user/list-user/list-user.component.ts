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

  @Input() user!: IUser[] | null;
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();
  @Output() onShowForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSelectUser: EventEmitter<IUser | null> = new EventEmitter<IUser | null>();


  filter = new FormControl('', { nonNullable: true });

  page = 1;
  pageSize = 15;

  dataFilter!: IUser[] | null;
  user$!: Observable<IUser[] | null>;

  entriesChange($event: any) {
    this.pageSize = $event.target.value;
  }

  onDelete() {
    this.onRemove.emit()
  }

  onEdit(user: IUser) {
    this.onSelectUser.emit(user);
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
      this.user$= this.filter.valueChanges.pipe(
        startWith(''),
        map((text) => this.search(text)),
      );
    }
  }

  addButtonHandler() {
    this.onShowForm.emit(true)
  }

  ngOnInit(): void {
  }

}
