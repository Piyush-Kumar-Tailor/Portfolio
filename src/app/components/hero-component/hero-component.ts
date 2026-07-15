import { Component } from '@angular/core';
import { HeroContentComponent } from './hero-content-component';
import { HeroProfileComponent } from './hero-profile-component';

@Component({
  selector: 'app-hero-component',
  imports: [HeroContentComponent,HeroProfileComponent],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css',
})
export class HeroComponent {}
