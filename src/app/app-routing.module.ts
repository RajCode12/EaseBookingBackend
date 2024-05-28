import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './bus/add-record/add-record.component';
import { ListRecordsComponent } from './bus/list-records/list-records.component';
import { TicketComponent } from './bus/ticket/ticket.component';
import { PaymentComponent } from './bus/payment/payment.component';
import { SelectBusComponent } from './bus/select-bus/select-bus.component';
import { MakePaymentComponent } from './bus/make-payment/make-payment.component';
import { TransactionComponent } from './bus/transaction/transaction.component';
import { AboutComponent } from './bus/about/about.component';
import { TrainComponent } from './train/train/train.component';
import { PaymentComponents } from './train/payment/payment.component';
import { BookTicketComponent } from './train/book-ticket/book-ticket.component';
import { ViewTicketComponent } from './train/view-ticket/view-ticket.component';
import { TrainInfoComponent } from './train/train-info/train-info.component';
import { TransactionHistoryComponent } from './train/transaction-history/transaction-history.component';
import { AboutUsComponent } from './train/about-us/about-us.component';
import { LoginComponent } from './site/login/login.component';
import { ForgetpasswordComponent } from './site/forgetpassword/forgetpassword.component';
import { SignupComponent } from './site/signup/signup.component';
import { HomeComponent } from './site/home/home.component';
import { ContactComponent } from './flight/contact/contact.component';
import { BookFlightComponent } from './flight/book-flight/book-flight.component';
import { BookingsComponent } from './flight/bookings/bookings.component';
import { PaymentComponentss } from './flight/payment/payment.component';
import { ViewTicketComponents } from './flight/view-ticket/view-ticket.component';
import { AboutComponents } from './flight/about/about.component';

const routes: Routes = [
  //login
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forget', component: ForgetpasswordComponent },
  { path: 'home', component: HomeComponent },

  //bus
  {path: 'book', component : AddRecordComponent},
  {path: 'show', component : ListRecordsComponent},
  {path: 'show-ticket', component : TicketComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'select-bus', component: SelectBusComponent},
  {path: 'make-payment', component: MakePaymentComponent},
  {path: 'show-transaction', component: TransactionComponent},
  {path: 'about', component: AboutComponent},

  //train
  {path: 'trains', component: TrainComponent},
  {path: 'book-ticket', component: BookTicketComponent},
  {path: 'view-ticket', component: ViewTicketComponent},
  {path: 'payment2', component: PaymentComponents },
  {path: 'trainInfo', component: TrainInfoComponent},
  {path: 'transactionHistory', component: TransactionHistoryComponent},
  {path: 'aboutus', component: AboutUsComponent},

  //flight
  {path:'contactus', component: ContactComponent},
  {path:'aboutus',component: AboutComponents},
  {path:'bookflight', component: BookFlightComponent},
  {path:'bookings', component: BookingsComponent},
  {path:'view-ticket2', component: ViewTicketComponents},
  {path:'payment3', component: PaymentComponentss},

  //final
  { path: '', redirectTo: 'login', pathMatch: 'full' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
