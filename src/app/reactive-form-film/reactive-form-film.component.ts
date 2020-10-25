import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-film',
  templateUrl: './reactive-form-film.component.html',
  styleUrls: ['./reactive-form-film.component.css']
})
export class ReactiveFormFilmComponent implements OnInit {

  //Créer une prop 

  film_group: FormGroup;
  formb: FormBuilder = new FormBuilder();
  //créer,init le form f west Constructor (ama kbal f ngOnInit)
  constructor() { 
   /* this.film_group = new FormGroup(
      {
        nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
        duree: new FormControl('', [Validators.required, Validators.pattern("[1-9][0-9]*")]),
        categorie: new FormControl('', Validators.required)
      }
    );*/

    this.film_group = this.formb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      duree: ['', [Validators.required, Validators.pattern("[1-9][0-9]*")]],
      categorie: ['', Validators.required]
    });
  }

  get nom() { return this.film_group.get('nom'); }
  get duree() { return this.film_group.get('duree');}
  get categorie() { return this.film_group.get('categorie');}

  
  ngOnInit(): void {
    

  }

}
