"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilsComponent = void 0;
var core_1 = require("@angular/core");
var FilsComponent = /** @class */ (function () {
    function FilsComponent() {
        this.color = new core_1.EventEmitter();
    }
    FilsComponent.prototype.ngOnInit = function () {
    };
    FilsComponent.prototype.recuperer = function () {
        this.color.emit(this.color);
    };
    __decorate([
        core_1.Output()
    ], FilsComponent.prototype, "color");
    FilsComponent = __decorate([
        core_1.Component({
            selector: 'app-fils',
            templateUrl: './fils.component.html',
            styleUrls: ['./fils.component.css']
        })
    ], FilsComponent);
    return FilsComponent;
}());
exports.FilsComponent = FilsComponent;
