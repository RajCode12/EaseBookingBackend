import { Component } from '@angular/core';
import { Person } from '../../person';
import { PersonserviceService } from '../../personservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {
  person: Person = new Person();

  constructor(private personService: PersonserviceService, private router : Router) {}

  onSubmit() {
    alert("Password changed");
    this.router.navigate(['/login']);
  }
}


