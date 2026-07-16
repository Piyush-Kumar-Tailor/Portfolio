import { Component, input, signal, computed } from '@angular/core';
import { Project } from '../../../../../dto';

@Component({
  selector: 'app-project-card-details-component',
  standalone: true,
  templateUrl: './project-card-details-component.html',
  styleUrl: './project-card-details-component.css'
})
export class ProjectCardDetailsComponent {

  readonly project = input.required<Project>();

  readonly showAllFeatures = signal(false);

  readonly visibleFeatures = computed(() =>
    this.showAllFeatures()
      ? this.project().features
      : this.project().features.slice(0, 2)
  );

  toggleFeatures(): void {
    this.showAllFeatures.update(value => !value);
  }

}