import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Package } from '../interfaces/package.model';
import { Plan } from '../interfaces/plan.model';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'mhc-plans',
  imports: [CommonModule, CardModule],
  template: `
     @if(plans.length > 0){
        <div class="mb-4 p-8 flex items-center justify-center">
          @for(plan of plans; track plan.title; let i = $index, numplans = $count){
          <p-card [style]="{ width: '25rem', overflow: 'hidden' }">
            <ng-template #header>

            </ng-template>
            <ng-template #title> {{plan.title}} </ng-template>

              <p>
                {{plan.desc}}
              </p>
            <ng-template #footer>
                <div class="flex gap-4 mt-1">
                    <p>{{plan.cost}}</p>
                </div>
              </ng-template>
          </p-card>
          }@empty {<p>Loading plans</p>}
        </div>
    }
  `,
  styles: ``,
})
export class PlansComponent {
  packages: Package[] = [];
  plans: Plan[] = [];

  constructor() {

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
