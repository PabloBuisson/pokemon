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
    constructor(private el: ElementRef) {
        this.setBorder('#f5f5f5');
        this.setHeight(180);
    }

    @Input('pkmnBorderCard') borderColor: string; // ++
    // @Input('nomDirective) alias;

    // déclenché à l'evenement mouseenter
    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || '#009688');
        // 2ème choix si l'utilisateur ne choisit rien
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('#f5f5f5');
    }

    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }
}