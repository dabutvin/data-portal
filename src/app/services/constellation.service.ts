import { Injectable }     from '@angular/core';

import { HttpUtilsService } from '../utils/httpUtils.service';

@Injectable()
export class ConstellationService {

    constructor(private httpUtil: HttpUtilsService) { }

    getConstellationOverview(constellationId: string, reportDate: string) {
        const url = `api/constellation/${constellationId}/overview/${reportDate}`;
        return this.httpUtil.get(url);
    }

    getConstellationActivity(constellationId: string, reportDate: string) {
        const url = `api/constellation/${constellationId}/activities/${reportDate}`;
        return this.httpUtil.get(url);
    }
}
