import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ChangePasswordComponent} from "../../pages/change-password/change-password.component";
import {Store} from "@ngrx/store";
import {IUserState} from "../../../store/reducers/user.reducers";
import {showDialog} from "../../../store/actions/user.actions";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit{

  constructor(private router: Router,
              public dialog: MatDialog,
              private store: Store<IUserState>
  ) { }
  private dialogRef!: MatDialogRef<any>;

  ngOnInit(): void {

  }
  onLogout() {
    console.log('teste')
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    localStorage.removeItem('email')
    this.router.navigate(['/login'])
  }


}
