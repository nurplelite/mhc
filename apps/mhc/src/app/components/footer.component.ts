import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  template: `
    <footer class="py-16">
    <div class="container mx-auto flex justify-between items-center px-6">
    <!-- Contact Information -->
    <div class="text-sm space-y-2">
      <p>Email: <a href="mailto:dylan@djps-llc.com">dylan&#64;djps-llc.com</a></p>
      <p>Phone: <a href="tel:+12074239926">(207) 423-9926</a></p>
    </div>

    <!-- Social Icons -->
    <div class="flex space-x-4">
      <!-- Facebook Icon -->
      <a href="https://www.facebook.com/DJewettPropertyServices" target="_blank" class="text-white hover:text-blue-500">
        <i class="pi pi-facebook text-2xl"></i>
      </a>

      <!-- Instagram Icon -->
      <a href="https://www.instagram.com/djewett_property_services/" target="_blank" class="text-white hover:text-pink-500">
        <i class="pi pi-instagram text-2xl"></i>
      </a>
    </div>
  </div>

  <!-- Company Info -->
  <div class="text-center mt-4">
    <a href="mailto:dev@madhareconsulting.com" class="text-gray-400 text-sm hover:text-white">
      © 2025 Mad Hare Consulting, LLC. All rights reserved.
    </a>
  </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {}
