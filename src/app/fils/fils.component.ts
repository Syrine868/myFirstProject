import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() color; 
  @Output() deleteColor= new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }

  sendColor(): void {
    this.deleteColor.emit();

  }
}
