import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// aide à déclarer les routes de l'application
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';

// routes
const appRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' } // par défaut
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