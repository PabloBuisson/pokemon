import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, pipe } from 'rxjs'; // ++
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

    // term : terme de la recherche rentré par l'utilisateur
    searchPokemons(term: string): Observable<Pokemon[]> {
        // terme vide renvoie tableau vide
        if (!term.trim()) {
            return of([]);
        }

        // url de l'API
        return this.http.get<Pokemon[]>(`${this.pokemonUrl}/?name=${term}`).pipe(
            tap(() => this.log(`found pokemons matching "${term}"`)),
            catchError(this.handleError<Pokemon[]>('searchPokemons', []))
        );
    }

    // création d'une méthode de suppresion dans le service
    deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const url = `${this.pokemonUrl}/${pokemon.id}`;
        const HttpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            // déclare une en-tête pour déclarer que la requête sera au format JSON
        };

        return this.http.delete<Pokemon>(url, HttpOptions).pipe(
            tap(() => this.log(`deleted pokemon with id ${pokemon.id}`)),
            catchError(this.handleError<Pokemon>('deletePokemon'))
        );
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const HttpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
            // déclare une en-tête pour déclarer que la requête sera au format JSON
        };

        // put(adresse, corps, options)
        return this.http.put(this.pokemonUrl, pokemon, HttpOptions).pipe(
            tap(() => this.log(`updated pokemon with id : ${pokemon.id}`)),
            catchError(this.handleError<any>('updatePokemon'))
        );
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
    getPokemon(id: number): Observable<Pokemon> {
        const url = `${this.pokemonUrl}/${id}`; 

        return this.http.get<Pokemon>(url).pipe(
            tap(() => this.log(`fetched pokemon with id : ${id}`)),
            catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
        );
    }

    getPokemonTypes(): string[] {
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
                'Poison', 'Fée', 'Vol'];
    }
}