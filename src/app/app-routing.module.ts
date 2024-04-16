import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {CreateUserComponent} from "./pages/user/create-user/create-user.component";
import {ListUserComponent} from "./pages/user/list-user/list-user.component";
import {DeleteUserComponent} from "./pages/user/delete-user/delete-user.component";
import {ForgetPasswordComponent} from "./pages/forget-password/forget-password.component";
import {ChangePasswordComponent} from "./pages/change-password/change-password.component";
import {CreateClientComponent} from "./pages/clients/create-client/create-client.component";
import {ListClientComponent} from "./pages/clients/list-client/list-client.component";
import {DeleteClientComponent} from "./pages/clients/delete-client/delete-client.component";
import {CreateHourComponent} from "./pages/hour/create-hour/create-hour.component";
import {DeleteHourComponent} from "./pages/hour/delete-hour/delete-hour.component";
import {ListHourComponent} from "./pages/hour/list-hour/list-hour.component";
import {ListPriceComponent} from "./pages/prices/list-price/list-price.component";
import {CreatePriceComponent} from "./pages/prices/create-price/create-price.component";
import {DeletePriceComponent} from "./pages/prices/delete-price/delete-price.component";
import {CreateServicesComponent} from "./pages/services-provided/create-services/create-services.component";
import {ListServicesComponent} from "./pages/services-provided/list-services/list-services.component";
import {DeleteServicesComponent} from "./pages/services-provided/delete-services/delete-services.component";
import {CreateContractComponent} from "./pages/contract/create-contract/create-contract.component";
import {ListContractsComponent} from "./pages/contract/list-contracts/list-contracts.component";
import {DeleteContractComponent} from "./pages/contract/delete-contract/delete-contract.component";
import {ListTechnicianComponent} from "./pages/technician/list-technician/list-technician.component";
import {CreateTechnicianComponent} from "./pages/technician/create-technician/create-technician.component";
import {DeleteTechnicianComponent} from "./pages/technician/delete-technician/delete-technician.component";

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
  {
    path:'create-client', component:
    CreateClientComponent
  },
  {
    path:'delete-client', component:
    DeleteClientComponent
  },
  {
    path:'list-client', component:
    ListClientComponent
  },
  {
    path:'create-hour', component:
    CreateHourComponent
  },
  {
    path:'delete-hour', component:
    DeleteHourComponent
  },
  {
    path:'list-hour', component:
    ListHourComponent
  },
  {
    path:'list-price', component:
    ListPriceComponent
  },
  {
    path:'create-price', component:
    CreatePriceComponent
  },
  {
    path:'delete-price', component:
    DeletePriceComponent
  },
  {
    path:'create-services', component:
    CreateServicesComponent
  },
  {
    path:'list-services', component:
    ListServicesComponent
  },
  {
    path:'delete-services', component:
    DeleteServicesComponent
  },
  {
    path:'create-contract', component:
    CreateContractComponent
  },
  {
    path:'list-contract', component:
    ListContractsComponent
  },
  {
    path:'delete-contract', component:
    DeleteContractComponent
  },
  {
    path:'list-technician', component:
    ListTechnicianComponent
  },
  {
    path:'create-technician', component:
    CreateTechnicianComponent
  },
  {
    path:'delete-technician', component:
    DeleteTechnicianComponent
  },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
