import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarWcagComponent } from './core/navbar-wcag/navbar-wcag.component';
import { NavbarComponent } from "./core/navbar/navbar.component";

@Component({
  selector: 'app-shell-root',
  imports: [RouterOutlet,   FooterComponent, NavbarWcagComponent, NavbarComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
