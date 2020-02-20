import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemons-routing.module'; // ++
// BrowserModule inclut CommonModule
// permet de démarrer l'appli dans le navigateur
// CommonModule à importer pour les sous modules (pas module racine)
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

@NgModule({
    imports: [
        CommonModule, 
        PokemonRoutingModule // ++
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers: [] // déclare les services
})
export class PokemonsModule { }