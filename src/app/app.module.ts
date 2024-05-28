import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BusModule } from './bus/bus.module';
import { TrainModule } from './train/train.module';
import { SiteModule } from './site/site.module';
import { FlightModule } from './flight/flight.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BusModule,
    TrainModule,
    FlightModule,
    SiteModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
