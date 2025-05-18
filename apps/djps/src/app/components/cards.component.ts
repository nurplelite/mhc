import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './cards.component.html'
  })

export class CardsComponent {}
