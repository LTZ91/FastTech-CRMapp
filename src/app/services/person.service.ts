import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Language} from "../models/language";
import {API_URL} from "../../environments/environment";
import {Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }

  readAllPersons(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<Person[]>(`${API_URL}/api/Persons`, option)
  }
}
