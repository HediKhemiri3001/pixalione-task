import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  AuthService,
  Gender,
  User,
  UserRole,
  UserUpdate,
} from '../auth.service';
import { AuthModule } from '../auth.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AuthModule, CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass',
})
export class ProfileComponent {
  updateForm!: FormGroup;
  user: User = this.authService.getUser();
  updateUser: UserUpdate = {
    id: this.user.id!,
    firstname: this.user.firstname,
    lastname: this.user.lastname,
    birthday: this.user.birthday,
    gender: Gender.MALE,
  };
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.updateForm = new FormGroup({
      firstname: new FormControl(this.updateUser.firstname, [
        Validators.required,
      ]),
      lastname: new FormControl(this.updateUser.lastname, [
        Validators.required,
      ]),
      birthday: new FormControl(this.updateUser.birthday, [
        Validators.required,
      ]),
      gender: new FormControl(this.updateUser.gender, [Validators.required]),
    });
  }
  onSubmit() {
    if (this.updateForm.valid) {
      this.authService.register(this.updateForm.value);
      this.router.navigate(['/login']);
    }
  }
}
