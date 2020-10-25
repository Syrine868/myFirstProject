"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var user_component_1 = require("./user/user.component");
var films_component_1 = require("./films/films.component");
var area_component_1 = require("./area/area.component");
var forms_1 = require("@angular/forms");
var product_component_1 = require("./product/product.component");
var parent_component_1 = require("./parent/parent.component");
var fils_component_1 = require("./fils/fils.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                films_component_1.FilmsComponent,
                area_component_1.AreaComponent,
                product_component_1.ProductComponent,
                parent_component_1.ParentComponent,
                fils_component_1.FilsComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [parent_component_1.ParentComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
