import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../dto';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card-component.html',
  styleUrl: './project-card-component.css'
})
export class ProjectCardComponent {

  project = input.required<Project>();

}