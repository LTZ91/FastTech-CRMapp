import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRolesComponent } from './component/list-roles/list-roles.component';
import { RolesComponent } from './container/roles.component';
import { AddRolesComponent } from './container/add-roles/add-roles.component';



@NgModule({
  declarations: [
    ListRolesComponent,
    RolesComponent,
    AddRolesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RolesModule { }
