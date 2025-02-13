import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { ThemeService } from './theme.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mad Hare Consulting, LLC';
  constructor(private themeService: ThemeService) {
    this.themeService.setTheme(this.themeService.getCurrentTheme());
  }

}