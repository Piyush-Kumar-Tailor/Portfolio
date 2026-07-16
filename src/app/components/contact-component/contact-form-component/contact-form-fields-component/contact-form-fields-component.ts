import { Component, input, output } from '@angular/core';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form-fields-component',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact-form-fields-component.html'
})
export class ContactFormFieldsComponent {

  /**
   * Parent Reactive Form
   */
  readonly form = input.required<FormGroup>();

  /**
   * Loading state
   */
  readonly isSending = input.required<boolean>();

  /**
   * Emits when the user submits the form
   */
  readonly submitForm = output<void>();

}