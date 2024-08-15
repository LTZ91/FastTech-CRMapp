import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {API_URL} from "../../environments/environment";
import {InterventionReport} from "../models/intervention-report";
import {InterventionReportPdf} from "../models/intervention-report-pdf";
import {InterventionRequest} from "../models/intervention-request";

@Injectable({
  providedIn: 'root'
})
export class InterventionReportService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }

  createInterventionReport(intReport: InterventionReport){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.post<InterventionReport>(`${API_URL}/api/Interventions`, intReport, option)
  }

  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<InterventionReport[]>(`${API_URL}/api/Interventions`, option)
  }
  edit(intReport: InterventionReport){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.put<InterventionReport>(`${API_URL}/api/Interventions/${intReport.id}`,intReport, option)
  }



  getInterventionReportById(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.get<InterventionReport>(`${API_URL}/api/Interventions/:id`, option);
  }

  getInterventionReportByIntRequestId(request: InterventionRequest){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.get<InterventionReport>(`${API_URL}/api/Interventions/${request.id}/request`, option);
  }
  delete(intReport: InterventionReport){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.delete<InterventionReport>(`${API_URL}/api/Interventions/${intReport.id}`, option)
  }
  close(intReport: InterventionReport){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.put<InterventionReport>(`${API_URL}/api/Interventions/${intReport.id}/close`, option)
  }
  cancel(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.put<InterventionReport>(`${API_URL}/api/Interventions/${id}/cancel`, option)
  }

  sendInterventionReport(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<InterventionReportPdf>(`${API_URL}/api/Interventions/${id}/report`, option)
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
