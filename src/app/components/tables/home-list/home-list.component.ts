import { Component, OnInit, Input }  from '@angular/core';

import { Home }                 from '../../../models/home';
import { HomeDataService }              from '../../../services/home.data.service';

@Component({
    selector: 'as-home-list-table',
    templateUrl: 'app/components/tables/home-list/home-list.component.html',
    styleUrls: ['app/components/tables/home-list/home-list.component.css'],
    providers: [HomeDataService]
})

export class HomeListComponent implements OnInit {
    @Input() constellationId: string;
    @Input() hostAgencyId: string;
    homes: Home[];

    constructor(
        private dataService: HomeDataService) {}

    getHome() {
        this.dataService
            .getHomeDetail(this.constellationId, this.hostAgencyId)
            .then(data => {
                this.homes = data as Home[];
            });
    }

    ngOnInit() {
        // this.getHome();
    }
}
