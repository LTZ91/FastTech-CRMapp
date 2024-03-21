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
import {MatButton, MatMiniFabButton} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideBarComponent,
    CreateUserComponent,
    ListUserComponent
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


  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
