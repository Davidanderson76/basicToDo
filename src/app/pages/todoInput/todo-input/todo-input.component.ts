import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { TodoService } from '../../../services/todo.service';
import { ToDo } from '../../../models/todos.model';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent implements OnInit {
  title: string = '';
  description: string = '';

  id: number = 0;

  loginFail: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.id = Math.floor(Math.random() * 1000000 + 1);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  submit() {
    const toDo: ToDo = {
      id: this.id,
      title: this.title,
      description: this.description,
      isComplete: false,
    };
    if (this.todoService.verifyToDo(toDo)) {
      this.todoService.addToDo(toDo);
      this.openSnackBar('ToDo Successfully Created!', '✅');
      this.clear();
    } else {
      this.openSnackBar('Missing Fields', '⛔');
      this.clear();
    }
  }

  clear() {
    this.title = '';
    this.description = '';
  }
}
