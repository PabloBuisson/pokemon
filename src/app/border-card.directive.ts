import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// ElementRef : objet du DOM sur lequel on applique la directive
// HostListener : lier une méthode de la directive à un event
// Input : pour préciser la propriété d'entrée

@Directive({
    selector: '[pkmnBorderCard]' // nom de l'attribut qui déclenche la directive
    // crée une instance de la directive
    // il est recommandé de préfixer le nom des directives (pour éviter collisions)
    // ne pas utiliser ng
    // utiliser cameCase
})
export class BorderCardDirective {

    private initialColor: string = '#f5f5f5'; // couleur initiale
    private defaultColor: string = '#009688'; // couleur si l'utilisateur n'a pas fait de choix
    private defaultHeight: number = 180; // hauteur par défaut

    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
    }

    @Input('pkmnBorderCard') borderColor: string; // ++
    // @Input('nomDirective) alias;

    // déclenché à l'evenement mouseenter
    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || this.defaultColor);
        // 2ème choix si l'utilisateur ne choisit rien
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder(this.initialColor);
    }

    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }
}