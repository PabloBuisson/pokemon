import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// aide à déclarer les routes de l'application
import { ListPokemonComponent } from './pokemons/list-pokemon.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component'; // ++

// routes
const appRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' }, // par défaut
    { path: '**', component: PageNotFoundComponent} 
    // capture toutes les routes pas interceptées précédemment
    // a mettre en dernier dans le tableau
    // l'ordre des routes est important : routes précises, puis routes générales
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) // déclare les routes
    ],
    exports: [
        RouterModule // exporte les routes
    ]
})
export class AppRoutingModule { }