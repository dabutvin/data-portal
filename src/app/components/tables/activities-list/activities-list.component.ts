import { Component, OnInit, Input }  from '@angular/core';

import { Activity }                 from '../../../models/activity';
import { ConstellationService }              from '../../../services/constellation.service';

@Component({
    selector: 'as-activity-list-table',
    templateUrl: 'app/components/tables/activities-list/activities-list.component.html',
    styleUrls: ['app/components/tables/activities-list/activities-list.component.css'],
    providers: [ConstellationService]
})

export class ActivityListComponent implements OnInit {
    @Input() constellationId: string;
    @Input() reportDate: string;
    activities: Array<Activity>;

    constructor(
        private dataService: ConstellationService) {
        this.activities = new Array<Activity>();
    }

    getActivity() {
        this.dataService
            .getConstellationActivity(this.constellationId, this.reportDate)
            .then(data => {
                data[0].forEach(activity => {
                    this.activities.push(new Activity(activity));
                });
            });
    }

    ngOnInit() {
        this.getActivity();
    }
}
