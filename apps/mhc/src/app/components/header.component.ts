import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
  template: `
<div class="relative isolate overflow-hidden -z-20 bg-gradient-to-tr from-[#0B1120] to-[#1F2937]">

  <!-- Noise Texture Layer -->
  <div class="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay"></div>

  <!-- Misty Blur Polygon -->
  <div aria-hidden="true" class="absolute left-1/2 top-0 -translate-x-1/2 sm:left-[calc(50%-18rem)] lg:left-12 xl:left-[calc(50%-24rem)]">
    <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80CAFF] to-[#4F46E5] opacity-20 blur-[200px] clip-path-polygon"></div>
  </div>

  <!-- Main Content -->
  <div class="relative z-10 content-container">
    <div class="content-inner">
      <h1 class="content-title">
        Hardscapes for your home. Excavation and Plowing for your business all year round.
      </h1>
      <p class="content-description">
        Whether you want to create the perfect outdoor space to entertain, or you need rugged professionals to move earth and snow for your business.
      </p>

      <div class="action-buttons">
        <p-button
          label="Get a Quote"
          [rounded]="true"
          severity="success"
          (click)="showForm()"
        ></p-button>
      </div>
    </div>

    <!-- Logo -->
    <div class="image-container">
      <div class="image-wrapper">
        <img
          alt="DJPS Logo"
          src="https://storage.googleapis.com/mhc-assets/djps/djps-v2.png"
          class="logo-image"
        />
      </div>
    </div>
  </div>

  <!-- Contact Dialog -->
  <div class="contact-dialog">
    <p-dialog header="Contact Form" [modal]="true" [(visible)]="visible" [style]="{ width: '20rem' }">
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

/* --- Content Styling --- */
.content-container {
  margin: 0 auto;
  z-index: 20;
  max-width: 80rem;
  display: flex;
  flex-direction: column-reverse;

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
  margin-top: 2.5rem;
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

  ngOnInit(): void {
    this.contactData = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      description: new FormControl(''),
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
    const payload = { ...this.contactData?.value };
    console.log('Form Payload:', payload);

    this.visible = false;
    this.clearForm();
  }
}
