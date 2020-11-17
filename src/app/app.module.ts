import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FilmsComponent } from './films/films.component';
import { AreaComponent } from './area/area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ParentComponent } from './parent/parent.component';
import { FilsComponent } from './fils/fils.component';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';
import { ToEuroConvertComponent } from './to-euro-convert/to-euro-convert.component';
import { FormFilmComponent } from './form-film/form-film.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormFilmComponent } from './reactive-form-film/reactive-form-film.component';
import { UserReactiveFormComponent } from './user-reactive-form/user-reactive-form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { SallesListComponent } from './salles-list/salles-list.component';
import { SalleComponent } from './salle/salle.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FilmsComponent,
    AreaComponent,
    ProductComponent,
    ParentComponent,
    FilsComponent,
    ConvertisseurComponent,
    ToEuroConvertComponent,
    FormFilmComponent,
    UserFormComponent,
    TemplateDrivenFormComponent,
    ReactiveFormFilmComponent,
    UserReactiveFormComponent,
    ModelDrivenFormComponent,
    ContactsComponent,
    HomeComponent,
    SallesListComponent,
    SalleComponent,
    NotFoundComponent,
    TodoListComponent,
    UtilisateurComponent,
    AddUserComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
