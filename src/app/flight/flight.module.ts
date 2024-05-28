import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AboutComponents } from './about/about.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookingsComponent } from './bookings/bookings.component';
import { PaymentComponentss } from './payment/payment.component';
import { ViewTicketComponents } from './view-ticket/view-ticket.component';



@NgModule({
  declarations: [
    ContactComponent,
    AboutComponents,
    BookFlightComponent,
    BookingsComponent,
    ViewTicketComponents,
    PaymentComponentss
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactComponent,
    AboutComponents,
    BookFlightComponent,
    BookingsComponent,
    ViewTicketComponents,
    PaymentComponentss
  ]
})
export class FlightModule { }
