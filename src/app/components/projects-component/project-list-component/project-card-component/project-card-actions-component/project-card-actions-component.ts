import { Component, input } from '@angular/core';

import { Project } from '../../../../../dto';

@Component({
  selector: 'app-project-card-actions-component',
  standalone: true,
  imports: [],
  templateUrl: './project-card-actions-component.html',
  styleUrl: './project-card-actions-component.css'
})
export class ProjectCardActionsComponent {

  readonly project = input.required<Project>();

}