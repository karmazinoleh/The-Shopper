import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services/authentication.service';
import {AuthenticationRequest} from '../../services/models/authentication-request';
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMessage: Array<string> = [];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private tokenService: TokenService
  ) {

  }


  login() {
    this.errorMessage = [];
    this.authenticationService.authenticate({body: this.authRequest}).subscribe({
      next: (response) => {
        this.tokenService.token = response.token as string
        this.router.navigate(['shops']);
      },
      error: error => {
        console.log(error);
        if(error.error.validationErrors){
          this.errorMessage = error.error.validationErrors;
        } else {
          this.errorMessage.push(error.error.error);
        }
      }
    })
  }

  register() {
    this.router.navigate(['register'])
  }
}
