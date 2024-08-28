import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import { NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ForgetPasswordComponent} from "../forget-password/forget-password.component";

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private modalService: NgbModal, public dialog: MatDialog
  ){ }
  formLogin!:FormGroup;
  private dialogRef!: MatDialogRef<any>;

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: new FormControl(``,Validators.required),
      password: new FormControl(``,Validators.required)
    })
  }

  protected readonly onsubmit = onsubmit


  onSubmit() {
    console.log(this.formLogin.value)
    this.loginService.login(this.formLogin.value).subscribe(value => {
      if (value){
        localStorage.setItem('token', value.token)
        localStorage.setItem('userName', value.userName)
        localStorage.setItem('email', value.email)
        this.router.navigate(['/home'])
      }
    })
  }

  onReset() {
     this.dialog.open(ForgetPasswordComponent);
  }
}
