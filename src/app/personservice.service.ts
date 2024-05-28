import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonserviceService {

  private person= new Person();
  private seatNumber : any;
 
  private baseURL="http://localhost:8080/api/v1/persons";
  private baseURL2="http://localhost:8080/api/v1/login";
  constructor(private httpClient: HttpClient) { }
 
 
  createperson(person: Person): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,person);
  }
  login(email: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.baseURL}/login`, { email, password });
 


}
loginUser(user:Person):Observable<object>{
  console.log(user);
  return this.httpClient.post(`${this.baseURL2}`,user);
}



}