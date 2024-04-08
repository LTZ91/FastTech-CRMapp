import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Country} from "../models/country";
import {API_URL} from "../../environments/environment";
import {Language} from "../models/language";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }

  readAllLanguages(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<Language[]>(`${API_URL}/Languages`, option)
  }
}
