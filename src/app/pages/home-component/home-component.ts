import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss']
})
export class HomeComponent {

  constructor(public router: Router) {}
}
