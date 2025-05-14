import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { NavComponent } from "../components/navigation/nav.component";
import { FooterComponent } from "../components/footer/footer.component";
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-layout',
  imports: [CommonModule, ButtonModule, CardModule, NavComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  title = 'Mad Hare Consulting, LLC'
  //header and side


}
