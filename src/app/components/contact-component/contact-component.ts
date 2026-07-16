import { Component } from '@angular/core';

import { ContactInfoComponent } from './contact-info-component';
import { ContactFormComponent } from './contact-form-component';

@Component({
  selector: 'app-contact-component',
  standalone: true,
  imports: [
    ContactInfoComponent,
    ContactFormComponent
  ],
  templateUrl: './contact-component.html'
})
export class ContactComponent {}