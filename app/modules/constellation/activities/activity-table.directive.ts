import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Activity } from '../../../utils/models/activity';

@Component({
    moduleId: module.id,
    selector: 'activity-table',
    templateUrl: 'activity-table.directive.html'
})
export class ActivityTableDirective {
    @Input() activities: Array<Activity>;

    constructor() { }
}