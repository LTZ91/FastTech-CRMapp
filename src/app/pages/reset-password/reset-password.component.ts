import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {hideDialog} from "../../../store/actions/user.actions";
import {Store} from "@ngrx/store";
import {IUserState} from "../../../store/reducers/user.reducers";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit{

  constructor(private userService: UserService,
              private store: Store <IUserState>) {
  }
  changePasswordForm!: FormGroup;

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }


  onSubmit() {
    this.userService.resetPassword(this.changePasswordForm.value).subscribe({
      next: data => {
        if (data) {
          this.userService.showMessageSuccess(`Password Change Successfully`);
        }
      },
      error: err=>{
        this.userService.showMessageFail(`Invalid`)
      }
    })
  }

  cancel() {
    this.store.dispatch(hideDialog());

  }
}
