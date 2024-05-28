import { Time } from "@angular/common";

export class Flight {
    bookingId?: number;
    source?: string;
    destination?: string;
    date?: Date; // Should be in format 'YYYY-MM-DD' 
    adults?: number;
    children?: number;
    passengerName?: string;
    passengerAge?: number;
    flightName?: string;
    flightNumber?: number;
    seatNumber?: number;
    student?: boolean = false;
    army?: boolean = false;

}
