import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent implements OnInit{

  constructor(private userService: UserService,

  ) {
  }
  forgetPasswordForm!: FormGroup;

  ngOnInit(): void {

    this.forgetPasswordForm = new FormGroup({
      email: new FormControl(``, Validators.required),
    });
  }


  onSend() {
    console.log(this.forgetPasswordForm.value)
    this.userService.forgetPassword(this.forgetPasswordForm.value).subscribe({
      next: data => {
        if (data) {
          this.userService.showMessageSuccess(`Password recovery Successfully`);
        }
      },
      error: err=>{
        this.userService.showMessageFail(`Invalid`)
      }
    })
  }

  cancel() {
    this.forgetPasswordForm.reset()

  }
}
