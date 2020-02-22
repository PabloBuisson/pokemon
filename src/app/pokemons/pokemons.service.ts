import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs'; // ++
import { catchError, map, tap } from 'rxjs/operators'; // ++

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable() // permet d'indiquer que ce service peut avoir des dépendances
export class PokemonsService {
    
    // pour créer une url vers laquelle nous allons appeler l'API ++ 
    private pokemonUrl = 'api/pokemons';

    constructor(private http: HttpClient) { } // ++

    private log(log: string) { // ++
        console.info(log);
        // centralise la gestion des logs de notre service
    }

    // retourne un Observable, qui contient un tableau de pokémons
    getPokemons(): Observable<Pokemon[]> {
        // la méthode get de la propriété retourne un Observable de type Pokemon[]
        // Observable qui envoie une requête HTTP de type GET sur la route api/pokemons
        // l'opérateur tap interagit sur le déroulement des événements générés par l'Observable
        // utilisé pour débugagge, archivage de log... 
        // l'opérateur catchError capte les erreurs
        // le module renvoie les données sous format JSON
        return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
            tap(() => this.log(`fetched pokemons`)),
            catchError(this.handleError(`getPokemons`, []))
        );
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Pokemon {
        let pokemons = this.getPokemons();

        for (let index = 0; index < pokemons.length; index++) {
            if (id === pokemons[index].id) {
                return pokemons[index];
            }
        }
    }

    getPokemonTypes(): string[] {
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
                'Poison', 'Fée', 'Vol'];
    }
}