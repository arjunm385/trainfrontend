import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  item = {
    id: localStorage.getItem("tid"),
    name: localStorage.getItem("userid"),
    source: localStorage.getItem("start"),
    destination: localStorage.getItem("end"),
    travelDate: localStorage.getItem("date"),
    totalDistance: localStorage.getItem("dist"),
    passengerName: localStorage.getItem("passengerName"),
    passengerAge: localStorage.getItem("passengerAge"),
    passengerGender: localStorage.getItem("passengerGender"),
    disabled: localStorage.getItem("disabled"),


    trainname: localStorage.getItem("tname"),

    coachid: localStorage.getItem("coachid"),
    seatno: localStorage.getItem("seatno"),
    ticketprice: localStorage.getItem("ticketprice")
    // price: localStorage.getItem("price")
  }

  size = 250;
  qrInfo = JSON.stringify(this.item);

}
