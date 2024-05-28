import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../flight';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrl: './view-ticket.component.css'
})
export class ViewTicketComponents {
  flight: Flight = new Flight(); // Flight object to hold the selected flight data

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve the flight data from query parameters
    this.route.queryParams.subscribe(params => {
      const flightData = params['flightData']; // Accessing 'flightData' from params
      if (flightData) {
        this.flight = JSON.parse(flightData);
      }
    });
  }
}
