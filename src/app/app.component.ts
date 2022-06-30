import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchWord= "";
  value = ''
  title = 'Pokemon-Shop';
 
  send(keyword:any){
    console.log(keyword)
    this.searchWord = keyword
    console.log('this',  this.searchWord)

  }
  
  ngOnInit(): void {
   

  }
}
