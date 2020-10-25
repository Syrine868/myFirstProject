"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AreaComponent = void 0;
var core_1 = require("@angular/core");
var AreaComponent = /** @class */ (function () {
    function AreaComponent() {
        this.rayon = 0;
        this.result = 0;
        this.resultcarre = 0;
        this.cote = 0;
    }
    AreaComponent.prototype.ngOnInit = function () {
    };
    AreaComponent.prototype.surfaceCercle = function () {
        if (this.rayon < 0) {
            alert("Must be positive");
        }
        else {
            this.result = 3.14 * this.rayon * this.rayon;
            return this.result;
        }
    };
    AreaComponent.prototype.surfaceCarre = function () {
        if (this.cote < 0) {
            alert("Must be positive");
        }
        else {
            this.resultcarre = this.cote * this.cote;
            return this.resultcarre;
        }
    };
    AreaComponent = __decorate([
        core_1.Component({
            selector: 'app-area',
            templateUrl: './area.component.html',
            styleUrls: ['./area.component.css']
        })
    ], AreaComponent);
    return AreaComponent;
}());
exports.AreaComponent = AreaComponent;
