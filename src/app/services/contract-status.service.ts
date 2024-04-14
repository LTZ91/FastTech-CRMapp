import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Country} from "../models/country";
import {API_URL} from "../../environments/environment";
import {ContractStatus} from "../models/contract-status";

@Injectable({
  providedIn: 'root'
})
export class ContractStatusService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }

  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<ContractStatus[]>(`${API_URL}/ContractStatus`, option)
  }
}
