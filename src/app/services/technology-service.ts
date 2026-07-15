import { Injectable } from '@angular/core';
import { Technologies } from '../dto';

@Injectable({
  providedIn: 'root',
})
export class TechnologyService {

  readonly technologies =Technologies;

}
