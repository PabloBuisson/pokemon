import { Component } from '@angular/core';
// import { nom élément } from 'nom paquet source'
// import { Component } obligatoire

@Component({
    selector: 'pokemon-app', // obligatoire : donne un nom au composant
    // correspondant à <pokemon-app></pokemon-app>
    template: `<h1>Hello {{name}}</h1>`, // obligatoire : définit le code HTML
})
export class AppComponent { name = 'Angular'; }
// le code de la classe de notre composant
// contient la logique du composant
// convention nomcomposantComponent