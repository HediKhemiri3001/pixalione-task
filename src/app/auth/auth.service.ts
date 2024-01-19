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
export interface UserUpdate {
  id: string;
  firstname: string;
  lastname: string;
  birthday: string;
  gender: Gender;
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
  public updateProfile(body: UserUpdate) {
    let index = this.Users.findIndex((element) => element.id === body.id);
    this.Users[index].firstname = body.firstname;
    this.Users[index].lastname = body.lastname;
    this.Users[index].birthday = body.birthday;
    this.Users[index].gender = body.gender;
    return true;
  }
  public getUserRole(): UserRole {
    const userString = localStorage.getItem('user');
    const user: User = JSON.parse(userString!);
    return user.role!;
  }
  public getUser(): User {
    const userString = localStorage.getItem('user');
    const user: User = JSON.parse(userString!);
    return user;
  }
}
