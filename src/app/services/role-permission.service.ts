import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {API_URL} from "../../environments/environment";
import {Role} from "../models/role";
import {RolePermission} from "../models/role-permission";

@Injectable({
  providedIn: 'root'
})
export class RolePermissionService {

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }

  createRolePermission(rolePermission: RolePermission){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.post<RolePermission>(`${API_URL}/RolePermissions`, rolePermission, option)
  }

  readAll(){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.get<RolePermission[]>(`${API_URL}/RolePermissions`, option)
  }
  edit(rolePermission: RolePermission){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}
    return this.httpClient.put<RolePermission>(`${API_URL}/RolePermissions/${rolePermission.id}`,rolePermission, option)
  }



  getRolePermissionById(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.get<RolePermission>(`${API_URL}/RolePermissions/${id}`, option);
  }

  getRolePermissionByIdUser(id: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.get<Role>(`${API_URL}/Roles/${id}/users`, option);
  }
  delete(roleId: number){
    const option = {headers: new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })}

    return this.httpClient.delete<RolePermission>(`${API_URL}/RolePermissions/${roleId}/Roles`, option)
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
