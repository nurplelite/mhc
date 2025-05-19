import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'mhc-theme-showcase',
  standalone: true,
  imports: [
    FormsModule, // ✅ Required for ngModel
    ButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    CardModule,
    TableModule,
    TagModule
  ],
  template: `
    <div class="p-4 space-y-6">
      <h2 class="text-2xl font-semibold mb-4">Theme Showcase</h2>

      <p-button label="Primary Button"></p-button>
      <p-button label="Secondary" severity="secondary" class="ml-2"></p-button>
      <p-button label="Success" severity="success" class="ml-2"></p-button>
      <p-button label="Info" severity="info" class="ml-2"></p-button>
      <p-button label="Warning" severity="info" class="ml-2"></p-button>
      <p-button label="Danger" severity="danger" class="ml-2"></p-button>

      <input type="text" placeholder="Input field" class="w-full max-w-sm"/>

      <p-calendar [(ngModel)]="selectedDate" showIcon></p-calendar>

      <p-dropdown
        [options]="dropdownItems"
        [(ngModel)]="selectedItem"
        placeholder="Select a value"
        class="w-full max-w-sm"
      ></p-dropdown>

      <p-card header="PrimeNG Card" subheader="Subheader">
        <p>Here’s some content inside a themed card component with spacing and padding.</p>
        <ng-template pTemplate="footer">
          <p-button label="Accept" icon="pi pi-check"></p-button>
        </ng-template>
      </p-card>

      <p-table [value]="users" class="p-datatable-sm">
        <ng-template pTemplate="header">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-user>
          <tr>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <p-tag [value]="user.status" [severity]="getStatusColor(user.status)"></p-tag>
            </td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      background-color: var(--surface-ground);
      color: var(--text-color);
    }
  `]
})
export class ThemeShowcaseComponent {
  selectedDate: Date | null = null;
  selectedItem: string | null = null;

  dropdownItems = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' },
  ];

  users = [
    { name: 'Alice', email: 'alice@example.com', status: 'Active' },
    { name: 'Bob', email: 'bob@example.com', status: 'Pending' },
    { name: 'Charlie', email: 'charlie@example.com', status: 'Inactive' },
  ];

  getStatusColor(status: string): string {
    switch (status) {
      case 'Active': return 'success';
      case 'Pending': return 'warning';
      case 'Inactive': return 'danger';
      default: return 'info';
    }
  }
}
