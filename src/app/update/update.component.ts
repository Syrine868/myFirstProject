import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../model/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  u: Utilisateur; 
  
  constructor(private router: Router, private userService: UtilisateurService)
  { 
    this.u = new Utilisateur();
  }

  ngOnInit(): void {
  }

  update() {
    this.userService.updateUser(this.u.id, this.u)
      .subscribe(
        resultat => {
          console.log("User updated");
          this.router.navigateByUrl('/users');
        }, (err) => {
          console.log(err);
        }
      );
  }
}
