import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-shell-home',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './shell-home.component.html',
    styleUrl: './shell-home.component.scss'
})
export class ShellHomeComponent {}
