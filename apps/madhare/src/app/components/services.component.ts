import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../interfaces/service.model';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'mhc-services',
  imports: [CommonModule, CardModule, ButtonModule],
  template: `
    @if(services.length > 0){
    <div class="mb-4 p-8 flex items-center justify-center">
      @for(service of services; track service.title; let i = $index, numServices
      = $count){
      <p-card [style]="{ width: '25rem', overflow: 'hidden' }">
        <ng-template #header>
          <img [src]="service.icon" alt="service image" />
        </ng-template>
        <ng-template #title>
          {{ service.title }}
        </ng-template>
        <ng-template #subtitle>
          {{ service.subtitle }}
        </ng-template>
        <p>
          {{ service.desc }}
        </p>
        @if(service.list.length > 0){
        <ul>
          @for(item of service.list; track item; let i = $index){
          <li>{{ item }}</li>
          }@empty{
          <li>Loading list</li>
        </ul>
        } }

        <ng-template #footer>
          <div class="flex gap-4 mt-1">
            <p>{{ service.cost }}</p>
          </div>
        </ng-template>
      </p-card>
      }@empty {
      <p>Loading Services</p>
      }
    </div>
    }
  `,
  styles: ``,
})
export class ServicesComponent {
  services: Service[] = [];
  numServices = 0;

  constructor() {
    this.services = [
      {
        title: 'Cloud Hosting',
        desc: 'We are proud to host all of our services on Google Cloud.  With reliable uptime, APIs and services to scale your business, and the productivity tools to run your business, you can do a little, or a lot, with our services on the cloud',
        list: [
          'Choose a new domain to register, or transfer your existing site to our hosting platform',
          'Start with your personal email at your domain, or unlock the full suite of Google productivity tools like Gmail, Calendar, Docs, and more',
          'Integrate your business with Cloud Storage, Firestore Database, or leverage our API services to integrate with your existing software',
        ],
        logo: 'url',
        alt: 'logo',
        id: 'cloud-hosting',
        btnlink: 'url',
        btntxt: 'Learn More',
      },
    ];
  }
}
