import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';
import { NavbarComponent } from './navbar/navbar.component';
import{HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
