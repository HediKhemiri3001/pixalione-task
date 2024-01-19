import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { AuthService, UserRole } from './auth.service';

@Directive({
  selector: '[isInstructor]',
  standalone: true,
})
export class RoleDirective implements OnInit {
  role!: UserRole;
  constructor(
    private authService: AuthService,
    private elem: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this.role = this.authService.getUserRole();
  }
}
