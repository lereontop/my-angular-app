// import {  } from './home/home.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { JobViewComponent } from './components/job-view/job-view.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SingleJobviewComponent } from './components/single-jobview/single-jobview.component';


export const routes: Routes = [

  {
    path: '',
    component: HomeComponent,

  },

  {
    path: 'jobs',
    component: JobViewComponent,

  },
  {
    path: 'job/:id',
    component: SingleJobviewComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,

  }

];
