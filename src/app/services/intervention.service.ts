import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {InterventionMode} from "../models/intervention-mode";
import {API_URL} from "../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";
import {InterventionStatus} from "../models/intervention-status";

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }

  readAllInterventionMode(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<InterventionMode[]>(`${API_URL}/InterventionModes`, option)
  }

  readAllInterventionStatus(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<InterventionStatus[]>(`${API_URL}/InterventionStatus`, option)
  }
}
