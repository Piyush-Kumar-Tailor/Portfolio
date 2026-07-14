import { Injectable } from '@angular/core';
import { ALLPROJECT } from '../dto';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects  = ALLPROJECT;
}
