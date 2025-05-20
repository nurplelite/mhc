import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Package } from '../interfaces/package.model';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'mhc-packages',
  imports: [CommonModule, CardModule],
  template: `
     @if(packages.length > 0){
    <div class="mb-4 p-8 flex items-center justify-center">
      @for(package of packages; track package.title; let i = $index, numpackages
      = $count){
      <p-card [style]="{ width: '25rem', overflow: 'hidden' }">
        <ng-template #header>
          <img [src]="package.icon" [alt]="package.title" class="w-full" />
        </ng-template>
        <ng-template #title>
          {{ package.title }}
        </ng-template>
          <p>
            {{ package.desc }}
          </p>
          @if(package.list.length > 0){
            <ul>
              @for(item of package.list; track item; let i = $index){
                <li>{{ item }}</li>
              }@empty{
                <li>Loading list</li>
              }
            </ul>
          }

        <ng-template #footer>
          <p>'$'{{ package.cost }}</p>
        </ng-template>
      </p-card>
      }@empty {
      <p>Loading packages</p>
      }
    </div>
    }
  `,
  styles: ``,
})
export class PackagesComponent {
  packages: Package[] = []
  numpackages = 0

  constructor() {
       this.packages = [
      {
        title: 'Essential Website Package',
        subtitle: 'Launch-ready site with essential features',
        desc: 'With out essential package, you can bring your content and we will incorporate that into one of our standard pre-defined templates for a single page website.  Perfect for new businesses looking to get online quickly and affordably.',
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
        desc: '  A professionally designed single-page website including a custom header, hero section, services showcase, and contact form. Perfect for new businesses looking to get online quickly and affordably.',
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
        subtitle: 'A la carte service',
        list: [
          'New components',
          'Api Integrations',
          'Drone photo/video',
          'Photo Editing',
          'Video Editing ',
          'Forms and automations',
        ],
        desc: 'Whether you are already a customer, or just need some enhancements to or changes for your exisiting website, you can add services from this list.',
        icon: 'link',
        link: 'https://www.google.com',
        cost: 200,
        id: 'custom'
      },
    ]
  }

}
