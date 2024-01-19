import { Injectable } from '@angular/core';

export const CATEGORIES = ['Tech', 'Marketing'];

export interface Course {
  name: string;
  description: string;
  category: string;
  subject: string;
  start_time: string;
  end_time: string;
  number_of_students: number;
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = [
    {
      name: 'test',
      description: 'test',
      category: 'test',
      subject: 'test',
      start_time: '12:00',
      end_time: '12:00',
      number_of_students: 100,
    },
    {
      name: 'test1',
      description: 'test1',
      category: 'test1',
      subject: 'test1',
      start_time: '12:00',
      end_time: '12:00',
      number_of_students: 100,
    },
  ];
  constructor() {}

  getCourses() {
    // TODO implement pagination.
    return this.courses;
  }
  addCourse(body: Course) {
    this.courses = this.courses.concat([body]);
    return true;
  }
  searchCourse(keyword: string) {
    if (keyword === '') return this.courses;
    const regExp = new RegExp(`/*.${keyword}.*`);
    return this.courses.filter(
      (element) =>
        element.name.match(regExp) ||
        element.start_time.match(regExp) ||
        element.end_time.match(regExp)
    );
  }
}
