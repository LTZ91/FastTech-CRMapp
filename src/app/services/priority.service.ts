import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {API_URL} from "../../environments/environment";
import {Priority} from "../models/priority";

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }


  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<Priority[]>(`${API_URL}/api/Priorities`, option)
  }
}
