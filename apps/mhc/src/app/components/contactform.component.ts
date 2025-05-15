import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '@mhc/api';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    Dialog,
    ButtonModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    IftaLabelModule,
    ReactiveFormsModule,
    Toast
  ],
  providers: [MessageService],
  templateUrl: './contactform.component.html',
})


export class ContactFormComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  private ApiService = inject(ApiService);

  contactForm: FormGroup;

  constructor(private apiService: ApiService, private toast: MessageService) {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  cancelForm() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.contactForm.reset();
  }

  submitForm() {
    if (this.contactForm.invalid) {
      console.log('Form is invalid',this.contactForm.value);
      this.toast.add({ severity: 'error', summary: 'Error', detail: 'Please fill all fields.', life: 3000 });
      return;
    }

    this.apiService.submitForm(this.contactForm.value).subscribe({
      next: () => {
        this.toast.add({ severity: 'success', summary: 'Success', detail: 'Form submitted!', life: 3000 });
        this.contactForm.reset();
        this.visible = false;
        this.visibleChange.emit(this.visible);
      },
      error: (error) => {
        this.toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
      }
    });
  }
}
