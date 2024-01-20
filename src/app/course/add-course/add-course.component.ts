import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { CATEGORIES, Course, CourseService } from '../course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.sass',
})
export class AddCourseComponent {
  message: string = '';
  categories: string[] = CATEGORIES;
  addCourseForm!: FormGroup;
  newCourse: Course = {
    name: '',
    description: '',
    category: '',
    subject: '',
    start_time: '',
    end_time: '',
    number_of_students: 0,
  };
  constructor(private courseService: CourseService, private router: Router) {}
  ngOnInit(): void {
    this.addCourseForm = new FormGroup({
      name: new FormControl(this.newCourse.name, [Validators.required]),
      description: new FormControl(this.newCourse.description, [
        Validators.required,
      ]),
      category: new FormControl(this.newCourse.category, [Validators.required]),
      subject: new FormControl(this.newCourse.subject, [Validators.required]),
      start_time: new FormControl(this.newCourse.start_time, [
        Validators.required,
      ]),
      end_time: new FormControl(this.newCourse.end_time, [Validators.required]),
      number_of_students: new FormControl(this.newCourse.number_of_students, [
        Validators.required,
      ]),
    });
  }
  onSubmit() {
    console.log(this.addCourseForm.value, this.addCourseForm.valid);

    if (this.addCourseForm.valid) {
      this.courseService.addCourse(this.addCourseForm.value);
      this.router.navigate(['/home']);
    } else this.message = 'The form is invalid';
  }
}
