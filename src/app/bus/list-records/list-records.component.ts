import { Component, OnInit } from '@angular/core';
import { Bus } from '../../bus';
import { BusServiceService } from '../../bus-service.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-records',
  templateUrl: './list-records.component.html',
  styleUrl: './list-records.component.css',
  providers: [DatePipe]
})
export class ListRecordsComponent implements OnInit{
  records: Bus[] = [];

  pnr? : any;
  constructor(private service : BusServiceService, private router : Router, private datePipe : DatePipe) { }
  ngOnInit(): void {
    this.pnr = this.service.getPnrNumber();
    this.service.getRecord().subscribe(data=>{this.records=data});
  }

  goToShow() {
    this.router.navigate(['/show-ticket']);
  }
  onClick(id?:number,pnr?:number) {
    this.service.setPnrNumber(pnr);
    this.service.setSeatNumber(id);
    this.goToShow();
  }

  format(date?:Date) : string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

}
