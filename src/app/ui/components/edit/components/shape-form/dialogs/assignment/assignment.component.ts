import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Shape } from 'src/app/shape';
import { HttpClientService } from 'src/app/services/http-client.service';
import { TicketCreate } from 'src/app/models/ticket/ticket-create';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Shape, private httpClientService: HttpClientService) { }

  tickets: Array<any>;
  ticketId: any;

  ngOnInit(): void {

    this.httpClientService.get<any[]>({
      controller: "tickets"
    }).subscribe(response => this.tickets = response)

  }

  saveTicket(Input, Select) {
    this.ticketId = null;

    if (Select == undefined) {
      var createTicket = new TicketCreate();
      createTicket.name = Input;

      this.httpClientService.post({
        controller: "tickets"
      }, createTicket).subscribe(response => {

        this.assignTicket(response['id']);

      });

    }
    else {
      this.ticketId = Select;
      this.assignTicket(this.ticketId)


    }


  }
  assignTicket(id: any) {


    this.data.ticketId = id;

    this.httpClientService.put({
      controller: "shapes"
    }, this.data).subscribe();

  }


}
