import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <!-- Contact Information -->
        <div class="contact-info">
          <p>Email: <a href="mailto:dylan@djps-llc.com" class="footer-link">dylan&#64;djps-llc.com</a></p>
          <p>Phone: <a href="tel:+12074239926" class="footer-link">(207) 423-9926</a></p>
        </div>

        <!-- Social Icons -->
        <div class="social-icons">
          <a href="https://www.facebook.com/DJewettPropertyServices" target="_blank" class="social-link">
            <i class="pi pi-facebook social-icon"></i>
          </a>
          <a href="https://www.instagram.com/djewett_property_services/" target="_blank" class="social-link">
            <i class="pi pi-instagram social-icon"></i>
          </a>
        </div>
      </div>

      <!-- Company Info -->
      <div class="company-info">
        <a href="mailto:dev@madhareconsulting.com" class="company-link">
          © 2025 Mad Hare Consulting, LLC. All rights reserved.
        </a>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      padding: 4rem 0;
      background-color: #0f172a; /* Optional: Dark background for footer */
    }

    .footer-container {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1.5rem;
    }

    .contact-info {
      font-size: 0.875rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .footer-link {
      color: #d1d5db;
      text-decoration: none;
    }

    .footer-link:hover {
      color: #ffffff;
    }

    .social-icons {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      color: #ffffff;
      transition: color 0.3s;
    }

    .social-link:hover {
      color: #3b82f6; /* Blue for Facebook */
    }

    .social-link:nth-child(2):hover {
      color: #ec4899; /* Pink for Instagram */
    }

    .social-icon {
      font-size: 1.5rem;
    }

    .company-info {
      margin-top: 1rem;
      text-align: center;
    }

    .company-link {
      font-size: 0.875rem;
      color: #9ca3af;
      text-decoration: none;
    }

    .company-link:hover {
      color: #ffffff;
    }
  `
})
export class FooterComponent {}
