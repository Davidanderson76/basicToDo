import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../../components/bottom-sheet/bottom-sheet/bottom-sheet.component';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loggedInUser: User = {
    userName: '',
    password: '',
    verifyPassword: '',
    userExists: false,
    toDos: [],
  };
  toDoCount: number = 0;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private _bottomSheet: MatBottomSheet,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.loggedInUser = this.loginService.getUser();
    this.toDoCount = this.todoService.getToDosCount();
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  addNewTodo() {
    this.router.navigate(['/add-todo'], { skipLocationChange: true });
  }
}
