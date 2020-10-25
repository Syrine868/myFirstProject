"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilmsComponent = void 0;
var core_1 = require("@angular/core");
var FilmsComponent = /** @class */ (function () {
    function FilmsComponent() {
        this.listFilms = [
            {
                nom: 'MANDY', duree: 2, categorie: 'action'
            },
            {
                nom: 'LOVE-AFTER-LOVE', duree: 3, categorie: 'drama'
            },
            {
                nom: 'YOU-WERE-NEVER-REALLY-HERE', duree: 2, categorie: 'drama'
            },
            {
                nom: 'THE-RIDER', duree: 3, categorie: 'drama'
            },
            {
                nom: 'FIRST-REFORMED', duree: 6, categorie: 'action'
            },
        ];
        this.i = 0;
        this.resultat = "";
    }
    FilmsComponent.prototype.ngOnInit = function () {
    };
    FilmsComponent.prototype.calcul2 = function (p) {
        p.duree += 1;
    };
    FilmsComponent.prototype.calculer = function (nb) {
        for (nb = 0; nb < this.listFilms.length; nb++) {
            if (this.listFilms[nb].categorie == 'action') {
                this.i = this.i + 1;
            }
        }
        this.resultat = "Nombre de films dont la catégorie 'Action' est : " + this.i + " sur  " + nb + " films";
    };
    FilmsComponent = __decorate([
        core_1.Component({
            selector: 'app-films',
            templateUrl: './films.component.html',
            styleUrls: ['./films.component.css']
        })
    ], FilmsComponent);
    return FilmsComponent;
}());
exports.FilmsComponent = FilmsComponent;
