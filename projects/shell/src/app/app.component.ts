import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";
import { AngularLogoComponent } from './core/angular-logo/angular-logo.component';

@Component({
  selector: 'app-shell-root',
  imports: [RouterOutlet, HeaderComponent, AngularLogoComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shell';
}
