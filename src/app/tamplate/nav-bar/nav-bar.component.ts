import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{

constructor(private router: Router) {
}

  ngOnInit(): void {
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
