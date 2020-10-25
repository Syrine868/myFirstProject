import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name = 'toto';
  email = 'toto@esprit.tn';
  address = "rue d\'usine Chotrana Ariana";
  hobbies = ['Music', 'Movies', 'Sports'];

  //Création de la liste des utilisateurs
  listUsers: any = [
      {
        nom: 'MANDY', email: "sdfghjkl" , cin: 1234567
      }
  ];
  constructor() {  }

  ngOnInit(): void {

  }

  Display()
  {
    return this.hobbies;
  }
  supprimer( i: number)
  {

      let index = this.hobbies.indexOf(this.hobbies[i]);
      if (index > -1)
        this.hobbies.splice(index, 1);

    console.log(this.hobbies);
  }

  //Création de la fonction eventCreateUser
  eventcreateuser(u: User)
  {
    //ajouter le user dans la liste avec la méthode push()
    this.listUsers.push(u);
 
  }

}
