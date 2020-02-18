"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
// précise que l'appli dans un navigateur web
var app_module_1 = require("./app/app.module");
// AppModule est le module racine
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map