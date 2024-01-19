import { Injectable } from '@angular/core';
export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}
export enum UserRole {
  STUDENT = 'Student',
  INSTRUCTOR = 'Instructor',
}
export interface User {
  // TODO id should be uuid.
  id?: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  // TODO check correct date type.
  birthday: string;
  gender: Gender;
  role?: UserRole;
}
export interface UserLogin {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private Users: User[] = [
    {
      firstname: 'Hedi',
      lastname: 'khemiri',
      username: 'HediKH',
      password: 'something',
      birthday: '30/01/2001',
      gender: Gender.MALE,
      role: UserRole.STUDENT,
      id: 'uuid',
    },
    {
      firstname: 'Hedi Instructor',
      lastname: 'khemiri',
      username: 'HediKHInst',
      password: 'something',
      birthday: '30/01/2001',
      gender: Gender.MALE,
      role: UserRole.INSTRUCTOR,
      id: 'uuid',
    },
  ];
  public login(body: UserLogin): boolean {
    const fetchedUser = this.Users.find(
      (value) => value.username === body.username
    );

    if (fetchedUser?.password === body.password) {
      localStorage.setItem('user', JSON.stringify(fetchedUser));
      return true;
    }
    return false;
  }
  public register(body: User): boolean {
    this.Users = this.Users.concat([body]);
    return true;
  }
  public logout(): boolean {
    localStorage.removeItem('user');
    return true;
  }
}
