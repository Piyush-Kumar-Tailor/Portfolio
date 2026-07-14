import { Component, inject, signal } from '@angular/core';
import { ExperienceCardComponent } from '../experience-card-component';
import { ExperienceService } from '../../../services/experience-service';

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  imports: [
    ExperienceCardComponent
  ],
  templateUrl: './experience-timeline-component.html',
  styleUrl: './experience-timeline-component.css'
})
export class ExperienceTimelineComponent {
  
  experienceService = inject(ExperienceService);

  experiences = this.experienceService.experieces;

}