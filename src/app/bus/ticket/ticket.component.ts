import { Component } from '@angular/core';
import { BusServiceService } from '../../bus-service.service';
import { Router } from '@angular/router';
import { Bus } from '../../bus';
import { Passenger } from '../../passenger';
import { Payment } from '../../payment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
  providers: [DatePipe]
})
export class TicketComponent {
  bus : Bus = new Bus();
  payment : Payment = new Payment();
  pnr? : number;
  passengers : Passenger[] = []
  status : string = 'Success';
  constructor(private service:BusServiceService, private router: Router, private datePipe: DatePipe){}
  ngOnInit(): void {
    //get Bus
    this.service.getBusBooking(this.service.getSeatNumber()).subscribe(
      data => {
        this.bus = data;
        console.log(data); // You can do something with the data returned by the backend
      },
      error => {
        console.error(error); // Handle error if any
      }
    );
    //get Passenger
    this.service.getPassengerByPnr(this.service.getPnrNumber()).subscribe(data => {
      this.passengers = data;
    }, error => {
      console.log(error);
    });
    //get Payment
    this.service.getPaymentByPnr(this.service.getPnrNumber()).subscribe(
      data=>{
        this.payment = data;
      },error => {
        console.log(error);
      }
    );
  }
  format(date?:Date) : string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
}
