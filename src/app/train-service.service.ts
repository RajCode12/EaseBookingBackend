import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from './train';
import { Payment2 } from './payment copy';


@Injectable({
  providedIn: 'root'
})
export class TrainServiceService {
  private payURL="http://localhost:8080/api/v1/payments";
  getTransactionHistory():Observable<Payment2[]>{
    return this.httpClient.get<Payment2[]>(`${this.payURL}`);
  }
  makePayment(payment: Payment2): Observable<Object>{
    return this.httpClient.post(`${this.payURL}`,payment);
  }
  getTransaction(id:number):Observable<Payment2>{
    return this.httpClient.get<Payment2>(`http://localhost:8080/api/v1/payments/payment/${id}`);
  }
  


  private train= new Train();
  private seatNumber : any;

  private baseURL="http://localhost:8080/api/v1/trains";
  constructor(private httpClient: HttpClient) { }

  getTrainBookingList():Observable<Train[]>{
    return this.httpClient.get<Train[]>(`${this.baseURL}`);
  }

  createJourney(train: Train): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,train);
  }

  getTrainBooking(id:number):Observable<Train>{
    return this.httpClient.get<Train>(`http://localhost:8080/api/v1/train/${id}`);
  }

  getSeatNumber() : any{
    return this.seatNumber;
  }
  setSeatNumber(seatNumber: any): void {
    this.seatNumber = seatNumber;
  }
  getTrain():any{
    return this.train;
      
  }
  setTrain(train:Train):any{
    this.train=train;
  }
}
