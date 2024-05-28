import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRecordsComponent } from './list-records/list-records.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketComponent } from './ticket/ticket.component';
import { PaymentComponent } from './payment/payment.component';
import { SelectBusComponent } from './select-bus/select-bus.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    ListRecordsComponent,
    AddRecordComponent,
    TicketComponent,
    PaymentComponent,
    SelectBusComponent,
    MakePaymentComponent,
    TransactionComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ], 
  exports: [
    ListRecordsComponent,
    AddRecordComponent,
    TicketComponent,
    PaymentComponent,
    SelectBusComponent,
    MakePaymentComponent,
    TransactionComponent,
    AboutComponent
  ]
})
export class BusModule { }
