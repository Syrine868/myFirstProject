import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Film from '../model/film';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Film;
  @Output() calculer = new EventEmitter<Film>();
  @Input() val: number;
  constructor() { }

  sendNotif() {
    this.calculer.emit(this.product);
}

  ngOnInit(): void {
  }

}
