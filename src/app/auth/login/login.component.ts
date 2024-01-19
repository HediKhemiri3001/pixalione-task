import { Component } from '@angular/core';
import { AuthService, UserLogin } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  message: string = '';
  credentials: UserLogin = { username: '', password: '' };

  onSubmit() {
    const status: boolean = this.authService.login(this.credentials);
    status
      ? this.router.navigate(['/home'])
      : (this.message = 'Failed to login.');
  }
}
