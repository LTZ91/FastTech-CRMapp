import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {API_URL} from "../../environments/environment";
import {ClassificationRequest} from "../models/classification-request";

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }

  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<ClassificationRequest[]>(`${API_URL}/api/InterventionClassification`, option)
  }

  getClassificationById(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.get<ClassificationRequest>(`${API_URL}/api/InterventionClassification/${id}`, option);
  }
}
