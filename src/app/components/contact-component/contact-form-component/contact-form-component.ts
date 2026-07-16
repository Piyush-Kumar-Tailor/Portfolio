import { Component, signal } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import emailjs from '@emailjs/browser';

import { environment } from '../../../environments';

import { ContactAlertsComponent } from './contact-alerts-component';

import { ContactFormFieldsComponent } from './contact-form-fields-component';

@Component({
  selector: 'app-contact-form-component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ContactAlertsComponent,
    ContactFormFieldsComponent,
],
  templateUrl: './contact-form-component.html'
})
export class ContactFormComponent {

  readonly isSending = signal(false);

  readonly successMessage = signal('');

  readonly errorMessage = signal('');

  readonly emailJs = environment.emailJs;

  readonly contactForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {

    this.contactForm = this.fb.group({

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

          Validators.minLength(20),

          Validators.maxLength(1000)

        ]

      ]

    });

  }

  sendEmail(): void {

    if (this.isSending()) {

      return;

    }

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;

    }

    this.successMessage.set('');

    this.errorMessage.set('');

    this.isSending.set(true);

    emailjs.send(

      this.emailJs.serviceId,

      this.emailJs.templateId,

      {

        from_name: this.contactForm.value.name.trim(),

        from_email: this.contactForm.value.email.trim(),

        subject: this.contactForm.value.subject.trim(),

        message: this.contactForm.value.message.trim()

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

      this.contactForm.markAsPristine();

      this.contactForm.markAsUntouched();

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