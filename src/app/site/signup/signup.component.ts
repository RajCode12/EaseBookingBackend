
import { Component } from '@angular/core';
import { Person } from '../../person';
import { PersonserviceService } from '../../personservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  person: Person = new Person();

  constructor(private personService: PersonserviceService, private router : Router) {}

  onSubmit() {
    this.personService.createperson(this.person).subscribe(
      response => {
        console.log('Data submitted successfully:', response);
      },
      error => {
        console.error('Error occurred while submitting data:', error);
      }
    );
    this.router.navigate(['/login']);
  }
}
