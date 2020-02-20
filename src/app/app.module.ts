import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { DetailPokemonComponent } from './pokemons/detail-pokemon.component'; --
// import { ListPokemonComponent } from './pokemons/list-pokemon.component'; --

// import { BorderCardDirective } from './pokemons/border-card.directive'; --
// import { PokemonTypeColorPipe } from './pokemons/pokemon-type-color.pipe'; --
import { AppRoutingModule } from './app-routing.module'; 
import { PageNotFoundComponent } from './page-not-found.component';
import { PokemonsModule } from './pokemons/pokemons.module'; // ++

// permet de déclarer un nouveau module
@NgModule({
    imports: [
        BrowserModule, // ordre : modules avant les routes
        PokemonsModule, // ++
        AppRoutingModule // ordre détermine l'ordre de déclaration des routes
    ], 
    declarations: [
        AppComponent, 
        // BorderCardDirective, --
        // PokemonTypeColorPipe, --
        // ListPokemonComponent, --
        // DetailPokemonComponent, --
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent] // permet d'identifier le composant racine
    // que Angular appelle au démarrage de l'application
})
export class AppModule { }