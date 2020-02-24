import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser'; // ++
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PokemonsModule } from './pokemons/pokemons.module';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LoginRoutingModule } from './login-routing.module';

import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './login.component'; // ++

// permet de déclarer un nouveau module
@NgModule({
    imports: [
        BrowserModule, // ordre : modules avant les routes
        HttpClientModule,
        FormsModule, // ++
        // intercepte les requêtes HTTP et retourne les requêtes simulées du serveur
        // dataEncapsulation précise le format des données renvoyées par l'API
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
        PokemonsModule,
        LoginRoutingModule, // ++
        AppRoutingModule // ordre détermine l'ordre de déclaration des routes
    ], 
    declarations: [
        AppComponent, 
        LoginComponent, // ++
        PageNotFoundComponent
    ],
    providers: [Title], // fournit le service 'Title' à l'ensemble de l'application  
    bootstrap: [AppComponent] // permet d'identifier le composant racine
    // que Angular appelle au démarrage de l'application
})
export class AppModule { }