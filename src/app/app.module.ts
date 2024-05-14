import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./pages/login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './pages/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SideBarComponent } from './tamplate/side-bar/side-bar.component';
import { StoreModule } from '@ngrx/store';
import {UserEffects} from "../store/effects/user.effects";
import {EffectsModule} from "@ngrx/effects";
import {CreateUserComponent} from "./pages/user/create-user/create-user.component";
import { ListUserComponent } from './pages/user/list-user/list-user.component';
import {reducers} from "../store/reducers";
import {MatButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import { DeleteUserComponent } from './pages/user/delete-user/delete-user.component';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import {ChangePasswordComponent} from "./pages/change-password/change-password.component";
import { CreateClientComponent } from './pages/clients/create-client/create-client.component';
import { ListClientComponent } from './pages/clients/list-client/list-client.component';
import {ClientEffects} from "../store/effects/client.effects";
import { DeleteClientComponent } from './pages/clients/delete-client/delete-client.component';
import { CreateHourComponent } from './pages/hour/create-hour/create-hour.component';
import { ListHourComponent } from './pages/hour/list-hour/list-hour.component';
import { DeleteHourComponent } from './pages/hour/delete-hour/delete-hour.component';
import {HourEffects} from "../store/effects/hour.effects";
import { CreatePriceComponent } from './pages/prices/create-price/create-price.component';
import { ListPriceComponent } from './pages/prices/list-price/list-price.component';
import { DeletePriceComponent } from './pages/prices/delete-price/delete-price.component';
import {PriceEffects} from "../store/effects/price.effects";
import { CreateServicesComponent } from './pages/services-provided/create-services/create-services.component';
import { ListServicesComponent } from './pages/services-provided/list-services/list-services.component';
import { DeleteServicesComponent } from './pages/services-provided/delete-services/delete-services.component';
import {ServicesProvidedEffects} from "../store/effects/services-provided.effects";
import { CreateContractComponent } from './pages/contract/create-contract/create-contract.component';
import { ListContractsComponent } from './pages/contract/list-contracts/list-contracts.component';
import { DeleteContractComponent } from './pages/contract/delete-contract/delete-contract.component';
import {ContractStatusEffects} from "../store/effects/contract-status.effects";
import {ContractEffects} from "../store/effects/contract.effects";
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatRow,
  MatTable
} from "@angular/material/table";
import {TechnicianEffects} from "../store/effects/technician.effects";
import { CreateTechnicianComponent } from './pages/technician/create-technician/create-technician.component';
import { ListTechnicianComponent } from './pages/technician/list-technician/list-technician.component';
import { DeleteTechnicianComponent } from './pages/technician/delete-technician/delete-technician.component';
import { CreateUserTechnicianComponent } from './pages/technician/create-user-technician/create-user-technician.component';
import {InterventionReportEffects} from "../store/effects/intervention-report.effects";
import { CreateInterventionReportComponent } from './pages/intervention-report/create-intervention-report/create-intervention-report.component';
import { DeleteInterventionReportComponent } from './pages/intervention-report/delete-intervention-report/delete-intervention-report.component';
import { ListInterventionReportComponent } from './pages/intervention-report/list-intervention-report/list-intervention-report.component';
import { CreateClientContactComponent } from './pages/client-contact/create-client-contact/create-client-contact.component';
import { ListClientContactComponent } from './pages/client-contact/list-client-contact/list-client-contact.component';
import { DeleteClientContactComponent } from './pages/client-contact/delete-client-contact/delete-client-contact.component';
import {ClientContactEffects} from "../store/effects/client-contact.effects";
import {InterventionRequestEffects} from "../store/effects/intervention-request.effects";
import { CreateInterventionRequestComponent } from './pages/intervention-request/create-intervention-request/create-intervention-request.component';
import { DeleteInterventionRequestComponent } from './pages/intervention-request/delete-intervention-request/delete-intervention-request.component';
import { ListInterventionRequestComponent } from './pages/intervention-request/list-intervention-request/list-intervention-request.component';
import { RolePermissionListComponent } from './pages/admin/role-permission/component/role-permission-list/role-permission-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideBarComponent,
    CreateUserComponent,
    ListUserComponent,
    DeleteUserComponent,
    ChangePasswordComponent,
    ForgetPasswordComponent,
    CreateClientComponent,
    ListClientComponent,
    DeleteClientComponent,
    CreateHourComponent,
    ListHourComponent,
    DeleteHourComponent,
    CreatePriceComponent,
    ListPriceComponent,
    DeletePriceComponent,
    CreateServicesComponent,
    ListServicesComponent,
    DeleteServicesComponent,
    CreateContractComponent,
    ListContractsComponent,
    DeleteContractComponent,
    CreateTechnicianComponent,
    ListTechnicianComponent,
    DeleteTechnicianComponent,
    CreateUserTechnicianComponent,
    CreateInterventionReportComponent,
    DeleteInterventionReportComponent,
    ListInterventionReportComponent,
    CreateClientContactComponent,
    ListClientContactComponent,
    DeleteClientContactComponent,
    CreateInterventionRequestComponent,
    DeleteInterventionRequestComponent,
    ListInterventionRequestComponent,
    RolePermissionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects, ClientEffects, HourEffects, PriceEffects,
      ServicesProvidedEffects, ContractStatusEffects, ContractEffects, TechnicianEffects,
       InterventionReportEffects, ClientContactEffects, InterventionRequestEffects]),
    MatButton,
    MatMiniFabButton,
    MatFormField,
    MatInput,
    NgbTooltip,
    MatIconButton,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatTable,


  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
