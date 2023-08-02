import { Injectable } from '@angular/core';
import { ToDo } from '../models/todos.model';
import { LoginService } from './login.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  toDos: ToDo[] = [];

  constructor(private loginService: LoginService) {}

  verifyToDo(input: ToDo): boolean {
    if (input.title.length > 0 && input.description.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  addToDo(input: ToDo): void {
    this.toDos.push(input);
    const user: User = this.loginService.getUser();
    user.toDos.push(input);
  }

  getToDos(): ToDo[] {
    const user: User = this.loginService.getUser();
    return user.toDos;
  }

  getToDosCount(): number {
    const user: User = this.loginService.getUser();
    return user.toDos.length;
  }
}
