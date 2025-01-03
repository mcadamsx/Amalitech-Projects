import { Component } from '@angular/core';
import {LoginFooterComponent} from "../../components/login-footer/login-footer.component";
import {LoginFormComponent} from "../../components/login-form/login-form.component";
import {LoginHeaderComponent} from "../../components/login-header/login-header.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginFooterComponent,
    LoginFormComponent,
    LoginHeaderComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
