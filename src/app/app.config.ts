import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

//permet de communiquer avec l'API PHP
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    //provideBrowserGlobalErrorListeners Écoute tout ce qui plante
    //globalement dans la fenêtre du navigateur (window.onerror)
    //et remonte l'information proprement
    //dans la console pour que le développeur puisse comprendre ce qu'il se passe.
    provideBrowserGlobalErrorListeners(),

    //permet d'envyer des requêtes à php via le protocole http
    provideHttpClient(),
  ],
};
