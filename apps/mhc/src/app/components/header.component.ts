import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    Dialog,
    ReactiveFormsModule,
    InputIconModule,
    IconFieldModule,
    IftaLabelModule
  ],
  providers: [MessageService],
  template: `
  <!-- Content -->
  <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse sm:flex-col lg:flex-row items-center">
    <div class="max-w-2xl text-center lg:text-left">
      <h1 class="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
        Hardscapes for your home. Excavation and Plowing for your business.
      </h1>
      <h2 class="mt-6 text-2xl leading-8 text-white">
        All. Year. Round.
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        Whether you want to create the perfect outdoor space to entertain, or you need rugged professionals to move earth and snow for your business.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
        <p-button label="Get a Quote" [rounded]="true" severity="success" (click)="showForm()"></p-button>
      </div>
    </div>

    <div class="contact-dialog">
    <p-dialog header="Contact Form" maskStyleClass="backdrop-blur-sm" [modal]="true" [(visible)]="visible" [style]="{ width: '20rem' }">
      <form *ngIf="contactData" [formGroup]="contactData" (ngSubmit)="submitForm()" class="contact-form">
        <div class="form-fields">
          <p-iftalabel>
            <p-iconfield>
              <p-inputicon class="pi pi-envelope" />
              <input pInputText id="name" type="text" formControlName="name" />
            </p-iconfield>
            <label for="name">Name</label>
          </p-iftalabel>

          <p-iftalabel>
            <p-iconfield>
              <p-inputicon class="pi pi-mobile" />
              <input pInputText id="email" type="email" formControlName="email" />
            </p-iconfield>
            <label for="email">Email</label>
          </p-iftalabel>

          <p-iftalabel>
            <p-iconfield>
              <p-inputicon class="pi pi-user" />
              <input pInputText id="phone" type="tel" formControlName="phone" />
            </p-iconfield>
            <label for="phone">Phone Number</label>
          </p-iftalabel>

          <div class="description-field">
            <label for="description">Please tell us how we can help</label>
            <textarea id="description" formControlName="description" rows="5"></textarea>
          </div>
        </div>

        <div class="form-actions">
          <p-button label="Cancel" severity="secondary" (click)="cancelForm()"></p-button>
          <p-button label="Save" type="submit"></p-button>
        </div>
      </form>
    </p-dialog>
  </div>

    <div class="image-container">
      <img src="https://storage.googleapis.com/mhc-assets/djps/djps-v2.png" alt="DJPS Logo" class="image-wrapper" />
    </div>
  </div>
  `,
  styles: `
/* --- Custom Clip Path for the Blur Polygon --- */
.clip-path-polygon {
  clip-path: polygon(
    73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%,
    75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%,
    21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%
  );
}

@keyframes mist {
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(20px) translateY(10px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

.animate-mist {
  animation: mist 30s ease-in-out infinite;
}

/* --- Content Styling --- */
.content-container {
  margin: 0 auto;
  z-index: 20;
  max-width: 80rem;
  display: flex;
  flex-direction: column-reverse;
  background: var(--surface-400);


  @media (min-width: 640px) {
    padding-bottom: 8rem;
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
  }
}
.content-inner {
  margin: 0 auto;
  max-width: 36rem;
  flex-shrink: 0;

  @media (min-width: 1024px) {
    margin-left: 0;
    padding-top: 2rem;
  }
}
.action-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
}
.content-title {
  margin-top: 2.5rem;
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 1.25;
  color: #ffffff;
  font-family: 'Peridot', sans-serif;
}
.content-description {
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: #9ca3af;
}
.image-container {
  margin: 0 auto;
  z-index: 20;
  display: flex;
  overflow: visible;
}
.image-wrapper {
  margin-top: -1rem;
  align-self: flex-end;
}
.logo-image {
  transition: all 0.5s ease-in-out;
}
`
})
export class HeaderComponent implements OnInit {
  visible = false;
  contactData: FormGroup | undefined;
  formDataSubject = new BehaviorSubject<FormGroup | undefined>(undefined);

  constructor(private apiService: ApiService, private snackBar: MessageService) {}

  ngOnInit(): void {

    this.contactData = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });


  }

  showForm() {
    this.visible = true;
  }

  cancelForm() {
    this.visible = false;
    this.clearForm();
  }

  clearForm() {
    if (this.contactData) {
      this.contactData.reset({
        name: '',
        email: '',
        phone: '',
        description: '',
      });
    }
  }

  submitForm() {
    if (this.contactData?.invalid) {
      console.log('Form is invalid:', this.contactData?.errors);
      this.message(false, 'Please fill in all required fields.');
      return;
    }

    console.log('Form Payload:', this.contactData?.value);

    this.apiService.sendContactForm(this.contactData?.value).subscribe({
      next: (response) => {
        console.log('Response from API:', response);
        this.message(true, 'Form submitted successfully!');
        this.clearForm();
        this.visible = false;
      },
      error: (error: Error) => {
        console.error('Error submitting form:', error);
        this.message(false, error.message);
      }
    });
  }

    message(success: boolean, message: string ){
      console.log('Message:', message);
      if (success) {
        this.snackBar.add({
          severity: 'success',
          summary: 'Success',
          detail: message,
          life: 3000
        });
      } else {
        this.snackBar.add({
          severity: 'error',
          summary: 'Error',
          detail: message,
          life: 3000
        });
      }

    }

  }



