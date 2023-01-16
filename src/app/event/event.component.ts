import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  text: string | undefined;
  myEvent(evt: any){
    console.log(evt)
  }
  event(e: any){
    console.log(e)
  }
  et(e: any){
    console.log(e)
  }
}
