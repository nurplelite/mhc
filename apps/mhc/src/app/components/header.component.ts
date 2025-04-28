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
  imports: [CommonModule, ButtonModule, InputTextModule, Dialog, ReactiveFormsModule, InputIconModule, IconFieldModule, IftaLabelModule],
  template: `
<div class="background-container">
  <!-- Background SVG and blur effect -->
  <svg aria-hidden="true" class="background-svg">
    <defs>
      <pattern
        x="50%"
        y={-1}
        id="pattern-983e3e4c"
        width={200}
        height={200}
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <svg x="50%" y={-1} class="pattern-overlay">
      <path
        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
        strokeWidth={0}
      />
    </svg>
    <rect fill="url(#pattern-983e3e4c)" width="100%" height="100%" strokeWidth={0} />
  </svg>

  <!-- Background Clip and Gradient Overlay -->
  <div aria-hidden="true" class="background-clip-container">
    <div class="background-clip"></div>
  </div>

  <!-- Image Container -->
  <div class="image-container">
    <div class="image-wrapper">
      <img
        alt="DJPS Logo"
        src="https://storage.cloud.google.com/mad-bear-cave/djps/img/logos/djps-logo-v1.png"
        class="logo-image"
      />
    </div>
  </div>

  <!-- Main Content -->
  <div class="content-container">
    <div class="content-inner">
      <h1 class="content-title">
        Hardscapes for your home. Excavation and Plowing for your business all year round.
      </h1>
      <p class="content-description">
        Whether you want to create the perfect outdoor space to entertain, or you need rugged professionals to move earth and snow for your business.
      </p>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <p-button
          label="Get a Quote"
          styleClass="p-button-outlined"
          (click)="showForm()"
        ></p-button>

        <a href="#services" class="link-button">
          Services <span aria-hidden="true">→</span>
        </a>

        <a href="#testimonials" class="link-button">
          Hear What People Are Saying <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Dialog -->
<div class="contact-dialog">
  <p-dialog header="Contact Form" [modal]="true" [(visible)]="this.visible" [style]="{ width: '20rem' }">
    <form *ngIf="contactData" class="contact-form" [formGroup]="contactData" (ngSubmit)="submitForm()">
      <div class="form-fields">
        <!-- Name -->
        <p-iftalabel>
          <p-iconfield>
            <p-inputicon class="pi pi-envelope" />
            <input pInputText id="name" type="text" class="form-input" formControlName="name">
          </p-iconfield>
          <label for="name" class="form-label">Name</label>
        </p-iftalabel>

        <!-- Email -->
        <p-iftalabel>
          <p-iconfield>
            <p-inputicon class="pi pi-mobile" />
            <input pInputText id="email" type="email" class="form-input" formControlName="email">
          </p-iconfield>
          <label for="email" class="form-label">Email</label>
        </p-iftalabel>

        <!-- Phone -->
        <p-iftalabel>
          <p-iconfield>
            <p-inputicon class="pi pi-user" />
            <input pInputText id="phone" type="phone" class="form-input" formControlName="phone">
          </p-iconfield>
          <label for="phone" class="form-label">Phone Number</label>
        </p-iftalabel>

        <!-- Description -->
        <div class="description-field">
          <label for="description" class="form-label">Please tell us how we can help</label>
          <textarea id="description" formControlName="description" rows="5" class="form-input"></textarea>
        </div>
      </div>

<<<<<<< Updated upstream
<!-- Image Container (Positioned Above Content, Overlapping) -->
<div class="mx-auto z-20 mt-16 sm:mt-10 lg:mt-0 flex max-w-2xl sm:max-w-full lg:max-w-none sm:mb-0 relative overflow-visible">
  <!-- Image -->
  <div class="absolute top-0 right-0 transform sm:w-20 sm:h-20 sm:scale-100 sm:translate-x-20 sm:translate-y-5 lg:w-auto lg:h-auto lg:scale-100 lg:translate-x-0 lg:translate-y-40">
    <img
      alt="DJPS Logo"
      src="https://storage.cloud.google.com/mad-bear-cave/djps/img/logos/djps-logo-v1.png"
      class="transition-all duration-500 ease-in-out"
    />
  </div>
</div>

<!-- Main Content -->
<div class="mx-auto z-20 max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40 sm:flex-col-reverse lg:flex-row">
  <div class="mx-auto max-w-xl sm:max-w-xl shrink-0 lg:mx-0 lg:pt-8">
    <!-- Title and Description -->
    <h1 class="mt-10 text-3xl font-semibold tracking-tight text-white sm:text-2xl font-peridot">
      Hardscapes for your home. Excavation and Plowing for your business all year round.
    </h1>
    <p class="mt-8 text-md font-medium text-gray-400 sm:text-sm">
      Whether you want to create the perfect outdoor space to entertain, or you need rugged professionals to move earth and snow for your business.
    </p>

    <!-- Buttons (Get a Quote, Services, Testimonials) -->
    <div class="mt-10 flex items-center gap-x-6">
      <!-- Get a Quote Button -->
     <p-button
        label="Get a Quote"
        styleClass="p-button-outlined"
        (click)="showForm()"
      ></p-button>

      <!-- Services Link -->
      <a href="#services" class="text-sm font-semibold text-white no-underline">
      Services <span aria-hidden="true">→</span>
      </a>

    <!-- Testimonials Link -->

      <a href="#testimonials" class="text-sm font-semibold text-white no-underline">
        Hear What People Are Saying <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</div>
<div class="card flex justify-center">
<p-dialog header="Contact Form" [modal]="true" [(visible)]="this.visible" [style]="{ width: '20rem' }">
  <!-- Wrap the inputs in a form element that is bound to the FormGroup -->
  <form *ngIf="contactData" class="p-4 space-y-4" [formGroup]="contactData" (ngSubmit)="submitForm()">
    <div class="space-y-4">
      <!-- Name Field -->
      <p-iftalabel>
        <p-iconfield>
          <p-inputicon class="pi pi-envelope" />
          <input pInputText id="name" type="text" class="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" formControlName="name">
        </p-iconfield>
        <label for="name" class="text-sm font-medium text-gray-700">Name</label>
      </p-iftalabel>

      <!-- Email Field -->
      <p-iftalabel>
        <p-iconfield>
          <p-inputicon class="pi pi-mobile" />
          <input pInputText id="email" type="email" class="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" formControlName="email">
        </p-iconfield>
        <label for="name" class="text-sm font-medium text-gray-700">Email</label>
      </p-iftalabel>

      <!-- Phone Field -->
      <p-iftalabel>
        <p-iconfield>
          <p-inputicon class="pi pi-user" />
          <input pInputText id="phone" type="phone" class="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" formControlName="phone">
        </p-iconfield>
        <label for="name" class="text-sm font-medium text-gray-700">Phone Number</label>
      </p-iftalabel>

      <!-- Project Description Field with Regular Label Above -->
      <div class="flex flex-col">
        <label for="description" class="text-sm">Please tell us how we can help</label>
        <textarea id="description" formControlName="description" rows="5" class="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
=======
      <div class="form-actions">
        <p-button label="Cancel" severity="secondary" (click)="cancelForm()" />
        <p-button label="Save" type="submit" />
>>>>>>> Stashed changes
      </div>
    </form>
  </p-dialog>
</div>

  `,
  styles: `.background-container {
    position: relative;
    isolation: isolate;
    overflow: visible;
  }

  .background-svg {
    position: absolute;
    inset: 0;
    z-index: -20;
    width: 100%;
    height: 100%;
    mask-image: radial-gradient(100% 100% at top right, white, transparent);
    stroke: rgba(255, 255, 255, 0.1);
  }

  .pattern-overlay {
    overflow: visible;
    fill: rgba(31, 41, 55, 0.2);
  }

  .background-clip-container {
    position: absolute;
    top: 2.5rem;
    left: calc(50% - 4rem);
    z-index: -10;
    transform: translateZ(0);
    filter: blur(3xl);

    @media (min-width: 640px) {
      left: calc(50% - 18rem);
    }
    @media (min-width: 1024px) {
      top: calc(50% - 30rem);
      left: 12rem;
    }
    @media (min-width: 1280px) {
      left: calc(50% - 24rem);
    }
  }

  .background-clip {
    aspect-ratio: 1108 / 632;
    width: 69.25rem;
    background: linear-gradient(to right, #80caff, #4f46e5);
    opacity: 0.2;
    clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%);
  }

  .image-container {
    margin: 0 auto;
    z-index: 20;
    display: flex;
    overflow: visible;

    @media (min-width: 640px) {
      max-width: 100%;
    }
    @media (min-width: 1024px) {
      max-width: none;
    }
  }

  .image-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(0, 10rem);

    @media (min-width: 640px) {
      width: 5rem;
      height: 5rem;
      scale: 1;
      translate: (5rem, 1.25rem);
    }
    @media (min-width: 1024px) {
      width: auto;
      height: auto;
      scale: 1;
      translate: (0, 10rem);
    }
  }

  .logo-image {
    transition: all 0.5s ease-in-out;
  }

  .content-container {
    margin: 0 auto;
    z-index: 20;
    max-width: 80rem;
    padding: 2.5rem 1.5rem 6rem;

    @media (min-width: 640px) {
      padding-bottom: 8rem;
    }
    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      padding: 10rem 2rem;
    }
    @media (min-width: 640px) and (max-width: 1024px) {
      flex-direction: column-reverse;
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

  .content-title {
    margin-top: 2.5rem;
    font-size: 1.875rem;
    font-weight: 600;
    tracking: tight;
    color: #ffffff;
    font-family: 'Peridot', sans-serif;
  }

  .content-description {
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 500;
    color: #9ca3af;

    @media (min-width: 640px) {
      font-size: 0.875r
    }
  }
  `,
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
  // Show the modal
  showForm() {
    this.visible = true
    console.log('visible:', this.visible) // Log the form data
  }

  // Hide the modal and clear the data
  cancelForm() {
    this.visible = false
    this.clearForm();
  }

  // Clear the form data
  clearForm() {
    if (this.contactData){ // Check if contactData is defined
    this.contactData.reset({
      name: '',
      email: '',
      phone: '',
      description: ''
    });
  }
  }

  // Submit the form (for now, just log the payload)
  submitForm() {
    const payload = { ...this.contactData }; // Create a dynamic payload
    console.log('Form Payload:', payload); // Log the data (this would be sent to an API in a real scenario)

    // Optionally, close the modal after submission
    this.visible = false
    this.clearForm();
  }

}
