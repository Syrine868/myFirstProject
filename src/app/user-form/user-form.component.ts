import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  //Instanciation de la classe user dans le componnent fils
  u: User = new User();

  //Création de l'output de type EventEmitter
  @Output() addnewuser = new EventEmitter<User>();
  constructor() { }


  ngOnInit(): void {
  }

    //Création de la fonction permettant l'ajout de nv user
  createuser() {
    //ajout user vc la fonction emit qui prend le user à ajouter
    this.addnewuser.emit(this.u);
    console.log( this.u);
   }
}
