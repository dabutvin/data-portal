import { Component, OnInit } from '@angular/core';

import { ConstellationService } from '../../services/constellation.service';
import { Constellation } from '../../models/constellation';
import { ActivityListComponent } from '../tables/activities-list/activities-list.component';

@Component({
    selector: 'as-hub-provider',
    templateUrl: 'app/components/hub-provider/hub-provider.component.html',
    providers: [ConstellationService],
    directives: [ActivityListComponent]
})

export class HubProviderComponent implements OnInit {

    constellationId: string = '123';
    reportDate: string = '10.10.2010';

    constellation: Constellation;

    getContellationOverview() {
        this.constellationService.getConstellationOverview(this.constellationId, this.reportDate)
            .then(data => {
                this.constellation = new Constellation(data[0][0]);
            });
    }

    constructor(
        private constellationService: ConstellationService) {}

    ngOnInit() {
        this.getContellationOverview();
    }
}
