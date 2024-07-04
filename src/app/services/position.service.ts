import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Technician} from "../models/technician";
import {API_URL} from "../../environments/environment";
import {Position} from "../models/position";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }



  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<Position[]>(`${API_URL}/api/Positions`, option)
  }
}
