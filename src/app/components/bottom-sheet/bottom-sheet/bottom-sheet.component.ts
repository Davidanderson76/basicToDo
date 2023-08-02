import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ToDo } from '../../../models/todos.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css'],
})
export class BottomSheetComponent implements OnInit {
  recentToDos: ToDo[] = [];

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    private _snackBar: MatSnackBar,
    private todoService: TodoService
  ) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  openLink(event: MouseEvent, toDo: ToDo): void {
    event.preventDefault();
    if (!toDo.isComplete) {
      this.openSnackBar('Todo is not Complete...', '🙁');
      // this._bottomSheetRef.dismiss();
    } else {
      this.openSnackBar('Todo is Complete!', '😀');
      // this._bottomSheetRef.dismiss();
    }
  }

  ngOnInit(): void {
    this.recentToDos = this.todoService.getToDos();
  }
}
