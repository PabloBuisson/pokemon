import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';
import { AppComponent } from '../app.component';

@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemons/list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {

    private pokemons: Pokemon[];
    
    constructor(private router: Router, 
        private pokemonsService: PokemonsService,
        private appComponent: AppComponent) {
        // instance disponible sous forme de propriété privée this.pokemonsService
        // injection de dépendance garantit que l'instance est unique dans l'appli
        // si on l'utilise dans un autre composant, ça sera la même instance
        // comme c'est unique : sert de stockage provisoire de nos données
        // NE SURTOUT PAS INSTANCIER LE SERVICE DANS LE CONSTRUCTEUR
        // Un service est une boîte noire qui n'interesse pas les composants
     }

    ngOnInit() {
        // étape d'initiliation
        this.pokemonsService.getPokemons()
            .subscribe(pokemons => this.pokemons = pokemons);
            // valorise la propriété pokemons avec le tableau de pokemons 
            // contenu dans l'Observable
        this.appComponent.updateTitle("La liste des Pokémons"); // add title
    }

    selectPokemon(pokemon: Pokemon) {
        console.log(`Vous avez cliqué sur ${pokemon.name}`);
        let link = ['/pokemon', pokemon.id]; // ++
        // [url de redirection, paramètres]
        this.router.navigate(link); // redirection
    }
}