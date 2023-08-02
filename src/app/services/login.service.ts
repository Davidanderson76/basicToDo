import { Injectable } from '@angular/core';
import { User, UsersCollection } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userDb: UsersCollection = {
    users: [
      {
        id: 1,
        userName: 'davidanderson76',
        email: 'david.anderson1993@gmail.com',
        password: '123',
        verifyPassword: '123',
        userExists: true,
      },
    ],
  };

  loggedIn: boolean = false;

  loggedInStatus$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor() {}

  checkId(id: number): any {
    for (const member of this.userDb.users) {
      if (member.id === id) {
        return true;
      } else {
        return false;
      }
    }
  }

  verifyUser(input: User): any {
    if (input.userExists && input.password === input.verifyPassword) {
      for (const member of this.userDb.users) {
        if (
          input.userName === member.userName &&
          input.password === member.password &&
          input.password === input.verifyPassword &&
          input.userName.length > 0 &&
          input.password.length > 0
        ) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      throw Error('Error does not exist');
    }
  }

  addUser(input: User) {
    this.userDb.users.push(input);
  }

  isUserLoggedIn(): boolean {
    return this.loggedIn;
  }

  setIsUserLoggedIn(input: boolean) {
    this.loggedIn = input;
    this.loggedInStatus$.next(input);
  }
}
