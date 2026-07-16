import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-content-component',
  standalone: true,
  imports: [],
  templateUrl: './hero-content-component.html',
  styleUrl: './hero-content-component.css'
})
export class HeroContentComponent {

  readonly github =
    'https://github.com/Piyush-Kumar-Tailor';

  readonly linkedin =
    'https://www.linkedin.com/in/piyush-kumar-tailor/';

  readonly email =
    'mailto:piyushkumar89b2@gmail.com';

  readonly resume =
    'resume/Piyush_Kumar_Tailor_Resume.pdf';

}