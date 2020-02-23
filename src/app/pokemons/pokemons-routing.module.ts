import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';

import { AuthGuard } from '../auth-guard.service'; // ++

// les routes du module Pokémon
// ne concernent que les pokemons
// pas de page d'accueil ni de page 404
// reorganisation pour appliquer toutes les routes pokemons à notre Guard
const pokemonsRoutes: Routes = [
    {
        path: 'pokemon', // définit un préfixe pour toutes les routes
        canActivate: [AuthGuard], // toutes les routes sont protégées d'un coup
        children: [
            { path: 'all', component: ListPokemonComponent },
            { path: 'edit/:id', component: EditPokemonComponent, canActivate: [AuthGuard] },  // ++
            // en 2° pour éviter d'être écrasé par la requête pokemon/:id
            // ordre : du plus précis au plus général
            { path: ':id', component: DetailPokemonComponent }
        ]
    }
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