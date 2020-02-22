import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // ++

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { PageNotFoundComponent } from './page-not-found.component';
import { PokemonsModule } from './pokemons/pokemons.module';

// permet de déclarer un nouveau module
@NgModule({
    imports: [
        BrowserModule, // ordre : modules avant les routes
        HttpClientModule, // ++
        PokemonsModule,
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