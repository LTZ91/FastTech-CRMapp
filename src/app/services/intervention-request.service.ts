import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {API_URL} from "../../environments/environment";
import {InterventionRequest} from "../models/intervention-request";

@Injectable({
  providedIn: 'root'
})
export class InterventionRequestService {

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
    return this.httpClient.put<InterventionRequest>(`${API_URL}/api/Interventions/${intRequest.id}`,intRequest, option)
  }



  getInterventionRequestById(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.get<InterventionRequest>(`${API_URL}/api/Interventions/${id}`, option);
  }

  getInterventionRequestByStatus(status: InterventionRequest){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.get<InterventionRequest>(`${API_URL}/api/Interventions/${status.status}`, option);
  }
  delete(intRequest: InterventionRequest){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.delete<InterventionRequest>(`${API_URL}/api/Interventions/${intRequest.id}`, option)
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
