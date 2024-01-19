import { Component, OnInit } from '@angular/core';
import { Course, CourseService } from '../course.service';
import { CourseCardComponent } from '../coursecard/coursecard.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService, UserRole } from '../../auth/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseCardComponent, CommonModule, NavbarComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit {
  courses!: Course[];
  role!: UserRole;
  isInstructor: boolean = false;
  constructor(
    private courseService: CourseService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    this.role = this.authService.getUserRole();
    this.isInstructor = this.role === UserRole.INSTRUCTOR;
  }
  search(keyword: string) {
    if (keyword.length > 3)
      this.courses = this.courseService.searchCourse(keyword);
  }
}
