"use strict";
exports.__esModule = true;
var Film = /** @class */ (function () {
    function Film(nom, duree, categorie) {
        this.nom = nom;
        this.duree = duree;
        this.categorie = categorie;
    }
    ;
    Film.prototype.getNom = function () {
        return this.nom;
    };
    Film.prototype.getDuree = function () {
        return this.duree;
    };
    Film.prototype.getCategorie = function () {
        return this.categorie;
    };
    Film.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Film.prototype.setDuree = function (duree) {
        this.duree = duree;
    };
    Film.prototype.setCategorie = function (categorie) {
        this.categorie = categorie;
    };
    return Film;
}());
exports["default"] = Film;
