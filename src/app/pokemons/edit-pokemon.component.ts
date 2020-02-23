import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'edit-pokemon',
  // affiche le pokemon seulement s'il existe pokemon?name
  template: `
    <h2 class="header center">Editer {{ pokemon?.name }}</h2>
		<p class="center">
			<img *ngIf="pokemon" [src]="pokemon.picture"/>
		</p>
    <pokemon-form [pokemon]="pokemon"></pokemon-form>
  `,
  // <pokemon-form>Composant du formulaire 
  //  [liaison de propriété]="valeur d'entrée du composant"</pokemon-form>
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService) {}

  ngOnInit(): void {

    let id = +this.route.snapshot.paramMap.get('id');

    this.pokemonsService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
    // valorise la propriété pokemon avec l'objet Pokemon 
    // contenu dans l'Observable
  }

}