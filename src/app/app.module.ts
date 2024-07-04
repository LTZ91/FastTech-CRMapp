import {isDevMode, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./pages/login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './pages/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SideBarComponent } from './tamplate/side-bar/side-bar.component';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import {CreateUserComponent} from "./pages/user/create-user/create-user.component";
import { ListUserComponent } from './pages/user/list-user/list-user.component';
import {reducers} from "../store/reducers";
import {MatButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import { DeleteUserComponent } from './pages/user/delete-user/delete-user.component';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgbHighlight, NgbPagination, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import {ChangePasswordComponent} from "./pages/change-password/change-password.component";
import { CreateClientComponent } from './pages/clients/create-client/create-client.component';
import { ListClientComponent } from './pages/clients/list-client/list-client.component';
import { DeleteClientComponent } from './pages/clients/delete-client/delete-client.component';
import { CreateHourComponent } from './pages/hour/create-hour/create-hour.component';
import { ListHourComponent } from './pages/hour/list-hour/list-hour.component';
import { DeleteHourComponent } from './pages/hour/delete-hour/delete-hour.component';
import { CreatePriceComponent } from './pages/prices/create-price/create-price.component';
import { ListPriceComponent } from './pages/prices/list-price/list-price.component';
import { DeletePriceComponent } from './pages/prices/delete-price/delete-price.component';
import { CreateServicesComponent } from './pages/services-provided/create-services/create-services.component';
import { ListServicesComponent } from './pages/services-provided/list-services/list-services.component';
import { DeleteServicesComponent } from './pages/services-provided/delete-services/delete-services.component';
import { CreateContractComponent } from './pages/contract/create-contract/create-contract.component';
import { ListContractsComponent } from './pages/contract/list-contracts/list-contracts.component';
import { DeleteContractComponent } from './pages/contract/delete-contract/delete-contract.component';
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatRow,
  MatTable
} from "@angular/material/table";
import { CreateTechnicianComponent } from './pages/technician/create-technician/create-technician.component';
import { ListTechnicianComponent } from './pages/technician/list-technician/list-technician.component';
import { DeleteTechnicianComponent } from './pages/technician/delete-technician/delete-technician.component';
import { CreateUserTechnicianComponent } from './pages/technician/create-user-technician/create-user-technician.component';
import { CreateInterventionReportComponent } from './pages/intervention-report/create-intervention-report/create-intervention-report.component';
import { DeleteInterventionReportComponent } from './pages/intervention-report/delete-intervention-report/delete-intervention-report.component';
import { ListInterventionReportComponent } from './pages/intervention-report/list-intervention-report/list-intervention-report.component';
import { CreateClientContactComponent } from './pages/client-contact/create-client-contact/create-client-contact.component';
import { ListClientContactComponent } from './pages/client-contact/list-client-contact/list-client-contact.component';
import { DeleteClientContactComponent } from './pages/client-contact/delete-client-contact/delete-client-contact.component';
import { CreateInterventionRequestComponent } from './pages/intervention-request/create-intervention-request/create-intervention-request.component';
import { DeleteInterventionRequestComponent } from './pages/intervention-request/delete-intervention-request/delete-intervention-request.component';
import { ListInterventionRequestComponent } from './pages/intervention-request/list-intervention-request/list-intervention-request.component';
import { RolePermissionListComponent } from './pages/admin/role-permission/component/role-permission-list/role-permission-list.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {effects} from "../store/effects";
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {MatOption, MatSelect} from "@angular/material/select";
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import { SendInterventionReportComponent } from './pages/intervention-report/send-intervention-report/send-intervention-report.component';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {NgScrollbarModule} from "ngx-scrollbar";
import {NgxPermissionsModule} from "ngx-permissions";
import { NavBarComponent } from './tamplate/nav-bar/nav-bar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ClientDetailsComponent } from './pages/clients/client-details/client-details.component';
import { RequestDetailsComponent } from './pages/intervention-request/request-details/request-details.component';


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
    SendInterventionReportComponent,
    NavBarComponent,
    ProfileComponent,
    ClientDetailsComponent,
    RequestDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
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
    MatStep,
    MatStepper,
    MatStepLabel,
    MatStepperNext,
    MatStepperPrevious,
    MatSelect,
    MatOption,
    MatLabel,
    MatCard,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardActions,
    MatSidenav,
    MatToolbar,
    MatSidenavContainer,
    MatIcon,
    MatNavList,
    MatListItem,
    NgbHighlight,
    NgbPagination,
    NgScrollbarModule,
    FormsModule,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    CollapseModule,
    NgxPermissionsModule,


  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
