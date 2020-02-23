import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
// service qui implemente l'interface CanActivate
export class AuthGuard implements CanActivate {

    canActivate(): boolean {
        console.info(`Le guard a bien été appelé !`);
        return true;
    }

}