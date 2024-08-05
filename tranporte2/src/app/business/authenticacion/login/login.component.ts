import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
      FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export  default class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.user.email, this.user.password).subscribe(
      response => {
        console.log('Inicio de sesión correcto:', response);
        // Manejo adicional después del inicio de sesión
        this.router.navigate(['/principal']);
      },
      error => {
        console.error('Inicio de sesión  fallido:', error);
        // Manejo adicional en caso de error
      }
    );
  }
}
