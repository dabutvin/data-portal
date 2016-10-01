import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Constellation } from '../../../utils/models/constellation';

@Component({
    moduleId: module.id,
    selector: 'constellation-overview',
    templateUrl: 'constellation-overview.directive.html'
})
export class ConstellationOverviewDirective {
    @Input() constellation: Constellation;

    constructor() { }
}