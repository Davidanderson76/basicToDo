import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  show: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  goHome() {
    if (this.loginService.isUserLoggedIn()) {
      this.router.navigate(['/home'], { skipLocationChange: true });
    } else {
      this.show = true;
    }
  }
}
