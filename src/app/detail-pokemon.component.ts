import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
// pour extraire l'id du pokemon à afficher
// router : redirige l'utilisateur
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

    pokemons: Pokemon[] = null; // liste de tous les pokemons
    pokemon: Pokemon = null; // le pokemon à afficher

    constructor(private route: ActivatedRoute, private router: Router) { }
    // je récupère des informations depuis l'url du composant grâce à route
    // j'aurais besoin de rediriger l'utilisateur grâce à Router

    ngOnInit(): void {
        this.pokemons = POKEMONS;

        let id = +this.route.snapshot.paramMap.get('id'); // +permetDeCasterValeurEnNnombre
        // récupère l'id contenue dans l'url
        // propriété snapshot : synchrone (bloque l'éxécution du programme tant
        // que l'id n'est pas récupérée)
        for (let i = 0; i < this.pokemons.length; i++) {
            if (this.pokemons[i].id == id) {
                this.pokemon = this.pokemons[i];
            }
        }
    }

    goBack(): void {
        this.router.navigate(['/pokemons']);
        // revient à la page d'accueil
        // url dans un tableau
        // window.history.back(); // même processus, moins fiable
        // car on ne sait pas d'où il vient
    }

}