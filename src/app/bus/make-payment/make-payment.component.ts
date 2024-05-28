import { Component, OnInit } from '@angular/core';
import { BusServiceService } from '../../bus-service.service';
import { Bus } from '../../bus';
import { Passenger } from '../../passenger';
import { Payment } from '../../payment';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrl: './make-payment.component.css'
})
export class MakePaymentComponent implements OnInit{
  bus : Bus = new Bus();
  passengers : Passenger[] = [];
  random : number = 0;
  constructor(private service : BusServiceService, private router : Router) {}
  payForm:FormGroup = new FormGroup({});

  ngOnInit() {
    this.bus = this.service.getBus();
    this.random = this.service.getPnrNumber();
    this.passengers = this.service.getPassengerList();
    this.payForm = new FormGroup({
      upi:new FormControl(null,Validators.required)
    })
  }

  payment : Payment = new Payment();
  amount : number = 2000;
  i : number = 0;

  onSubmit() {
    this.payment.upi = this.payForm.get('upi')?.value;
    this.payment.pnr = this.bus.pnr;
    this.payment.amount = this.amount;
    this.payment.date = this.bus.date;

    for(this.i=0; this.i < this.passengers.length; this.i++) {
      this.passengers[this.i].pnr = this.random;
      this.passengers[this.i].seat = this.i + 1;
      //adding multiple passenger
      this.service.addPassenger(this.passengers[this.i]).subscribe(data=>{
        },
        error => console.log(error));
    }
    //add bus
    this.service.addRecord(this.bus).subscribe(data=>{},
    error => console.log(error));
    //add payment
    this.service.addPayment(this.payment).subscribe(data=> {},
      error => console.log(error));
    //alert
    alert('Successfully created ticket!');
    this.service.setPnrNumber(this.random);
    this.router.navigate(['/show']);
  }

  onBack() {
    this.router.navigate(['/payment']);
  }

}
