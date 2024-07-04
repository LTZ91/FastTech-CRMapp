import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Client} from "../models/client";
import {API_URL} from "../../environments/environment";
import {Technician} from "../models/technician";

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }

  createTechnician(technician: Technician){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.post<Technician>(`${API_URL}/api/Technicians`, technician, option)
  }

  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<Technician[]>(`${API_URL}/api/Technicians`, option)
  }
  edit(technician: Technician){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.put<Technician>(`${API_URL}/api/Technicians/${technician.id}`,technician, option)
  }



  getTechnicianById(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.get<Technician>(`${API_URL}/api/Technicians/:id`, option);
  }
  delete(technician: Technician){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.delete<Technician>(`${API_URL}/api/Technicians/${technician.id}`, option)
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
