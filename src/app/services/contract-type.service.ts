import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {API_URL} from "../../environments/environment";
import {ContractType} from "../models/contract-type";

@Injectable({
  providedIn: 'root'
})
export class ContractTypeService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }

  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<ContractType[]>(`${API_URL}/ContractTypes`, option)
  }
}
