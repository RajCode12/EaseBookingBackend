import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonserviceService } from '../../personservice.service';
import { Person } from '../../person';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

 export class LoginComponent implements OnInit {



user:Person=new Person();
constructor(private userservice: PersonserviceService, private router: Router){}
ngOnInit(): void {
}

userLogin(){
  console.log(this.user)
  this.userservice.loginUser(this.user).subscribe(data=>{
    alert("Login Sucessful")
    this.router.navigate(['/home']);
  },error=>alert("Sorry you are not in"));

}
Onclick()
{
  this.router.navigate(['/forget'])

}

Onpressed()
{
  this.router.navigate(['/signup'])
}

}


