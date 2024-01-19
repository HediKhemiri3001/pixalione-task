import { Component, OnInit } from '@angular/core';
import { Course, CourseService } from '../course.service';
import { CourseCardComponent } from '../coursecard/coursecard.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseCardComponent, CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit {
  courses!: Course[];
  constructor(private courseService: CourseService) {}
  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }
  search(keyword: string) {
    if (keyword.length > 3)
      this.courses = this.courseService.searchCourse(keyword);
  }
}
