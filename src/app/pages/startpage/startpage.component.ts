import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [],
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.css'
})
export class StartpageComponent {

  constructor(private router: Router) { }

  goMain() {
    this.router.navigate(['/main']);
  }

  goTuturial() {
    this.router.navigate(['/tutorial']);
  }
}
