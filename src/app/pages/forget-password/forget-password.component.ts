import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {hideDialog} from "../../../store/actions/user.actions";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent implements OnInit{

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder,
              private router: Router,
              private modalRef: MatDialogRef<any>)
  { }
  formEmail!:FormGroup;

  ngOnInit(): void {
    this.formEmail = this.formBuilder.group({
      email: new FormControl(``,Validators.required),
    })
  }

  cancel() {
    this.modalRef.close("true")

  }

  onSubmit() {

  }
}
