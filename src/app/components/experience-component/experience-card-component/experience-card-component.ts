import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../../dto';
import { TechnologyChipComponent } from '../technology-chip-component';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [
    CommonModule,TechnologyChipComponent
  ],
  templateUrl: './experience-card-component.html',
  styleUrl: './experience-card-component.css'
})
export class ExperienceCardComponent {

  experience = input.required<Experience>();

}