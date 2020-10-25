"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserComponent = void 0;
var core_1 = require("@angular/core");
var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.name = 'toto';
        this.email = 'toto@esprit.tn';
        this.address = "rue d\'usine Chotrana Ariana";
        this.hobbies = ['Music', 'Movies', 'Sports'];
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.Display = function () {
        return this.hobbies;
    };
    UserComponent.prototype.supprimer = function (i) {
        var index = this.hobbies.indexOf(this.hobbies[i]);
        if (index > -1)
            this.hobbies.splice(index, 1);
        console.log(this.hobbies);
    };
    UserComponent.prototype.Masquer = function () {
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
