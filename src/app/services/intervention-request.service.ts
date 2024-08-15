import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {API_URL} from "../../environments/environment";
import {InterventionRequest} from "../models/intervention-request";
import {catchError, EMPTY, map, Observable} from "rxjs";
import {InterventionReport} from "../models/intervention-report";

@Injectable({
  providedIn: 'root'
})
export class InterventionRequestService {

  baseUrl ="http://localhost:5053/api";


  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }

  createInterventionRequest(intRequest: InterventionRequest){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    console.log(intRequest)
    return this.httpClient.post<InterventionRequest>(`${API_URL}/api/Interventions/request`, intRequest, option)
  }

  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<InterventionRequest[]>(`${API_URL}/api/Interventions/request`, option)
  }
  edit(intRequest: InterventionRequest){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.put<InterventionRequest>(`${API_URL}/api/Interventions/request/${intRequest.id}`,intRequest, option)
  }



  getInterventionRequestById(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.get<InterventionRequest>(`${API_URL}/api/Interventions/request/${id}`, option);
  }

  getById(id: number): Observable<InterventionRequest> {
    const url = `${this.baseUrl}/${id}/request`;
    return this.httpClient.get<InterventionRequest>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessageFail("Ocorreu um erro!");
    return EMPTY;
  }

  getInterventionRequestByStatus(status: InterventionRequest){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.get<InterventionRequest>(`${API_URL}/api/Interventions/${status.status}/status`, option);
  }
  getInterventionReportByIntRequestId(request: InterventionRequest){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.get<InterventionReport>(`${API_URL}/api/Interventions/${request.id}/request`, option);
  }

  delete(intRequest: InterventionRequest){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.delete<InterventionRequest>(`${API_URL}/api/Interventions/request/${intRequest.id}`, option)
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
