import { Component, Inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthserviceService} from "../../services/authservice.service";
import {Router} from "@angular/router";
import {DOCUMENT, NgIf} from "@angular/common";
import {SpinnerComponent} from "../spinner/spinner.component";
import {AuthInterface} from "../../interface/auth-interface";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SpinnerComponent,
    NgIf
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });
  isLoading = false;
  errorMessage : string = ""

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password']
  }
  constructor(private fb:FormBuilder, private authService: AuthserviceService, private router:Router,@Inject(DOCUMENT) private document: Document) {
  }

  loginUser(){
    this.isLoading = true;
    this.errorMessage = ""
    const postData = {...this.loginForm.value}
    this.authService.loginCredentials(postData as AuthInterface).subscribe(
      (response) =>{
        console.log('Authentication successful', response)
        {
          setTimeout(()=>{
            this.isLoading = false
          }, 3000)
          this.document.location.href = 'https://stackoverflow.com';
        }
      },
      error => {
        setTimeout(()=>{
          this.isLoading = false
          this.errorMessage = "Oops! Login failed\n" +
            "\n" +
            "Incorrect credentials."

          console.error(this.errorMessage)
        }, 1000)
      }
    )
  }


}
