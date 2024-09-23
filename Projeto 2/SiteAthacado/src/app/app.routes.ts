import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import para [(ngModel)]
import { LoginComponent } from './components/login/login.component'; // O componente de login
import { Routes } from '@angular/router';


// Definição das rotas
export const routes: Routes = [
  { path: '', component: LoginComponent },  
  { path: '**', redirectTo: '' }  
];



@NgModule({
  declarations: [
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent] 
})


export class AppModule { }