import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ++
import { PokemonRoutingModule } from './pokemons-routing.module';
// BrowserModule inclut CommonModule
// permet de démarrer l'appli dans le navigateur
// CommonModule à importer pour les sous modules (pas module racine)
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonSearchComponent } from './search-pokemon.component';
import { LoaderComponent } from '../loader.component'; // ++

import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsService } from './pokemons.service';
@NgModule({
    imports: [
        CommonModule, 
        FormsModule, // ++ (importer les modules Angular avant propres modules)
        PokemonRoutingModule
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        PokemonFormComponent, 
        EditPokemonComponent, 
        PokemonSearchComponent,
        LoaderComponent, // ++
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers: [PokemonsService] // déclare les services
})
export class PokemonsModule { }