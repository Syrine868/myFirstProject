
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { FilmsComponent } from './films/films.component';
import { FormFilmComponent } from './form-film/form-film.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SalleComponent } from './salle/salle.component';
import { SallesListComponent } from './salles-list/salles-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UpdateComponent } from './update/update.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';


const routes: Routes = [
  { path: 'home', component: FilmsComponent }, 
  { path: 'form', component: FormFilmComponent },
  { path: 'salles', component: SallesListComponent },
  { path: 'detail/:id', component: SalleComponent },
  { path: 'details/:nom/:capacite', component: SalleComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'usersList', component: UtilisateurComponent },
  { path: 'usertodo/:userId', component: NotFoundComponent, data: { title: 'User ToDo' } },
  { path: 'users', component: UtilisateurComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'updateUser/:id', component: UpdateComponent },
  { path: 'deleteUser/:id', component: UtilisateurComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
