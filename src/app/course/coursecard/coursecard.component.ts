import { Component, Input } from '@angular/core';
import { Course } from '../course.service';

@Component({
  selector: 'app-coursecard',
  standalone: true,
  imports: [],
  templateUrl: './coursecard.component.html',
  styleUrl: './coursecard.component.sass',
})
export class CourseCardComponent {
  @Input() course!: Course;
}
