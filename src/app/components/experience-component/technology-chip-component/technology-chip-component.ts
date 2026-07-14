import { Component, input } from '@angular/core';
import { Technology } from '../../../dto';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-technology-chip',
  standalone: true,
  imports:[NgClass],
  templateUrl: './technology-chip-component.html',
  styleUrl: './technology-chip-component.css'
})
export class TechnologyChipComponent {

  technology = input.required<Technology>();

}