import { Component } from '@angular/core';

import { YouthListComponent } from '../components/tables/youth-list/youth-list.component';

@Component({
    selector: 'as-home',
    templateUrl: 'app/home/home.html',
    styleUrls: [
        'app/home/home.css'
    ],
    directives: [YouthListComponent],
})
export class HomeComponent {

    constellationId: String = '123';
    hostAgencyId: String = '456';

}
