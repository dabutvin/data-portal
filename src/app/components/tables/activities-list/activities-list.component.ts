import { Component, OnInit, Input }  from '@angular/core';

import { Activity }                 from '../../../models/activity';
import { ActivityDataService }              from '../../../services/activity.data.service';

@Component({
    selector: 'as-activity-list-table',
    templateUrl: 'app/components/tables/activities-list/activities-list.component.html',
    styleUrls: ['app/components/tables/activities-list/activities-list.component.css'],
    providers: [ActivityDataService]
})

export class ActivityListComponent implements OnInit {
    @Input() constellationId: string;
    @Input() hostAgencyId: string;
    activities: Activity[];

    constructor(
        private dataService: ActivityDataService) {}

    getActivity() {
        this.dataService
            .getActivityDetail(this.constellationId, this.hostAgencyId)
            .then(data => {
                this.activities = data as Activity[];
            });
    }

    ngOnInit() {
        // this.getActivity();
    }
}
