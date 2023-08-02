import { Injectable } from '@angular/core';
import { User, UsersCollection } from '../models/user.model';

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
    if (input.userExists) {
      for (const member of this.userDb.users) {
        if (
          input.userName === member.userName &&
          input.password === member.password
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
  }
}
