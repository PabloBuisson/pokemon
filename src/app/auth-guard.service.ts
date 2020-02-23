import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }
    from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    // injecte notre service d'authentification + router
    constructor(private authService: AuthService, private router: Router) { }

    // l'objet route : la future route qui sera appelée
    // l'objet state : futur état du routeur de l'appli
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    // retourne un booleen de manière synchrone
    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) { return true; }
        this.authService.redirectUrl = url; // stocke l'url où l'authentification a échoué
        this.router.navigate(['/login']); // redirige vers la page de connexion

        return false;
    }

}