import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username!: string;
  password!: string;
  showPassword: boolean;

  constructor() {
    // this.username= '';
    // this.password= '';
    this.showPassword = false;
   }

   togglePasswordVisibility(){
    this.showPassword = !this.showPassword
   }

  login() {
    // Perform login logic here
    console.log('Logging in...');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // You can add your login functionality here, such as calling an API endpoint
  }
}

