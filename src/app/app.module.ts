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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
    MatButton,
    MatMiniFabButton,
    MatFormField,
    MatInput,
    NgbTooltip,
    MatIconButton,


  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
