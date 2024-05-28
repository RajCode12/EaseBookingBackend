import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './bus';
import { Passenger } from './passenger';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {
  private busId : any;
  private pnr : any;
  private bus = new Bus();
  private passengers: Passenger[] = []
  
  private baseURL = "http://localhost:8080/api/v1/records";
  private baseURL2 = "http://localhost:8080/api/v1/buspayments";

  constructor(private http: HttpClient) {}

  addRecord(bus: Bus): Observable<Object> {
    return this.http.post(`${this.baseURL}`, bus);
  }

  getRecord(): Observable<Bus[]> {
    return this.http.get<Bus[]>(`${this.baseURL}`);
  }

  getBusBooking(id:number):Observable<Bus>{
    return this.http.get<Bus>(`http://localhost:8080/api/v1/bus/${id}`);
  }

  addPassenger(passenger : Passenger) {
    return this.http.post(`http://localhost:8080/api/v1/passengers`, passenger);
  }

  getPassengerByPnr(pnr:number):Observable<Passenger[]> {
    return this.http.get<Passenger[]>(`http://localhost:8080/api/v1/pass/${pnr}`);
  }

  addPayment(pay : Payment): Observable<Object> {
    return this.http.post(`${this.baseURL2}`,pay);
  }

  getPayment(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.baseURL2}`);
  }

  getPaymentByPnr(pnr:number):Observable<Payment> {
    return this.http.get<Payment>(`http://localhost:8080/api/v1/buspayments/${pnr}`);
  }

  getPnrNumber() : any {
    return this.pnr;
  }
  setPnrNumber(pnr: any): void {
    this.pnr = pnr;
  }

  getSeatNumber() : any{
    return this.busId;
  }
  setSeatNumber(busId: any): void {
    this.busId = busId;
  }

  getBus() : any {
    return this.bus;
  }

  setBus(bus: any) : void {
    this.bus = bus;
  }

  setPassengerList(passengers : any) : void {
    this.passengers = passengers;
  }

  getPassengerList() : any {
    return this.passengers;
  }
}
