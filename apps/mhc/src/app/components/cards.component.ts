import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  template: `
    <section id="services" class="services-section">
      <div class="services-grid">
        <!-- Card 1 -->
        <div class="service-card">
          <p-card class="card-container">
            <ng-template pTemplate="header">
              <div class="card-header bg-hardscape"></div>
            </ng-template>
            <ng-template pTemplate="title">Hardscapes</ng-template>
            <ng-template pTemplate="subtitle">Crafted Spaces. Built to Last.</ng-template>
            <p class="card-description">
              From patios to walkways and retaining walls, our hardscaping delivers timeless design and enduring strength.
            </p>
            <ng-template pTemplate="footer">
              <p-button label="Learn More" styleClass="p-button-text"></p-button>
            </ng-template>
          </p-card>
        </div>

        <!-- Card 2 -->
        <div class="service-card">
          <p-card class="card-container">
            <ng-template pTemplate="header">
              <div class="card-header bg-excavating"></div>
            </ng-template>
            <ng-template pTemplate="title">Excavating</ng-template>
            <ng-template pTemplate="subtitle">Precision Earthwork, On Your Schedule.</ng-template>
            <p class="card-description">
              Whether you need hourly excavation or a full-site prep job, you're getting more than just machinery—you're getting a skilled operator with over a decade behind the controls.
            </p>
            <ng-template pTemplate="footer">
              <p-button label="Learn More" styleClass="p-button-text"></p-button>
            </ng-template>
          </p-card>
        </div>

        <!-- Card 3 -->
        <div class="service-card">
          <p-card class="card-container">
            <ng-template pTemplate="header">
              <div class="card-header bg-plowing"></div>
            </ng-template>
            <ng-template pTemplate="title">Commercial Plowing</ng-template>
            <ng-template pTemplate="subtitle">All Hours. All Snow. No Problem.</ng-template>
            <p class="card-description">
              Winter doesn’t wait—and neither do we. We offer 24/7 snow removal services for commercial properties, ensuring your business stays accessible and safe.
            </p>
            <ng-template pTemplate="footer">
              <p-button label="Learn More" styleClass="p-button-text"></p-button>
            </ng-template>
          </p-card>
        </div>
      </div>
    </section>
  `,
  styles: `
    .services-section {
      padding: 3rem 1rem;
    }

    .services-grid {
      max-width: 1280px;
      margin: 0 auto;
      display: grid;
      gap: 1.5rem;
    }

    @media (min-width: 768px) {
      .services-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .service-card {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .card-container {
      height: 29rem;
      overflow: hidden;
    }

    .card-header {
      height: 12rem;
      background-size: cover;
      background-position: center;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }

    .bg-hardscape {
      background-image: url('https://storage.googleapis.com/mhc-assets/djps/walk-way-card-2.png');
    }

    .bg-excavating {
      background-image: url('https://storage.googleapis.com/mhc-assets/djps/soil-sun.png');
    }

    .bg-plowing {
      background-image: url('https://storage.googleapis.com/mhc-assets/djps/truck%20card.png');
    }

    .card-description {
      font-size: 0.875rem;
      flex-grow: 1;
    }
  `
})
export class CardsComponent {}
