import { CanActivateFn } from '@angular/router';
import { UserRole } from './auth.service';

export const instructorGuard: CanActivateFn = (route, state) => {
  const userString = localStorage.getItem('user');
  const user = JSON.parse(userString!);
  if (user.role !== UserRole.INSTRUCTOR) return false;
  return true;
};
