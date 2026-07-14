import { Component } from '@angular/core';
import {
  ExperienceHeaderComponent,
  ExperienceTimelineComponent
} from '.'

@Component({
  selector: 'app-experience-component',
  imports: [ExperienceHeaderComponent, ExperienceTimelineComponent],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.css',
})
export class ExperienceComponent { }
