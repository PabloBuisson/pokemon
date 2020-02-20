import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from './pokemon';
// import { POKEMONS } from './mock-pokemons'; --
import { PokemonsService } from './pokemons.service';

@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemons/list-pokemon.component.html',
    // providers: [PokemonsService] --
})
export class ListPokemonComponent implements OnInit {

    private pokemons: Pokemon[];
    
    constructor(private router: Router, private pokemonsService: PokemonsService) {
        // instance disponible sous forme de propriété privée this.pokemonsService
        // injection de dépendance garantit que l'instance est unique dans l'appli
        // si on l'utilise dans un autre composant, ça sera la même instance
        // comme c'est unique : sert de stockage provisoire de nos données
        // NE SURTOUT PAS INSTANCIER LE SERVICE DANS LE CONSTRUCTEUR
        // Un service est une boîte noire qui n'interesse pas les composants
     }

    ngOnInit() {
        // étape d'initiliation
        this.pokemons = this.pokemonsService.getPokemons(); // ++
    }

    selectPokemon(pokemon: Pokemon) {
        console.log(`Vous avez cliqué sur ${pokemon.name}`);
        let link = ['/pokemon', pokemon.id]; // ++
        // [url de redirection, paramètres]
        this.router.navigate(link); // redirection
    }
}