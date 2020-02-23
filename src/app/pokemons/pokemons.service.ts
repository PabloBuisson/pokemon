import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs'; // ++
// of : opérateur permet de transformer les données passées en paramètres
// en un Observable
import { catchError, map, tap } from 'rxjs/operators';

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

    // <T> indique que l'on va typer u type en lui-même
    // parametre operation : nom de la méthode qui a causé l'erreur
    // operation par défaut
    // result : donnée facultative à renvoyer du résultat de l'Observable
    private handleError<T>(operation='operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);

            return of(result as T);
            // renvoie un résultat adapté à la méthode qui a levé l'erreur
            // renvoie le type attendu par cette méthode
            // tableau pour getPokemons
            // Pokemon pour getPokemon
            // permet de faire fonctionner l'appli même si une erreur est levée
        }
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