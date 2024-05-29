import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {IUserState} from "../../../store/reducers/user.reducers";
import {MatSidenav} from "@angular/material/sidenav";

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit{

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  showSubSubMenu2: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  public focus: any;

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








  onChangePassword() {

  }
}
