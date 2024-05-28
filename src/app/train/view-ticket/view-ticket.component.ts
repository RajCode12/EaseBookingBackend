import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TrainServiceService } from '../../train-service.service';
import { Train } from '../../train';
import { Payment2 } from '../../payment copy';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrl: './view-ticket.component.css',
  providers: [DatePipe]
})
export class ViewTicketComponent implements OnInit{
  train:Train=new Train();
  payment:Payment2=new Payment2();
  payId:number = this.trainService.getSeatNumber();

  constructor(private trainService:TrainServiceService, private router: Router, private datePipe: DatePipe){}
  ngOnInit(): void {
    this.trainService.getTransaction(this.payId).subscribe(
      data => {
        this.payment = data;
        console.log(data); // You can do something with the data returned by the backend
      },
      error => {
        console.error(error); // Handle error if any
      }
    );


    this.trainService.getTrainBooking(this.trainService.getSeatNumber()).subscribe(
      data => {
        this.train = data;
        console.log(data); // You can do something with the data returned by the backend
      },
      error => {
        console.error(error); // Handle error if any
      }
    );
  }
  format(date?:Date) : string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
  // private getTrain(){
  //   this.trainService.getTrainBooking(1).subscribe(data => {
  //     this.train=data;
  //   })
  // }

}
