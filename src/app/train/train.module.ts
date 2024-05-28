import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainComponent } from './train/train.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PaymentComponents } from './payment/payment.component';
import { TrainInfoComponent } from './train-info/train-info.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';



@NgModule({
  declarations: [
    TrainComponent,
    BookTicketComponent,
    ViewTicketComponent,
    PaymentComponents,
    TrainInfoComponent,
    TransactionHistoryComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TrainComponent,
    BookTicketComponent,
    ViewTicketComponent,
    PaymentComponents,
    TrainInfoComponent,
    TransactionHistoryComponent,
    AboutUsComponent
  ]
})
export class TrainModule { }
