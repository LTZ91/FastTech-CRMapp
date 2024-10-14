import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {InterventionMode} from "../models/intervention-mode";
import {API_URL} from "../../environments/environment";
import {InterventionStatus} from "../models/intervention-status";
import {InterventionRequest} from "../models/intervention-request";

@Injectable({
  providedIn: 'root'
})
export class InterventionStatusService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }


  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<InterventionStatus[]>(`${API_URL}/api/InterventionStatus`, option)
  }

  getInterventionStatusById(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.get<InterventionStatus>(`${API_URL}/api/InterventionStatus/${id}`, option);
  }
  countAllInterventionClosed(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<InterventionStatus[]>(`${API_URL}/api/Dashboard/Intervention/Closed`, option)
  }

  countAllInterventionOpen(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<InterventionStatus[]>(`${API_URL}/api/Dashboard/Intervention/Open`, option)
  }

  countAllInterventionInProgress(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<InterventionStatus[]>(`${API_URL}/api/Dashboard/Intervention/InProgress`, option)
  }

  countAllInterventionAwaiting(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<number>(`${API_URL}/api/Dashboard/Intervention/WaitingForApproval`, option)
  }

}
