"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_pokemon_1 = require("./mock-pokemon"); // ++
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        // étape d'initiliation
        this.pokemons = mock_pokemon_1.POKEMONS;
    };
    AppComponent.prototype.selectPokemon = function (pokemon) {
        alert("Vous avez cliqu\u00E9 sur " + pokemon.name);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-app',
            // correspondant à <pokemon-app></pokemon-app>
            templateUrl: './app/app.component.html',
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// le code de la classe de notre composant
// contient la logique du composant
// convention nomcomposantComponent
//# sourceMappingURL=app.component.js.map