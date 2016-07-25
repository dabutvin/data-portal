import { Component, OnInit, Input } from '@angular/core';

import { Child } from '../../../models/child';
import { DataService } from '../../../services/data.service';


@Component({
    selector: 'as-youth-list-table',
    templateUrl: 'app/components/tables/youth-list/youth-list.component.html',
    styleUrls: ['app/components/tables/youth-list/youth-list.component.css'],
    providers: [DataService]
})

export class YouthListComponent implements OnInit {
    @Input() constellationId: string;
    @Input() hostAgencyId: string;
    children: Child[];

    constructor(
        private dataService: DataService) {}

    getYouth() {
        this.dataService
            .getYouthDetail(this.constellationId, this.hostAgencyId)
            .then(data => {
                this.children = data as Child[];
            });
    }

    ngOnInit() {
        // this.getYouth();
    }
}
