import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeViewComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multiservicios_albert';
}
