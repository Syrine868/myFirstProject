import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-to-euro-convert',
  templateUrl: './to-euro-convert.component.html',
  styleUrls: ['./to-euro-convert.component.css']
})
export class ToEuroConvertComponent implements OnInit {
  i: string = "";
  @Input() val : string;
  resultat: string = "";
  @Output() liked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sendNotif(){
    this.liked.emit(this.val);
 }
}
