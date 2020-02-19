import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailPokemonComponent } from './detail-pokemon.component'; // ++
import { ListPokemonComponent } from './list-pokemon.component'; // ++

import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { AppRoutingModule } from './app-routing.module'; // ++

// permet de déclarer un nouveau module
@NgModule({
    imports: [BrowserModule, AppRoutingModule], // ++
    declarations: [
        AppComponent, 
        BorderCardDirective, 
        PokemonTypeColorPipe,
        ListPokemonComponent, // ++
        DetailPokemonComponent // ++
    ]
    bootstrap: [AppComponent] // permet d'identifier le composant racine
    // que Angular appelle au démarrage de l'application
})
export class AppModule { }