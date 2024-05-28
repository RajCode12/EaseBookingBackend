import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TrainServiceService } from '../../train-service.service';
import { Train } from '../../train';
import { rmdir } from 'node:fs';
import { Bus } from '../../bus';
import { BusServiceService } from '../../bus-service.service';
@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrl: './train.component.css',
  providers: [DatePipe]

})
export class TrainComponent implements OnInit{
  trains: Train[]=[];

  records: Bus[] = [];
  pnr? : any;

  constructor(private service : BusServiceService, private trainService:TrainServiceService, private router : Router, private datePipe: DatePipe){}
  ngOnInit(): void {
    this.getTrain();
    this.pnr = this.service.getPnrNumber();
    this.service.getRecord().subscribe(data=>{this.records=data});
  }
  private getTrain(){
    this.trainService.getTrainBookingList().subscribe(data => {
      this.trains=data;
    })
  }
  onClick(id:any) {
    this.trainService.setSeatNumber(id);
    this.router.navigate(['/view-ticket']);
  }


  format(date?:Date) : string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }


  goToShow() {
    this.router.navigate(['/show-ticket']);
  }
  onClick2(id?:number,pnr?:number) {
    this.service.setPnrNumber(pnr);
    this.service.setSeatNumber(id);
    this.goToShow();
  }

  
  
}
