import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // imagePath = '../../../assets/images/logo.png';
  imagePath = '../../../assets/images/logo.png';

  isActiveRout(){
    
  }

}
