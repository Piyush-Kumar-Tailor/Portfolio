import { Component, input } from '@angular/core';

@Component({
  selector: 'app-contact-alerts-component',
  standalone: true,
  templateUrl: './contact-alerts-component.html'
})
export class ContactAlertsComponent {

  /**
   * Success message from parent
   */
  readonly successMessage = input('');

  /**
   * Error message from parent
   */
  readonly errorMessage = input('');

}