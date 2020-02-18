import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// précise que l'appli dans un navigateur web

import { AppModule } from './app/app.module';
// AppModule est le module racine

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));