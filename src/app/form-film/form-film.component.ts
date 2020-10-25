import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Film from '../model/film';

@Component({
  selector: 'app-form-film',
  templateUrl: './form-film.component.html',
  styleUrls: ['./form-film.component.css']
})
export class FormFilmComponent implements OnInit {
  film: Film = new Film();
  @Output() newfilm = new EventEmitter<Film>();

  constructor() { }

  ngOnInit(): void {
  }
  save() {
    this.newfilm.emit(this.film);
    console.log(this.film)
  }

}
