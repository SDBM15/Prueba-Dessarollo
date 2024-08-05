 import { Component } from '@angular/core';
 import { AuthService } from '../../../core/services/auth.service';



 

@Component({
  selector: 'app-resgister',
  standalone: true,
  imports: [
  ],
  templateUrl: './resgister.component.html',
  styleUrl: './resgister.component.css'
})
export  default class ResgisterComponent {
  constructor(private authService: AuthService) {}

  logut(): void {
    this.authService.logout();
    
  }

}
