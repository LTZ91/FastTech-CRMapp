import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Period} from "../models/period";
import {API_URL} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }


  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<Period[]>(`${API_URL}/api/Periods`, option)
  }}
