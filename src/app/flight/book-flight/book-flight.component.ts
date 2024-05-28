import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from '../../flight';
import { FlightserviceService } from '../../flightservice.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent {
  static booking_id: number;
  flight: Flight = new Flight();
  constructor(private service: FlightserviceService, private router: Router) { }

  
  onSubmit(form: NgForm) {
    
    this.flight = form.value;
    // this.router.navigate(['/payment'], { queryParams: { flightData: JSON.stringify(this.flight) } });
    // this.service.addflight(this.flight).subscribe(data=>{
    //   alert("Flight Booked....");
    // }, error => console.log(error));

    const queryParams = { flightData: JSON.stringify(this.flight) };
    this.router.navigate(['/payment3'], { queryParams });

    form.resetForm();
  }

}











// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { FlightserviceService } from '../flightservice.service';
// import { Flight } from '../flight';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-book-flight',
//   templateUrl: './book-flight.component.html',
//   styleUrls: ['./book-flight.component.css']
// })
// export class BookFlightComponent {
//   flight: Flight = new Flight();
//   availableFlights: Flight[] = []; // Array to store available flights

//   constructor(private service: FlightserviceService, private router: Router) { }

//   searchFlights(form: NgForm) {
//     // Fetch available flights based on user input
//     const { source, destination, date } = form.value;
//     this.service.getAvailableFlights(source, destination, date).subscribe(
//       (flights: Flight[]) => {
//         this.availableFlights = flights;
//       },
//       error => console.log(error)
//     );
//   }

//   bookFlight(selectedFlight: Flight) {
//     // Redirect to payment page with selected flight data
//     const queryParams = { flightData: JSON.stringify(selectedFlight) };
//     this.router.navigate(['/payment'], { queryParams });
//   }
// }

