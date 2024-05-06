import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(
        public authService: AuthenticationService,
        public router: Router
      ) {}
      ngOnInit() {
        console.log
      }

      logIn(email: any, password: any) {
        this.authService
          .SignIn(email, password)
          .then((): any => {
              this.router.navigate(['home']);
          })
          .catch((error) => {
            window.alert(error.message);
          });
      }

      logout(){
        this.authService.SignOut();
      }

}
