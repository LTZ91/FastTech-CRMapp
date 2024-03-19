import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {CreateUserComponent} from "./pages/user/create-user/create-user.component";
import {ListUserComponent} from "./pages/user/list-user/list-user.component";

export const routes: Routes = [
  // {
  //   path:'', component:
  //   HomeComponent
  // },
  {
    path:'home', component:
    HomeComponent
  },
  {
    path:'login', component:
    LoginComponent
  },
  {
    path:'create-user', component:
    CreateUserComponent
  },
  {
    path:'list-user', component:
    ListUserComponent
  },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
