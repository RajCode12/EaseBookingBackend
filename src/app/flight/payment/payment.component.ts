import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../../flight';
import { FlightserviceService } from '../../flightservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponentss {
  flight: Flight = new Flight();
  paymentMethod: string = '';

  constructor(
    private route: ActivatedRoute,
    private service: FlightserviceService,
    private router: Router
  ) { }

  // ngOnInit(): void {
  //   // Retrieve flight data from route parameters
  //   this.route.queryParams.subscribe(params => {
  //     if (params && params.flightData) {
  //       this.flight = JSON.parse(params.flightData);
  //     }
  //   });
  // }

  ngOnInit(): void {
    // Retrieve the flight data from query parameters
    this.route.queryParams.subscribe(params => {
      const flightData = params['flightData']; // Accessing 'flightData' from params
      if (flightData) {
        this.flight = JSON.parse(flightData);
      }
    });

  }

  confirmBooking() {
    // Here you can send the flight and payment details to Spring Boot for saving into the database
    this.service.addflight(this.flight).subscribe(
      data => {
        alert("Booking confirmed! Payment successful.");
        // Redirect user to a success page or navigate to another component
      },
      error => {
        console.error("Error occurred while confirming booking:", error);
        alert("Error occurred while confirming booking. Please try again later.");
      }
    );
    this.router.navigate(['/view-ticket2'], { queryParams: { flightData: JSON.stringify(this.flight) } });
  }
}

