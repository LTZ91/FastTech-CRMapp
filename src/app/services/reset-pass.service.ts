import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ResetPassword} from "../models/reset-password";
import {API_URL} from "../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ResetPassService {

  constructor(private httpClient:HttpClient, private snackBar: MatSnackBar) { }

  reset(reset: ResetPassword){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.post<ResetPassword>(`${API_URL}/User/resetPassword`, reset, option)
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
