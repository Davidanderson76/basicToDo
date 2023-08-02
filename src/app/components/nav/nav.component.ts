import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  showSignOut: boolean = false;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginService.loggedInStatus$.subscribe((val) => {
      this.showSignOut = val;
    });
  }

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

  signOut() {
    if (this.loginService.isUserLoggedIn()) {
      this.loginService.setIsUserLoggedIn(false);
      this.router.navigate(['/signin'], { skipLocationChange: true });
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
