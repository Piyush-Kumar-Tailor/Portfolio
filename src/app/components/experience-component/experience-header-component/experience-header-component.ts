import { Component, input } from '@angular/core';

@Component({
  selector: 'app-experience-header',
  standalone: true,
  templateUrl: './experience-header-component.html',
  styleUrl: './experience-header-component.css'
})
export class ExperienceHeaderComponent {

  title = input('Professional');

  highlight = input('Experience');

  subtitle = input('My Journey');

  description = input(
    'Throughout my internships, I have gained hands-on experience in Java Full Stack Development, Backend Engineering, Artificial Intelligence, Machine Learning and RESTful API development.'
  );

}