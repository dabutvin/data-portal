import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
    public appBrand: string;

    constructor() {
        this.appBrand = 'Mockingbird Family Model';
    }
}
