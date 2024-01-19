import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService, Gender, User, UserRole } from '../auth.service';
import { AuthModule } from '../auth.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, AuthModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass',
})
export class RegisterComponent implements OnInit {
  message: string = '';
  registerForm!: FormGroup;
  newUser: User = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    birthday: '',
    gender: Gender.MALE,
  };
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl(this.newUser.firstname, [Validators.required]),
      lastname: new FormControl(this.newUser.lastname, [Validators.required]),
      username: new FormControl(this.newUser.username, [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl(this.newUser.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
      birthday: new FormControl(this.newUser.birthday, [Validators.required]),
      gender: new FormControl(this.newUser.gender, [Validators.required]),
    });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value);
      this.router.navigate(['/login']);
    } else this.message = 'The form is invalid';
  }
}
