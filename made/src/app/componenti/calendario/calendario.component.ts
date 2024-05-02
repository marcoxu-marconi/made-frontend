import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet, RouterLink} from '@angular/router';
import {FullCalendarModule} from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AUTO_STYLE } from '@angular/animations';


@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,ReactiveFormsModule,FullCalendarModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent {

  constructor(private http:HttpClient) { }

  events:any[] = [];

  ngOnInit() {
    this.http.get('robo di strapi').subscribe(data => {
      this.events.push(data);
    });
  }

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [dayGridPlugin,timeGridPlugin],
    events: this.events,
    height: "auto",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "timeGridDay,timeGridWeek,dayGridMonth"
    },
    nowIndicator: true, // ROBO ROSSO nel timegrid
  };


}
