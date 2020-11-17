import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { todo } from '../model/todo';
import { Utilisateur } from '../model/utilisateur';
import { ToDoService } from '../services/to-do.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  listUsers: Utilisateur[];
 /* listTodo: todo[];
  input_by_value: string = "";
  count_by_value: number = 0;
  res_by_value: string = "";
  d: any[];
  nb = 0;
  
  my_input_text: string = "";*/
  u: Utilisateur = new Utilisateur();
  constructor(private router: Router, private us: UtilisateurService, private ts: ToDoService) { }

  ngOnInit(): void {
   // this.listUsers = this.us.getUsers();
    this.us.getUsersByUrl().subscribe((data: Utilisateur[]) => {
      this.listUsers = data
    }, (err) => {
      console.log(err);
    }
    );

  }

  delete(id: number)
  {
    this.us.deleteUser(id).subscribe(
      resultat => {
        console.log("User deleted");
        this.router.navigateByUrl('/users');
      }, (err) => {
        console.log(err);
      }
    );
  //  this.us.getUsersByUrl().subscribe();
  }


  getUsersFromService() {
 
  }
/** Function COUNT BY USERNAME  
countNbUsersByValue(compteur: number , my_input_text:string): string
{
  for (compteur = 0; compteur < this.listUsers.length; compteur++)
  {
    if (this.listUsers[compteur].username == my_input_text)
    {
      this.count_by_value = this.count_by_value + 1;
    }
  }
     return this.res_by_value = "Nb de Users By Username = "+this.count_by_value + " / "+compteur;
}


  getUsers() {
    this.us.getTodoList().subscribe(
    (data:Utilisateur[])=>{this.listUsers = data});
  }*/
  
}
