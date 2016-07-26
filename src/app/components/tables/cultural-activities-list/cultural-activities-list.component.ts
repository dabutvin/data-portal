import { Component, OnInit, Input }  from '@angular/core';

import { CulturalActivity }                 from '../../../models/cultural-activity';
import { CulturalActivityDataService }              from '../../../services/cultural-activity.data.service';

@Component({
    selector: 'as-cultural-activity-list-table',
    templateUrl: 'app/components/tables/cultural-activities-list/cultural-activities-list.component.html',
    styleUrls: ['app/components/tables/cultural-activities-list/cultural-activities-list.component.css'],
    providers: [CulturalActivityDataService]
})

export class ActivityListComponent implements OnInit {
    @Input() constellationId: string;
    @Input() hostAgencyId: string;
    activities: CulturalActivity[];

    constructor(
        private dataService: CulturalActivityDataService) {}

    getCulturalActivity() {
        this.dataService
            .getCulturalActivityDetail(this.constellationId, this.hostAgencyId)
            .then(data => {
                this.activities = data as CulturalActivity[];
            });
    }

    ngOnInit() {
        // this.getCulturalActivity();
    }
}
