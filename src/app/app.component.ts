import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { APP_TITLE } from './app.config';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = APP_TITLE;

  // constructor(private themeService: ThemeService) {
  //   this.themeService.setTheme(this.themeService.getCurrentTheme());
  // }

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}