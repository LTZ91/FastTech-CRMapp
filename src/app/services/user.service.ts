import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {IUser} from "../models/user";
import {API_URL} from "../../environments/environment";
import {ResetPassword} from "../models/reset-password";
import {Technician} from "../models/technician";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }

  createUser(user: IUser){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.post<IUser>(`${API_URL}/api/Users`, user, option)
  }

  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<IUser[]>(`${API_URL}/api/Users`, option)
  }
  edit(user: IUser){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.put<IUser>(`${API_URL}/api/Users/${user.id}`,user, option)
  }



  getUserById(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    })}

    return this.httpClient.get<IUser>(`${API_URL}/api/User/:id`, option);
  }
  deleteUser(user: IUser){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.delete<IUser>(`${API_URL}/api/Users/${user.id}`, option)
  }

  resetPassword(reset: ResetPassword){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.put<ResetPassword>(`${API_URL}/api/Users/resetPassword`, reset, option)
  }

  forgetPassword(email: IUser){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.put<IUser>(`${API_URL}/api/Users/${email.email}/resetPassword`,email, option)
  }

  userTechnician(user: IUser){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.put<IUser>(`${API_URL}/api/Users/${user.id}/technician`,user, option)
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
