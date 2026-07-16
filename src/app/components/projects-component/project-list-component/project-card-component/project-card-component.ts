import { Component, input } from '@angular/core';

import { Project } from '../../../../dto';

import { ProjectCardPreviewComponent} from './project-card-preview-component';
import { ProjectCardDetailsComponent } from './project-card-details-component';
import { ProjectCardActionsComponent } from './project-card-actions-component';
import { ProjectCardSkeletonComponent } from './project-card-skeleton-component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    ProjectCardPreviewComponent,
    ProjectCardDetailsComponent,
    ProjectCardActionsComponent,
    ProjectCardSkeletonComponent,
],
  templateUrl: './project-card-component.html'
})
export class ProjectCardComponent {

  readonly project = input<Project>();

}