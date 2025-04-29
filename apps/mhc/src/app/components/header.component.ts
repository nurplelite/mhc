import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ContactFormComponent } from './contactform.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, ContactFormComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  formVisible = false;

  openForm() {
    this.formVisible = true;
  }
}
