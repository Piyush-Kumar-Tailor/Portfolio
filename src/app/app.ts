import { Component } from '@angular/core';

import { COMPONENTSIMPORTS } from './componens-imports'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [COMPONENTSIMPORTS],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{}