import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../../flight';
import { FlightserviceService } from '../../flightservice.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit{
  flights: Flight[] = [];
  constructor(private service: FlightserviceService, private router: Router) { }
  // flight : Flight = new Flight()

  ngOnInit(): void {
    this.service.getFlights().subscribe(
      (data: Flight[]) => {
        this.flights = data;
      },
      (error) => {
        console.error('Error fetching flights:', error);
      }
    );
  }


  // constructor(private router: Router) { }

  // Function to navigate to view-ticket component with selected flight data
  viewTicket(flight: Flight) {
    // Pass the flight data to the view-ticket component via query parameters
    this.router.navigate(['/view-ticket2'], { queryParams: { flightData: JSON.stringify(flight) } });
  }

}
