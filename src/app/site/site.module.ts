// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
// import { FormGroup, FormsModule } from '@angular/forms';




// @NgModule({
//   declarations: [

  
//     LoginComponent,
//          SignupComponent,
//          ForgetpasswordComponent
//   ],
//   imports: [
//     CommonModule,
//     FormsModule
//   ],
//   exports:[LoginComponent,SignupComponent,ForgetpasswordComponent]
// })
// export class SiteModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component'; // Removed FormGroup import
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgetpasswordComponent, HomeComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule], // Removed FormGroup from imports
  exports: [LoginComponent, SignupComponent, ForgetpasswordComponent, HomeComponent]
})
export class SiteModule {}

