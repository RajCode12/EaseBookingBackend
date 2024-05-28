import { Component, OnInit } from '@angular/core';
import { BusServiceService } from '../../bus-service.service';
import { Payment } from '../../payment';
import { DatePipe } from '@angular/common';
import { TrainServiceService } from '../../train-service.service';
import { Payment2 } from '../../payment copy';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
  providers: [DatePipe]
})
export class TransactionComponent implements OnInit{
  payment:Payment2[]= [];

  constructor(private trainService:TrainServiceService, private service : BusServiceService, private datePipe : DatePipe) {}

  ngOnInit(): void {
    this.service.getPayment().subscribe(data => {
      this.payments = data;
    })
    this.getHistory();
  }
  
  status:string = 'Success';
  payments : Payment[] = []
  
  format(date?:Date) : string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

  private getHistory(){
    this.trainService.getTransactionHistory().subscribe(data => {
      this.payment=data;
    })
  }
}
