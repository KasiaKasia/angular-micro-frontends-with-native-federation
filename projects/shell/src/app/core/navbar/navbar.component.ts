import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLinkComponent } from '../../shared/components/router-link/router-link.component';
import { AngularLogoComponent } from '../../shared/components/angular-logo/angular-logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterLinkComponent, AngularLogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {}
