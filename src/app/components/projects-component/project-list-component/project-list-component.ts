import { Component, inject, signal } from '@angular/core';
import { ProjectCardComponent } from '.';
import { ProjectService } from '../../../services/project-service';
@Component({

  selector: 'app-project-list',

  standalone: true,

  imports: [ProjectCardComponent],

  templateUrl: './project-list-component.html'

})

export class ProjectListComponent {

  projectService = inject(ProjectService);
  projects = this.projectService.projects;


}