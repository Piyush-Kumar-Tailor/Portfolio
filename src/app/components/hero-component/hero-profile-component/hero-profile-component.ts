import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-profile-component',
  standalone: true,
  imports: [],
  templateUrl: './hero-profile-component.html',
  styleUrl: './hero-profile-component.css'
})
export class HeroProfileComponent {

  readonly profileImage = 'images/Piyush.png';

  readonly technologies = [
    {
      name: 'Java',
      icon: '☕',
      bg: 'bg-blue-600',
      position:
        'left-0 top-8 md:-left-8 md:top-10'
    },
    {
      name: 'Spring Boot',
      icon: '🌱',
      bg: 'bg-green-600',
      position:
        'right-0 top-24 md:-right-8 md:top-32'
    },
    {
      name: 'Angular',
      icon: '🅰',
      bg: 'bg-red-600',
      position:
        'left-0 bottom-24 md:-left-8 md:bottom-32'
    },
    {
      name: 'Python',
      icon: '🐍',
      bg: 'bg-yellow-500 text-black',
      position:
        'right-0 bottom-6 md:-right-8 md:bottom-12'
    }
  ];

}