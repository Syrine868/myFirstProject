"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ParentComponent = void 0;
var core_1 = require("@angular/core");
var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
    }
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent.prototype.show = function () {
    };
    __decorate([
        core_1.Input()
    ], ParentComponent.prototype, "color");
    ParentComponent = __decorate([
        core_1.Component({
            selector: 'app-parent',
            templateUrl: './parent.component.html',
            styleUrls: ['./parent.component.css']
        })
    ], ParentComponent);
    return ParentComponent;
}());
exports.ParentComponent = ParentComponent;
