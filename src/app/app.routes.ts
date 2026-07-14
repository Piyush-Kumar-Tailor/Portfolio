import { Routes } from '@angular/router';
import { App } from '.';

export const routes: Routes = [

  {
    path: '',
    component: App,
    title: 'Piyush Kumar Tailor | Java Full Stack Developer'
  },

  {
    path: '**',
    redirectTo: ''
  }

];