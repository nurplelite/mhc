import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Package } from '../interfaces/package.model';
import { Plan } from '../interfaces/plan.model';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'mhc-plans',
  imports: [CommonModule, CardModule],
  template: `
     @if(services.length > 0){
        <div class="mb-4 p-8 flex items-center justify-center">
          @for(service of services; track service.title; let i = $index, numServices = $count){
          <p-card [style]="{ width: '25rem', overflow: 'hidden' }">
            <ng-template #header>
              <img [src]="service.icon" alt="service image" />
            </ng-template>
            <ng-template #title> {{service.title}} </ng-template>
            <ng-template #subtitle>{{service.subtitle}} </ng-template>
              <p>
                {{service.desc}}
              </p>
            <ng-template #footer>
                <div class="flex gap-4 mt-1">
                    <p>{{service.cost}}</p>
                </div>
              </ng-template>
          </p-card>
          }@empty {<p>Loading Services</p>}
        </div>
    }
  `,
  styles: ``,
})
export class PlansComponent {
  packages: Package[] = [];
  plans: Plan[] = [];

  constructor() {
    this.packages = [
      {
        title: 'Essential Website Package',
        subtitle: 'Launch-ready site with essential features',
        desc: 'With out essential packagem, you can bring your content and we will incorporate that into one of our standard pre-defined templates for a single page website.  Perfect for new businesses looking to get online quickly and affordably.',
        icon: 'link',
        list: [
          'Standard single-page site with basic components for displaying your services and advertising your business',
          'Choose from several pre-defined color palettes',
          'Bring your own content with images, videos and text for your site',
        ],
        link: 'https://www.google.com',
        cost: 1000,
        id: 'essential'
      },
      {
        title: 'Professional Web Presence',
        subtitle: 'Enhanced design, database integration, and interactivity',
        desc: 'Ideal for growing businesses, this package includes custom styling, light media editing, Firestore integration, and interactive elements to elevate your digital presence.',
        icon: 'link',
        list: [
          '2 Figma consultations',
          'Custom UI components',
          'Light photo/video editing (up to 10 assets)',
          'Firestore database setup',
          'Forms and analytics',
        ],
        link: 'https://www.google.com',
        cost: 3000,
        id: 'professional'
      },
      {
        title: 'Premium Web & Media Suite',
        subtitle: 'Complete custom design and media-rich content',
        desc: '  A professionally designed single-page website including a custom header, hero section, service cards, and contact form. Perfect for new businesses looking to get online quickly and affordably.',
        icon: 'link',
        list: [
          'Up to 1  hours of design/dev consultation',
          'Fully custom design',
          'Advanced drone/photo/video editing',
          'Full Workspace integration',
          'Advanced Firestore/API support',
          'Full SEO and monitoring',
        ],
        link: 'https://www.google.com',
        cost: 5000,
        id: 'premium'
      },
      {
        title: 'Custom Design and Services',
        subtitle: 'A la carte services',
        list: [
          'New components',
          'Api Integrations',
          'Drone photo/video',
          'Photo Editing',
          'Video Editing ',
          'Forms and automations',
        ],
        desc: 'Whether you are already a customer, or just need some enhancements or services for your exisiting website, you can add services from this list.',
        icon: 'link',
        link: 'https://www.google.com',
        cost: 200,
        id: 'custom'
      },
    ];
    this.plans = [
      {
        title: 'Basic Hosting',
        desc: 'Domain, email, static hosting',
        cost: 50,
        id: 'basic'
      },
      {
        title: 'Hosting + Storage',
        desc: 'Adds file storage',
        cost: 75,
        id: 'storage'
      },
      {
        title: 'Hosting + DB',
        desc: 'Includes Firestore DB access',
        cost: 100,
        id: 'db'
      },
      {
        title: 'Hosting + Analytics',
        desc: 'Full stack with analytics and reporting',
        cost: 125,
        id: 'analytics'

      },
    ];
  }
}
