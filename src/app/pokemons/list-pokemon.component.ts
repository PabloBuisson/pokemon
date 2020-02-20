import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'; // ++

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';

@Component({
    selector: 'list-pokemon', // ++
    templateUrl: './app/pokemons/list-pokemon.component.html', // ++
})
export class ListPokemonComponent implements OnInit {

    private pokemons: Pokemon[];
    
    constructor(private router: Router) { } // ++

    ngOnInit() {
        // étape d'initiliation
        this.pokemons = POKEMONS;
    }

    selectPokemon(pokemon: Pokemon) {
        console.log(`Vous avez cliqué sur ${pokemon.name}`);
        let link = ['/pokemon', pokemon.id]; // ++
        // [url de redirection, paramètres]
        this.router.navigate(link); // redirection
    }
}