import { Component } from '@angular/core';
// import { nom élément } from 'nom paquet source'
// import { Component } obligatoire
import { OnInit } from '@angular/core'; // ++ (d'abord les angular core)

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon'; // ++

@Component({
    selector: 'pokemon-app', // obligatoire : donne un nom au composant
    // correspondant à <pokemon-app></pokemon-app>
    templateUrl: './app/app.component.html', // chemin relatif au template
    // par convention, template et composant sont dans le même fichier
})
export class AppComponent {
    // n'a plus de logique interne
    // rôle d'affichage seulement
}
// le code de la classe de notre composant
// contient la logique du composant
// convention nomcomposantComponent