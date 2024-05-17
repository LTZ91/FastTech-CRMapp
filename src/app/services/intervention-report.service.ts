import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {API_URL} from "../../environments/environment";
import {InterventionReport} from "../models/intervention-report";
import {InterventionsReport} from "../models/interventions-report";

@Injectable({
  providedIn: 'root'
})
export class InterventionReportService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }

  createInterventionReport(intReport: InterventionsReport){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.post<InterventionsReport>(`${API_URL}/Interventions`, intReport, option)
  }

  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<InterventionsReport[]>(`${API_URL}/Interventions`, option)
  }
  edit(intReport: InterventionsReport){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.put<InterventionsReport>(`${API_URL}/Interventions/${intReport.id}`,intReport, option)
  }



  getInterventionReportById(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.get<InterventionsReport>(`${API_URL}/Interventions/:id`, option);
  }
  delete(intReport: InterventionsReport){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.delete<InterventionsReport>(`${API_URL}/Interventions/${intReport.id}`, option)
  }
  close(intReport: InterventionsReport){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.put<InterventionsReport>(`${API_URL}/Interventions/${intReport.id}/close`, option)
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
