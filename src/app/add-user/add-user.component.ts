import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../model/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  listUsers: Utilisateur[] = [];
  u: Utilisateur = new Utilisateur();
  constructor(private userService :UtilisateurService, private router:Router) { }

  ngOnInit(): void {
  }

  save() {
    this.userService.addUser(this.u).subscribe(
      resultat => {
        console.log("User added");
        this.router.navigateByUrl('/users');
      }, (err) => {
        console.log(err);
      }
    )
  }
}
