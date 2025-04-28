import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-cards',
  imports: [CommonModule, CardModule, ButtonModule],
  template: `
<section id="services" class="px-4 py-12">
  <div class="max-w-screen-xl mx-auto grid gap-6 md:grid-cols-3">
    <!-- Card 1 -->
    <div class="flex flex-col h-full">
      <p-card [style]="{ height: '29rem', overflow: 'hidden' }">
        <ng-template pTemplate="header">
          <div class="h-48 bg-cover bg-center rounded-t-2xl" style="background-image: url('https://storage.cloud.google.com/mad-bear-cave/djps/cards/walk-way-card-2.png');"></div>
        </ng-template>
        <ng-template pTemplate="title">Hardscapes</ng-template>
        <ng-template pTemplate="subtitle">Crafted Spaces. Built to Last.</ng-template>
        <p class="text-sm flex-grow">
          From patios to walkways and retaining walls, our hardscaping delivers timeless design and enduring strength.
        </p>
        <ng-template pTemplate="footer">
          <p-button label="Learn More" styleClass="p-button-text"></p-button>
        </ng-template>
      </p-card>
    </div>

    <!-- Card 2 -->
    <div class="flex flex-col h-full">
      <p-card [style]="{ height: '29rem', overflow: 'hidden' }">
        <ng-template pTemplate="header">
          <div class="h-48 bg-cover bg-center rounded-t-2xl" style="background-image: url('https://storage.cloud.google.com/mad-bear-cave/djps/cards/soil-sun.png');"></div>
        </ng-template>
        <ng-template pTemplate="title">Excavating</ng-template>
        <ng-template pTemplate="subtitle">Precision Earthwork, On Your Schedule.</ng-template>
        <p class="text-sm flex-grow">
          Whether you need hourly excavation or a full-site prep job, you're getting more than just machinery—you're getting a skilled operator with over a decade behind the controls. 
        <ng-template pTemplate="footer">
          <p-button label="Learn More" styleClass="p-button-text"></p-button>
        </ng-template>
      </p-card>
    </div>

    <!-- Card 3 -->
    <div class="flex flex-col h-full">
    <p-card [style]="{ height: '29rem', overflow: 'hidden' }">
        <ng-template pTemplate="header">
          <div class="h-48 bg-cover bg-center rounded-t-2xl" style="background-image: url('https://storage.cloud.google.com/mad-bear-cave/djps/cards/truck%20card.png');"></div>
        </ng-template>
        <ng-template pTemplate="title">Commercial Plowing</ng-template>
        <ng-template pTemplate="subtitle">All Hours. All Snow. No Problem.</ng-template>
        <p class="text-sm flex-grow">
          Winter doesn’t wait—and neither do we.  We offer 24/7 snow removal services for commercial properties, ensuring your business stays accessible and safe.
        </p>
        <ng-template pTemplate="footer">
          <p-button label="Learn More" styleClass="p-button-text"></p-button>
        </ng-template>
      </p-card>
    </div>
  </div>
</section>
  `,
  styles: ``,
})
export class CardsComponent {}
