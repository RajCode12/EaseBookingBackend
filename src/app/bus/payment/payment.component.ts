import { Component, OnInit } from '@angular/core';
import { Bus } from '../../bus';
import { BusServiceService } from '../../bus-service.service';
import { Router } from '@angular/router';
import { Passenger } from '../../passenger';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
  providers: [DatePipe]
})
export class PaymentComponent implements OnInit{
  bus : Bus = new Bus();
  constructor(private service : BusServiceService, private router : Router, private datePipe:DatePipe) {}

  passengers : Passenger[] = [new Passenger()];

  random : number = 0;
  ngOnInit(): void {
    this.bus = this.service.getBus();
    this.random = this.service.getPnrNumber();
  }
  
  addCount() {
    this.passengers.push(new Passenger());
  }
  deleteCount() {
    this.passengers.pop();
  }
  
  i:number=0;
  
  onSubmit() {
    this.service.setPassengerList(this.passengers);
    this.router.navigate(['/make-payment']);
  }

  onBack() {
    this.router.navigate(['/select-bus']);
  }

  format(date?:Date) : string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

  allFieldsFilled(): boolean {
    return this.passengers.every(p => p.name && p.name.trim() !== '' && p.age && p.age > 0);
  }
  
}
