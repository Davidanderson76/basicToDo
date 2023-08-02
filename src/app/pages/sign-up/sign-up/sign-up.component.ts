import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { LoginService } from '../../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  verifyPassword: string = '';
  email: string = '';
  id: number = Math.floor(Math.random() * 1000000 + 1);

  loginFail: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  submit() {
    const user: User = {
      id: this.id,
      userName: this.username,
      password: this.password,
      verifyPassword: this.verifyPassword,
      email: this.email,
      userExists: true,
      toDos: [],
    };
    if (!this.loginService.verifyUser(user)) {
      this.loginService.addUser(user);
      this.loginService.setIsUserLoggedIn(true);
      this.loginService.setUser(user);
      this.router.navigate(['/home'], { skipLocationChange: true });
    } else {
      this.openSnackBar('Profile already exists', 'SIGN IN');
      this.router.navigate(['/signin'], { skipLocationChange: true });
    }
    this.clear();
  }

  clear() {
    this.username = '';
    this.password = '';
  }
}
