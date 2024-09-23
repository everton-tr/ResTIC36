import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    if (this.email && this.password) {
      alert('Login realizado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  }
}