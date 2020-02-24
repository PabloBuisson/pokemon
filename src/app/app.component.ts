import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'; // ++

@Component({
    selector: 'pokemon-app', // obligatoire : donne un nom au composant
    // correspondant à <pokemon-app></pokemon-app>
    templateUrl: './app/app.component.html', // chemin relatif au template
    // par convention, template et composant sont dans le même fichier
})
export class AppComponent {
    // n'a plus de logique interne
    // rôle d'affichage seulement

    // rajout du service Title
    public constructor(private titleService: Title) { }

    public updateTitle(title: string) {
        this.titleService.setTitle(title);
    }
}
// le code de la classe de notre composant
// contient la logique du composant
// convention nomcomposantComponent