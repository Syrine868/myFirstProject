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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [UserReactiveFormComponent]
})
export class AppModule { }
