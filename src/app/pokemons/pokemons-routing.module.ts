import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component'; // ++

// les routes du module Pokémon
// ne concernent que les pokemons
// pas de page d'accueil ni de page 404
const pokemonsRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/edit/:id', component: EditPokemonComponent },  // ++
    // en 2° pour éviter d'être écrasé par la requête pokemon/:id
    // ordre : du plus précis au plus général
    { path: 'pokemon/:id', component: DetailPokemonComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
        // forChild() pour ajouter des routes additionnelles
        // aux routes du module racine
        // forRoot() seulement pour le module racine !
        // permet de modifier les routes du module
        // sans modifier celles du module principal
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }