import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe'; // ++

// permet de déclarer un nouveau module
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, BorderCardDirective, PokemonTypeColorPipe], // ++
    bootstrap: [AppComponent] // permet d'identifier le composant racine
    // que Angular appelle au démarrage de l'application
})
export class AppModule { }