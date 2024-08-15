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
import {
  CreateUserTechnicianComponent
} from "./pages/technician/create-user-technician/create-user-technician.component";
import {
  ListInterventionReportComponent
} from "./pages/intervention-report/list-intervention-report/list-intervention-report.component";
import {
  CreateInterventionReportComponent
} from "./pages/intervention-report/create-intervention-report/create-intervention-report.component";
import {
  DeleteInterventionReportComponent
} from "./pages/intervention-report/delete-intervention-report/delete-intervention-report.component";
import {ListClientContactComponent} from "./pages/client-contact/list-client-contact/list-client-contact.component";
import {
  CreateClientContactComponent
} from "./pages/client-contact/create-client-contact/create-client-contact.component";
import {
  DeleteClientContactComponent
} from "./pages/client-contact/delete-client-contact/delete-client-contact.component";
import {
  ListInterventionRequestComponent
} from "./pages/intervention-request/list-intervention-request/list-intervention-request.component";
import {
  CreateInterventionRequestComponent
} from "./pages/intervention-request/create-intervention-request/create-intervention-request.component";
import {
  DeleteInterventionRequestComponent
} from "./pages/intervention-request/delete-intervention-request/delete-intervention-request.component";
import {
  SendInterventionReportComponent
} from "./pages/intervention-report/send-intervention-report/send-intervention-report.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {ClientDetailsComponent} from "./pages/clients/client-details/client-details.component";
import {RequestDetailsComponent} from "./pages/intervention-request/request-details/request-details.component";
import {TechnicianDetailsComponent} from "./pages/technician/technician-details/technician-details.component";
import {ContractDetailsComponent} from "./pages/contract/contract-details/contract-details.component";

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
    path:'list-contracts', component:
    ListContractsComponent
  },
  {
    path:'contract-details', component:
    ContractDetailsComponent
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
    path:'technician-details', component:
    TechnicianDetailsComponent
  },
  {
    path:'create-technician', component:
    CreateTechnicianComponent
  },
  {
    path:'delete-technician', component:
    DeleteTechnicianComponent
  },
  {
    path:'list-client-contact', component:
    ListClientContactComponent
  },
  {
    path:'create-client-contact', component:
    CreateClientContactComponent
  },
  {
    path:'delete-client-contact', component:
    DeleteClientContactComponent
  },
  {
    path:'create-user-technician', component:
    CreateUserTechnicianComponent
  },
  {
    path:'list-intervention-report', component:
    ListInterventionReportComponent
  },
  {
    path:'create-intervention-report', component:
    CreateInterventionReportComponent
  },
  {
    path:'delete-intervention-report', component:
    DeleteInterventionReportComponent
  },
  {
    path:'send-intervention-report', component:
    SendInterventionReportComponent
  },
  {
    path:'list-intervention-request', component:
    ListInterventionRequestComponent
  },
  {
    path:'create-intervention-request', component:
    CreateInterventionRequestComponent
  },
  {
    path:'delete-intervention-request', component:
    DeleteInterventionRequestComponent
  },
  {
    path:'request-details/request/:id', component:
    RequestDetailsComponent
  },
  {
    path:'profile', component:
    ProfileComponent
  },
  {
    path:'client-details', component:
    ClientDetailsComponent
  },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
