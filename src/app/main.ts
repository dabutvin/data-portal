import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { HTTP_PROVIDERS } from '@angular/http';


import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';

import { HttpUtilsService } from './utils/httpUtils.service';
import { Config } from './utils/config';



declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    APP_PROVIDERS,
    HTTP_PROVIDERS,
    HttpUtilsService,
    Config
]);
