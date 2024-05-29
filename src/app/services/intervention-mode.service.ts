import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {InterventionRequest} from "../models/intervention-request";
import {API_URL} from "../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";
import {InterventionMode} from "../models/intervention-mode";

@Injectable({
  providedIn: 'root'
})
export class InterventionModeService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }
  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<InterventionMode[]>(`${API_URL}/InterventionModes`, option)
  }

  getInterventionModeById(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.get<InterventionMode>(`${API_URL}/InterventionModes/${id}`, option);
  }
}
