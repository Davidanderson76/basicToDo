import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userDb: User[] = [
    {
      id: 1,
      userName: 'davidanderson76',
      email: 'david.anderson1993@gmail.com',
      password: '123',
      verifyPassword: '123',
      userExists: true,
      toDos: [],
    },
    {
      id: 2,
      userName: 'gary76',
      email: 'david.anderson1993@gmail.com',
      password: '123',
      verifyPassword: '123',
      userExists: true,
      toDos: [],
    },
  ];

  loggedIn: boolean = false;
  activeUser: User = {
    userName: '',
    password: '',
    verifyPassword: '',
    userExists: false,
    toDos: [],
  };

  loggedInStatus$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor() {}

  checkId(id: number): any {
    for (const member of this.userDb) {
      if (member.id === id) {
        return true;
      } else {
        return false;
      }
    }
  }

  verifyUser(input: User): any {
    if (input.userExists && input.password === input.verifyPassword) {
      for (let member of this.userDb) {
        console.log(member);
        if (
          input.userName === member.userName &&
          input.password === member.password &&
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

  addUser(input: User): void {
    this.userDb.push(input);
  }

  isUserLoggedIn(): boolean {
    return this.loggedIn;
  }

  setIsUserLoggedIn(input: boolean): void {
    this.loggedIn = input;
    this.loggedInStatus$.next(input);
  }

  setUser(input: User): void {
    this.activeUser = input;
  }

  getUser(): User {
    return this.activeUser;
  }
}
