import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  goHome() {
    if (this.loginService.isUserLoggedIn()) {
      this.router.navigate(['/home'], { skipLocationChange: true });
    } else {
      this.router.navigate(['/signin'], { skipLocationChange: true });
      this.openSnackBar('Please sign in.', 'SIGN IN');
    }
  }

  goToToDo() {
    if (this.loginService.isUserLoggedIn()) {
      this.router.navigate(['/home'], { skipLocationChange: true });
    } else {
      this.router.navigate(['/signin'], { skipLocationChange: true });
      this.openSnackBar('Please sign in.', 'SIGN IN');
    }
  }

  goProfile() {
    if (this.loginService.isUserLoggedIn()) {
      this.router.navigate(['/home'], { skipLocationChange: true });
    } else {
      this.router.navigate(['/signin'], { skipLocationChange: true });
      this.openSnackBar('Please sign in.', 'SIGN IN');
    }
  }

  goMessages() {
    if (this.loginService.isUserLoggedIn()) {
      this.router.navigate(['/home'], { skipLocationChange: true });
    } else {
      this.router.navigate(['/signin'], { skipLocationChange: true });
      this.openSnackBar('Please sign in.', 'SIGN IN');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
