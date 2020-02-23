import { Injectable } from '@angular/core';
// RxJS 6
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false; // L'utilisateur est-il connecté ?
    redirectUrl: string; // où rediriger l'utilisateur après l'authentification ?
    // Une méthode de connexion
    // simule une connexion à un service externe
    login(name: string, password: string): Observable<boolean> {
        // Faites votre appel à un service d'authentification...
        let isLoggedIn = (name === 'pikachu' && password === 'pikachu');

        return of(true).pipe(
            delay(1000),
            tap(val => this.isLoggedIn = isLoggedIn)
        );
        // retourne un observable après un délai d'1s
    }

    // Une méthode de déconnexion
    logout(): void {
        this.isLoggedIn = false;
    }
}