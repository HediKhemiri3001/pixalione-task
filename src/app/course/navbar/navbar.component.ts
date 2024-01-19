import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass',
})
export class NavbarComponent {
  searchField: string = '';
  @Output() searchEvent = new EventEmitter<string>();
  constructor(private authService: AuthService, private router: Router) {}
  search() {
    this.searchEvent.emit(this.searchField);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
