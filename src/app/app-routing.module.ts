import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {CreateUserComponent} from "./pages/user/create-user/create-user.component";
import {ListUserComponent} from "./pages/user/list-user/list-user.component";
import {DeleteUserComponent} from "./pages/user/delete-user/delete-user.component";
import {ForgetPasswordComponent} from "./pages/forget-password/forget-password.component";
import {ChangePasswordComponent} from "./pages/change-password/change-password.component";

export const routes: Routes = [
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
  {
    path:'delete-user', component:
    DeleteUserComponent
  },
  {
    path:'change-password', component:
    ChangePasswordComponent
  },
  {
    path:'forget-password', component:
    ForgetPasswordComponent
  },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
