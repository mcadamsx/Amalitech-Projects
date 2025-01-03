import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {LoginHeaderComponent} from "./components/login-header/login-header.component";
import {LoginFooterComponent} from "./components/login-footer/login-footer.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {LoginComponent} from "./pages/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginHeaderComponent, LoginFooterComponent, LoginFormComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
