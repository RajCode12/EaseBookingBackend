import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }
  tempflight : Flight = new Flight();
  // List<Flight> bookings = this.http.get(`${this.baseUrl}/flights`);

  addflight(flightData: Flight) {
    this.tempflight = flightData;
    return this.http.post(`${this.baseUrl}/newflight`, flightData);
  }

  getFlights(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/flights`);
  }

}
