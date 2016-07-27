import { Component, OnInit, Input }  from '@angular/core';

import { Home }                 from '../../../models/home';
import { ConstellationService }              from '../../../services/constellation.service';

@Component({
    selector: 'as-home-list-table',
    templateUrl: 'app/components/tables/home-list/home-list.component.html',
    styleUrls: ['app/components/tables/home-list/home-list.component.css'],
    providers: [ConstellationService]
})

export class HomeListComponent implements OnInit {
    @Input() constellationId: string;
    @Input() reportDate: string;
    homes: Array<Home>;

    constructor(
        private dataService: ConstellationService) {
        this.homes = new Array<Home>();
    }

    getHome() {
        this.dataService
            .getConstellationHomeDetail(this.constellationId, this.reportDate)
            .then(data => {
                console.log(data);
                data[0].forEach(home => {
                    this.homes.push(new Home(home));
                });
                console.log(this.homes);
            });
    }

    ngOnInit() {
        this.getHome();
    }
}
