import { Component } from '@angular/core';
import {RegistrationRequest} from "../../services/models/registration-request";
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services/authentication.service';
import {AuthenticationRequest} from '../../services/models/authentication-request';
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  registerRequest:RegistrationRequest = {email: '', password: '', firstname: '', lastname: ''};
  errorMessage: Array<string> = [];

  register() {
    this.errorMessage = [];
    this.authenticationService.register({
      body: this.registerRequest,
    }).subscribe({next: (response) => {
      this.router.navigate(['api/v1/auth/activate-account']);
      },
      error: error => {
      this.errorMessage = error.error.validationErrors;
      }
    })

  }

  login() {
    this.router.navigate(['login']);

  }
}
