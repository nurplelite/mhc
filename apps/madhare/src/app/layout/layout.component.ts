import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PrimeIcons } from 'primeng/api';


@Component({
  selector: 'app-layout',
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  title = 'Mad Hare Consulting, LLC'

}
