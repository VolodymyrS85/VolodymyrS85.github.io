import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public formError: string = '';
  submitted = false;

  credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  public onLoginSubmit(): void {
    this.formError = '';
    
    // Check the actual credentials needed for logging in
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'Email and Password fields are required, please try again';
      this.router.navigateByUrl('#'); 
      return;
    }

    // Fix the name logic: If they left it blank, fill it with a placeholder
    if (!this.credentials.name || this.credentials.name.trim() === '') {
      this.credentials.name = 'User';
    }

    // Execute the login
    this.doLogin();
  }

  private doLogin(): void {
    let newUser = {
      name: this.credentials.name,
      email: this.credentials.email
    } as User;

    // console.log('LoginComponent::doLogin');
    // console.log(this.credentials);
    this.authenticationService.login(newUser, this.credentials.password);

    if (this.authenticationService.isLoggedIn()) {
      // console.log('Router::Direct');
      this.router.navigate(['']);
    } else {
      var timer = setTimeout(() => {
        if (this.authenticationService.isLoggedIn()) {
          // console.log('Router::Pause');
          this.router.navigate(['']);
        }
      }, 3000);
    }
  }
}
