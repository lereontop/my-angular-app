import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCardComponent } from '../home-card/home-card.component';
import { HeroComponent } from '../hero/hero.component';
import { JobListinsComponent } from '../job-listins/job-listins.component';

@Component({
  selector: 'app-home',
  imports:[
    HeroComponent,
    HomeCardComponent,
    JobListinsComponent,
    CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
