import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {PropServService} from './prop-serv.service';
import {UsersService} from './Service/users.service';
import {AlertifyService} from './Service/alertify.service';
  import { from } from 'rxjs';
import { BuyPropComponent } from './buy-prop/buy-prop.component';
import { SellPropComponent } from './sell-prop/sell-prop.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyAddComponent } from './property-add/property-add.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    BuyPropComponent,
    SellPropComponent,
    PropertyDetailComponent,
    PropertyAddComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [PropServService, UsersService,AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
