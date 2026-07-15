import { Injectable } from '@angular/core';
import { EXPERIENCES } from '../dto';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  readonly experieces = EXPERIENCES;
}
