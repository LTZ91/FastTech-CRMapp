import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILoginResponse, IUser} from "../models/user";
import {API_URL} from "../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient,
              private snackBar: MatSnackBar) { }


  login(user: IUser){
    console.log(user)
    return this.httpclient.post<ILoginResponse>(`${API_URL}/Account`, user)

  }
  isAuthenticated():boolean{
    const token =localStorage.getItem('token')
    if(token){
      return true
    }
    return false
  }

  showMessageFail(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ["msg-error"]  ,
    });
  }
  showMessageSuccess(msg: string){
    this.snackBar.open(msg, "X", {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ["msg-success"] ,
    });
  }
}
