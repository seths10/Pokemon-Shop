import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
value= ""
@Output() emitter:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  onEnter(name:any)
  {
    console.log(name)
    this.emitter.emit(name.target.value);
  }

  ngOnInit(): void {
  }

}