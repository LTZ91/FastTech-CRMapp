import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import { NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private modalService: NgbModal
){ }
  formLogin!:FormGroup;

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: new FormControl(``,Validators.required),
      password: new FormControl(``,Validators.required)
    })
  }

  protected readonly onsubmit = onsubmit

  onSubmit() {
    this.userService.login(this.formLogin.value).subscribe(value => {
      if (value){
        localStorage.setItem('token', value.token)
        localStorage.setItem('userName', value.userName)
        localStorage.setItem('email', value.email)
        this.router.navigate(['/home'])
      }
    })
  }
}

