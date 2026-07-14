import { Component } from '@angular/core';
import { ProjectHeaderComponent } from '.';
import { ProjectListComponent } from './project-list-component/project-list-component';

@Component({
  selector: 'app-projects-component',
  imports: [ProjectHeaderComponent,ProjectListComponent],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.css',
})
export class ProjectsComponent {}
