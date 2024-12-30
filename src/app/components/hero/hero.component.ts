import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() text: string = ' Become a Vue Dev' ;
  @Input() subtle: string = ' Find the Angular job that fits your skills and needs' ;
}
