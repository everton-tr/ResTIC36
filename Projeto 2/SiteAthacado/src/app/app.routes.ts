import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import para [(ngModel)]
import { LoginComponent } from './components/login/login.component'; // O componente de login
import { Routes } from '@angular/router';


// Definição das rotas
export const routes: Routes = [
  { path: '', component: LoginComponent },  // Rota padrão (vazia) que carrega o LoginComponent
  { path: '**', redirectTo: '' }  // Qualquer rota não reconhecida será redirecionada para a rota padrão
];



@NgModule({
  declarations: [
    LoginComponent // Remover o AppComponent e deixar apenas o LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent] // Defina o LoginComponent como o bootstrap (componente inicial)
})


export class AppModule { }