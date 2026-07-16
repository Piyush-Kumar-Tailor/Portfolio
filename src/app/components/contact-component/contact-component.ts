import { Component, inject, signal } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import emailjs from '@emailjs/browser';
import { environment } from '../../environments';

@Component({
  selector: 'app-contact-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css'
})
export class ContactComponent {

  private readonly fb = inject(NonNullableFormBuilder);

  readonly emailJs = environment.emailJs;

  readonly isSending = signal(false);

  readonly successMessage = signal('');

  readonly errorMessage = signal('');

  readonly contactForm = this.fb.group({

    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    subject: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ]
    ],

    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000)
      ]
    ]

  });

  sendEmail(): void {

    if (this.isSending()) return;

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;

    }

    this.successMessage.set('');
    this.errorMessage.set('');
    this.isSending.set(true);

    const form = this.contactForm.getRawValue();

    emailjs.send(

      this.emailJs.serviceId,

      this.emailJs.templateId,

      {

        from_name: form.name.trim(),

        from_email: form.email.trim(),

        subject: form.subject.trim(),

        message: form.message.trim()

      },

      this.emailJs.publicKey

    )

      .then(() => {

        this.successMessage.set(
          '✅ Thank you! Your message has been sent successfully.'
        );

        this.contactForm.reset();

      })

      .catch((error: unknown) => {

        console.error('EmailJS Error:', error);

        this.errorMessage.set(
          '❌ Failed to send your message. Please try again.'
        );

      })

      .finally(() => {

        this.isSending.set(false);

      });

  }

}