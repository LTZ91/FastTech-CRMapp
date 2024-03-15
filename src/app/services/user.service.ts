import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILoginResponse, IUser} from "../models/user";
import {API_URL} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }

  isAuthenticated():boolean{
    const token =localStorage.getItem('token');
    return token ? true : false;
  }


  login(user: ILoginResponse){
    console.log(user)
    return this.httpclient.post<ILoginResponse>(`${API_URL}/Account`, user);
  }
  
}