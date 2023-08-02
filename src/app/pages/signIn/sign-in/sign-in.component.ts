import { Component } from '@angular/core';
import { User } from '../../../models/user.model';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  loginFail: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  submit() {
    const user: User = {
      userName: this.username,
      password: this.password,
      verifyPassword: this.password,
      userExists: true,
    };
    if (this.loginService.verifyUser(user)) {
      this.loginService.setIsUserLoggedIn(true);
      this.router.navigate(['/home'], { skipLocationChange: true });
    } else {
      this.loginFail = true;
      this.loginService.setIsUserLoggedIn(false);
    }
    this.clear();
  }

  clear() {
    this.username = '';
    this.password = '';
  }

  signUp() {
    this.router.navigate(['/signup'], { skipLocationChange: true });
  }
}
