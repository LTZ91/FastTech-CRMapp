import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {UserService} from "../../services/user.service";
import {IUserState} from "../../../store/reducers/user.reducers";
import {IUser} from "../../models/user";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{

constructor(private router: Router,
            private userService: UserService,
            private store: Store<IUserState>) {
}

  @Input()
  userList!: IUser[];
  user!: IUser[] | null;
  public name!: string | null;

  ngOnInit(): void {
    const userName =localStorage.getItem('userName')

    if (userName != ""){
      this.name = userName
      console.log(this.name,"hh")
    }
  }

  onLogout() {
    localStorage.removeItem(`token`)
    localStorage.removeItem(`userName`)
    localStorage.removeItem(`email`)
    this.router.navigate(['/login'])
  }

  onChangePass() {
    this.router.navigate(['/change-password']);
  }
}
