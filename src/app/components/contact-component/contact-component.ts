import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import emailjs from '@emailjs/browser';
import { environment } from '../../environments'; // Adjust the path if needed

@Component({
  selector: 'app-contact-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css'
})
export class ContactComponent {

  contactForm: FormGroup;

  isSending = signal(false);

  successMessage = signal('');

  errorMessage = signal('');

  // EmailJS Configuration
  emailJs = environment.emailJs;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({

      name: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      subject: ['', Validators.required],

      message: ['', Validators.required]

    });

  }

  sendEmail(): void {

    // Prevent multiple clicks
    if (this.isSending()) {
      return;
    }

    // Validate form
    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;

    }

    // Clear previous messages
    this.successMessage.set('');
    this.errorMessage.set('');

    // Show loading
    this.isSending.set(true);

    emailjs.send(

      this.emailJs.serviceId,

      this.emailJs.templateId,

      {

        from_name: this.contactForm.value.name,

        from_email: this.contactForm.value.email,

        subject: this.contactForm.value.subject,

        message: this.contactForm.value.message

      },

      this.emailJs.publicKey

    )

    .then(() => {

      this.successMessage.set(
        '✅ Thank you! Your message has been sent successfully.'
      );

      this.contactForm.reset({

        name: '',

        email: '',

        subject: '',

        message: ''

      });

    })

    .catch((error) => {

      console.error(error);

      this.errorMessage.set(
        '❌ Unable to send your message. Please try again later.'
      );

    })

    .finally(() => {

      this.isSending.set(false);

    });

  }

}