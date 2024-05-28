import { Component } from '@angular/core';
import { PersonserviceService } from '../../personservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service : PersonserviceService, private router : Router) {}

  busClick() {
    this.router.navigate(['/book']);
  }
  trainClick() {
    this.router.navigate(['/book-ticket']);
  }
  flightClick() {
    this.router.navigate(['/bookflight']);
  }
  bookingClick(){
    this.router.navigate(['/trains']);
  }
  transClick() {
    this.router.navigate(['/show-transaction']);
  }
  aboutClick() {
    this.router.navigate(['/aboutus']);
  }

}
